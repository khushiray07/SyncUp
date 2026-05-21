import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CompanyBottomTabs } from '../components/company/CompanyBottomTabs';
import { CompanyPromoCard } from '../components/company/CompanyPromoCard';
import { CompanySearchCard } from '../components/company/CompanySearchCard';
import { CompanySearchHeader } from '../components/company/CompanySearchHeader';
import { CompanySearchIntro } from '../components/company/CompanySearchIntro';
import { GlobalTrendsCard } from '../components/company/GlobalTrendsCard';

export default function CompanySearchScreen() {
  const router = useRouter();

  const [companyName, setCompanyName] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
    setCompanyName(company);
  };

  const handleViewHolidays = () => {
    const company = selectedCompany || companyName || 'Infosys';

    router.push({
      pathname: '/company-holidays',
      params: { company },
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
          onChangeCompany={setCompanyName}
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