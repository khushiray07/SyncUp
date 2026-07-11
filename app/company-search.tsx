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

export default function CompanySearchScreen() {
  const router = useRouter();

  const [companyName, setCompanyName] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedCompanyId, setSelectedCompanyId] = useState('');
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoadingCompanies, setIsLoadingCompanies] = useState(true);
  const [companyLoadError, setCompanyLoadError] = useState('');
  const [selectionError, setSelectionError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadCompanies() {
      try {
        setIsLoadingCompanies(true);
        setCompanyLoadError('');

        const firebaseCompanies = await getCompanies();
        const displayCompanies = firebaseCompanies.filter(
          (company) =>
            typeof company.name === 'string' && company.name.trim().length > 0
        );

        if (isMounted) {
          setCompanies(displayCompanies);
        }
      } catch (error) {
        console.warn('Unable to load company list:', error);

        if (isMounted) {
          setCompanies([]);
          setCompanyLoadError('Unable to load companies. Please try again.');
        }
      } finally {
        if (isMounted) {
          setIsLoadingCompanies(false);
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
    setSelectionError('');

    if (value !== selectedCompany) {
      setSelectedCompany('');
      setSelectedCompanyId('');
    }
  };

  const handleSelectCompany = (company: Company) => {
    setSelectedCompany(company.name);
    setSelectedCompanyId(company.id);
    setCompanyName(company.name);
    setSelectionError('');
  };

  const handleViewHolidays = () => {
    const typedCompanyName = companyName.trim().toLowerCase();
    const matchedCompany =
      companies.find((company) => company.id === selectedCompanyId) ??
      companies.find(
        (company) => company.name.trim().toLowerCase() === typedCompanyName
      );

    if (!matchedCompany) {
      setSelectionError('Please select a company from the list.');
      return;
    }

    router.push({
      pathname: '/company-holidays',
      params: {
        companyId: matchedCompany.id,
        companyName: matchedCompany.name,
      },
    });
  };

  const searchText = companyName.trim().toLowerCase();
  const visibleCompanies = searchText
    ? companies.filter((company) =>
        company.name.trim().toLowerCase().includes(searchText)
      )
    : companies;

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
          companies={visibleCompanies}
          isLoadingCompanies={isLoadingCompanies}
          companyLoadError={companyLoadError}
          selectionError={selectionError}
          isViewDisabled={isLoadingCompanies || companies.length === 0}
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
