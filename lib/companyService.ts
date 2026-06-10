const FIRESTORE_TIMEOUT_MS = 10_000;

type FirestoreValue = {
  stringValue?: string;
  integerValue?: string;
  doubleValue?: number;
  booleanValue?: boolean;
  timestampValue?: string;
  nullValue?: null;
};

type FirestoreDocument = {
  name: string;
  fields?: Record<string, FirestoreValue>;
};

type FirestoreListResponse = {
  documents?: FirestoreDocument[];
};

export type Company = {
  id: string;
  name: string;
  country?: string;
  year?: number | string;
};

export type CompanyHoliday = {
  id: string;
  title: string;
  date: string;
  type: string;
};

function getDocumentId(documentName: string) {
  return documentName.split('/').pop() ?? documentName;
}

function getStringField(
  fields: FirestoreDocument['fields'],
  fieldName: string
) {
  return fields?.[fieldName]?.stringValue;
}

function getTrimmedStringField(
  fields: FirestoreDocument['fields'],
  fieldName: string
) {
  const entry = Object.entries(fields ?? {}).find(
    ([key]) => key.trim() === fieldName
  );

  return entry?.[1].stringValue?.trim();
}

async function listDocuments(path: string): Promise<FirestoreDocument[]> {
  const projectId = process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID;
  const apiKey = process.env.EXPO_PUBLIC_FIREBASE_API_KEY;

  if (!projectId || !apiKey) {
    throw new Error('Firebase project ID or API key is missing');
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FIRESTORE_TIMEOUT_MS);
  const encodedPath = path.split('/').map(encodeURIComponent).join('/');
  const url =
    `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(projectId)}` +
    `/databases/(default)/documents/${encodedPath}?key=${encodeURIComponent(apiKey)}`;

  try {
    const response = await fetch(url, { signal: controller.signal });

    if (!response.ok) {
      throw new Error(`Firestore request failed with status ${response.status}`);
    }

    const result = (await response.json()) as FirestoreListResponse;
    return result.documents ?? [];
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Firestore request timed out');
    }

    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function getCompanies(): Promise<Company[]> {
  const documents = await listDocuments('companies');

  return documents
    .map((document) => ({
      id: getDocumentId(document.name),
      name: getTrimmedStringField(document.fields, 'name') ?? '',
      country: getStringField(document.fields, 'country'),
      year: getStringField(document.fields, 'year'),
    }))
    .filter((company) => company.name.length > 0);
}

export async function getCompanyHolidays(
  companyId: string
): Promise<CompanyHoliday[]> {
  const normalizedCompanyId = companyId.toLowerCase().trim();
  const documents = await listDocuments(
    `companies/${normalizedCompanyId}/holidays`
  );

  return documents
    .map((document) => ({
      id: getDocumentId(document.name),
      title: getStringField(document.fields, 'title') ?? '',
      date: getStringField(document.fields, 'date') ?? '',
      type: getStringField(document.fields, 'type') ?? '',
    }))
    .sort((first, second) => first.date.localeCompare(second.date));
}
