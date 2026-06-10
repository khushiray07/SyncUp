import { collection, getDocs } from 'firebase/firestore';

import { db } from './firebase';

export type Company = {
  id: string;
  name: string;
  country?: string;
  year?: number;
};

export type CompanyHoliday = {
  id: string;
  title: string;
  date: string;
  type: string;
};

type FirebaseErrorDetails = {
  code: string;
  message: string;
};

function getFirebaseErrorDetails(error: unknown): FirebaseErrorDetails {
  if (error && typeof error === 'object') {
    const possibleError = error as { code?: unknown; message?: unknown };

    return {
      code:
        typeof possibleError.code === 'string'
          ? possibleError.code
          : 'unknown',
      message:
        typeof possibleError.message === 'string'
          ? possibleError.message
          : 'Unknown Firestore error',
    };
  }

  return {
    code: 'unknown',
    message: String(error),
  };
}

function logFirestoreError(operation: string, error: unknown) {
  const details = getFirebaseErrorDetails(error);
  console.error(`[Firestore] ${operation} failed`, details);
}

export async function getCompanies(): Promise<Company[]> {
  try {
    const snapshot = await getDocs(collection(db, 'companies'));

    return snapshot.docs
      .map((document) => {
        const data = document.data();
        const name = Object.entries(data).find(
          ([key]) => key.trim() === 'name'
        )?.[1];

        return {
          id: document.id,
          name: typeof name === 'string' ? name.trim() : '',
          country:
            typeof data.country === 'string' ? data.country : undefined,
          year: typeof data.year === 'number' ? data.year : undefined,
        };
      })
      .filter((company) => company.name.length > 0);
  } catch (error) {
    logFirestoreError('getCompanies at companies', error);
    throw error;
  }
}

export async function getCompanyHolidays(
  companyId: string
): Promise<CompanyHoliday[]> {
  const normalizedCompanyId = companyId.toLowerCase().trim();
  const path = `companies/${normalizedCompanyId}/holidays`;

  try {
    const snapshot = await getDocs(
      collection(db, 'companies', normalizedCompanyId, 'holidays')
    );

    return snapshot.docs
      .map((document) => {
        const data = document.data();

        return {
          id: document.id,
          title: typeof data.title === 'string' ? data.title : '',
          date: typeof data.date === 'string' ? data.date : '',
          type: typeof data.type === 'string' ? data.type : '',
        };
      })
      .sort((first, second) => first.date.localeCompare(second.date));
  } catch (error) {
    logFirestoreError(`getCompanyHolidays at ${path}`, error);
    throw error;
  }
}
