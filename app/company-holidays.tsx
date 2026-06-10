import { MaterialIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CompanyHoliday, getCompanyHolidays } from '../lib/companyService';

const fallbackHolidaysByCompany: Record<string, CompanyHoliday[]> = {
  infosys: [
    {
      id: 'diwali',
      title: 'Diwali',
      date: '2024-10-31',
      type: 'Festival',
    },
    {
      id: 'new-year',
      title: 'New Year',
      date: '2026-01-01',
      type: 'Public Holiday',
    },
    {
      id: 'holi',
      title: 'Holi',
      date: '2026-03-25',
      type: 'Festival',
    },
  ],
};
const emptyHolidays: CompanyHoliday[] = [];

const monthLabels = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

function formatHolidayDate(dateString?: string) {
  if (!dateString || typeof dateString !== 'string') {
    return {
      day: '--',
      month: '',
    };
  }

  const [year, month, day] = dateString.trim().split('-').map(Number);

  if (!year || !month || !day || month < 1 || month > 12) {
    return {
      day: '--',
      month: '',
    };
  }

  return {
    day: String(day).padStart(2, '0'),
    month: monthLabels[month - 1],
  };
}

export default function CompanyHolidaysScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const selectedCompanyId =
    typeof params.companyId === 'string' && params.companyId.trim()
      ? params.companyId.trim().toLowerCase()
      : 'infosys';

  const companyName =
    typeof params.companyName === 'string' && params.companyName.trim()
      ? params.companyName
      : 'Infosys';

  const fallbackHolidays =
    fallbackHolidaysByCompany[selectedCompanyId] ?? emptyHolidays;
  const [holidays, setHolidays] =
    useState<CompanyHoliday[]>(fallbackHolidays);
  const [isLoading, setIsLoading] = useState(fallbackHolidays.length === 0);
  const [hasError, setHasError] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let isMounted = true;

    async function loadHolidays() {
      try {
        setIsLoading(fallbackHolidays.length === 0);
        setHasError(false);
        setHolidays(fallbackHolidays);

        const firebaseHolidays = await getCompanyHolidays(selectedCompanyId);

        if (isMounted) {
          setHolidays(
            firebaseHolidays.length > 0 ? firebaseHolidays : fallbackHolidays
          );
        }
      } catch (error) {
        if (isMounted) {
          setHasError(fallbackHolidays.length === 0);
          setHolidays(fallbackHolidays);
        }

        if (fallbackHolidays.length === 0) {
          console.warn(`Unable to load holidays for ${selectedCompanyId}:`, error);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadHolidays();

    return () => {
      isMounted = false;
    };
  }, [fallbackHolidays, reloadKey, selectedCompanyId]);

  const displayedYear =
    holidays
      .map((holiday) => Number(holiday.date?.slice(0, 4)))
      .filter(Number.isFinite)
      .sort((first, second) => second - first)[0] ??
    new Date().getFullYear();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.75}
        >
          <MaterialIcons name="arrow-back" size={24} color="#0647C7" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Company Holidays</Text>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroCard}>
          <Text style={styles.companyName}>{companyName} Holidays</Text>
          <Text style={styles.subtitle}>
            Upcoming holidays for {displayedYear}
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Holiday List</Text>

        {isLoading && (
          <View style={styles.stateCard}>
            <Text style={styles.stateText}>Loading holidays...</Text>
          </View>
        )}

        {!isLoading && hasError && (
          <View style={styles.stateCard}>
            <Text style={styles.errorText}>
              Unable to load holidays. Check your connection and try again.
            </Text>
            <TouchableOpacity
              style={styles.retryButton}
              onPress={() => setReloadKey((current) => current + 1)}
            >
              <Text style={styles.retryText}>Try again</Text>
            </TouchableOpacity>
          </View>
        )}

        {!isLoading && !hasError && holidays.length === 0 && (
          <View style={styles.stateCard}>
            <Text style={styles.stateText}>
              No holidays found for this company.
            </Text>
          </View>
        )}

        {!isLoading &&
          !hasError &&
          holidays.map((holiday) => {
            const formattedDate = formatHolidayDate(holiday.date);

            return (
              <View key={holiday.id} style={styles.holidayItem}>
                <View style={styles.dateBox}>
                  <Text style={styles.dateText}>{formattedDate.day}</Text>
                  <Text style={styles.monthText}>{formattedDate.month}</Text>
                </View>

                <View style={styles.holidayInfo}>
                  <Text style={styles.holidayTitle}>
                    {holiday.title || 'Untitled Holiday'}
                  </Text>

                  <Text style={styles.holidayType}>
                    {holiday.type || 'Holiday'}
                  </Text>
                </View>

                <MaterialIcons name="chevron-right" size={24} color="#CBD5E1" />
              </View>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFF',
  },

  header: {
    height: 58,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 4,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },

  headerSpacer: {
    width: 38,
  },

  scroll: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },

  heroCard: {
    backgroundColor: '#1A56DB',
    borderRadius: 24,
    padding: 26,
    marginTop: 12,
    marginBottom: 26,
  },

  companyName: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
    lineHeight: 38,
  },

  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#DBEAFE',
    marginTop: 8,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 16,
  },

  holidayItem: {
    minHeight: 88,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 4,
  },

  dateBox: {
    width: 58,
    height: 58,
    borderRadius: 14,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },

  dateText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0647C7',
  },

  monthText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#64748B',
    marginTop: 2,
  },

  holidayInfo: {
    flex: 1,
  },

  holidayTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#111827',
  },

  holidayType: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748B',
    marginTop: 4,
  },

  stateCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
  },

  stateText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#64748B',
  },

  errorText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#DC2626',
  },

  retryButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#1A56DB',
    borderRadius: 10,
    marginTop: 14,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  retryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
});
