import {
    collection,
    getDocs
} from 'firebase/firestore';

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

export async function getCompanies(): Promise<Company[]> {
  const companiesRef = collection(db, 'companies');
  const snapshot = await getDocs(companiesRef);

  return snapshot.docs
    .map((docSnap) => ({
      id: docSnap.id,
      ...(docSnap.data() as Omit<Company, 'id'>),
    }))
    .filter(
      (company) =>
        typeof company.name === 'string' && company.name.trim().length > 0
    );
}

export async function getCompanyHolidays(
  companyId: string
): Promise<CompanyHoliday[]> {
  const normalizedCompanyId = companyId.toLowerCase().trim();

  console.log('Service companyId:', normalizedCompanyId);
  console.log('Firestore path:', `companies/${normalizedCompanyId}/holidays`);

  const holidaysRef = collection(
    db,
    'companies',
    normalizedCompanyId,
    'holidays'
  );

  const snapshot = await getDocs(holidaysRef);

  console.log('Snapshot size:', snapshot.size);
  console.log(
    'Snapshot docs:',
    snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      data: docSnap.data(),
    }))
  );

  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...(docSnap.data() as Omit<CompanyHoliday, 'id'>),
  }));
}
  
      