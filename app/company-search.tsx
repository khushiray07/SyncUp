import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CompanyBottomTabs } from '../components/company/CompanyBottomTabs';
import { CompanyPromoCard } from '../components/company/CompanyPromoCard';
import { CompanySearchCard } from '../components/company/CompanySearchCard';
import { CompanySearchHeader } from '../components/company/CompanySearchHeader';
import { CompanySearchIntro } from '../components/company/CompanySearchIntro';
import { GlobalTrendsCard } from '../components/company/GlobalTrendsCard';
import { Company, getCompanies } from '../lib/companyService';

const fallbackCompanies: Company[] = [
  { id: 'infosys', name: 'Infosys' },
  { id: 'tcs', name: 'TCS' },
  { id: 'wipro', name: 'Wipro' },
  { id: 'accenture', name: 'Accenture' },
  { id: 'google', name: 'Google' },
  { id: 'microsoft', name: 'Microsoft' },
];

export default function CompanySearchScreen() {
  const router = useRouter();

  const [companyName, setCompanyName] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedCompanyId, setSelectedCompanyId] = useState('');
  const [companies, setCompanies] = useState<Company[]>(fallbackCompanies);

  useEffect(() => {
    let isMounted = true;

    async function loadCompanies() {
      try {
        const firebaseCompanies = await getCompanies();
        const displayCompanies = firebaseCompanies.filter(
          (company) =>
            typeof company.name === 'string' && company.name.trim().length > 0
        );

        if (isMounted && displayCompanies.length > 0) {
          setCompanies(displayCompanies);
        }
      } catch (error) {
        console.warn('Using fallback company list:', error);

        if (isMounted) {
          setCompanies(fallbackCompanies);
        }
      }
    }

    loadCompanies();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleChangeCompany = (value: string) => {
    setCompanyName(value);

    if (value !== selectedCompany) {
      setSelectedCompany('');
      setSelectedCompanyId('');
    }
  };

  const handleSelectCompany = (company: Company) => {
    setSelectedCompany(company.name);
    setSelectedCompanyId(company.id);
    setCompanyName(company.name);
  };

  const getCompanyId = (company: string) => {
    return company.toLowerCase().replace(/\s+/g, '-');
  };

  const handleViewHolidays = () => {
    const company = selectedCompany || 'Infosys';
    const companyId = selectedCompanyId || getCompanyId(company);

    router.push({
      pathname: '/company-holidays',
      params: {
        companyId,
        companyName: company,
      },
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <CompanySearchHeader />

        <CompanySearchIntro />

        <CompanySearchCard
          companyName={companyName}
          selectedCompany={selectedCompany}
          companies={companies}
          onChangeCompany={handleChangeCompany}
          onSelectCompany={handleSelectCompany}
          onViewHolidays={handleViewHolidays}
        />

        <CompanyPromoCard />

        <GlobalTrendsCard />
      </ScrollView>

      <CompanyBottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFF',
  },

  scroll: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
});
