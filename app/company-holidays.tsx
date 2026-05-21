import { MaterialIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const holidays = [
  {
    date: '01',
    month: 'JAN',
    title: 'New Year',
    type: 'Public Holiday',
  },
  {
    date: '25',
    month: 'MAR',
    title: 'Holi',
    type: 'Festival',
  },
  {
    date: '15',
    month: 'AUG',
    title: 'Independence Day',
    type: 'Public Holiday',
  },
  {
    date: '31',
    month: 'OCT',
    title: 'Diwali',
    type: 'Festival',
  },
  {
    date: '25',
    month: 'DEC',
    title: 'Christmas',
    type: 'Public Holiday',
  },
];

export default function CompanyHolidaysScreen() {
  const router = useRouter();
  const { company } = useLocalSearchParams();

  const companyName = typeof company === 'string' ? company : 'Infosys';

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
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
          <Text style={styles.subtitle}>Upcoming holidays for 2024</Text>
        </View>

        <Text style={styles.sectionTitle}>Holiday List</Text>

        {holidays.map((holiday) => (
          <View key={`${holiday.date}-${holiday.title}`} style={styles.holidayItem}>
            <View style={styles.dateBox}>
              <Text style={styles.dateText}>{holiday.date}</Text>
              <Text style={styles.monthText}>{holiday.month}</Text>
            </View>

            <View style={styles.holidayInfo}>
              <Text style={styles.holidayTitle}>{holiday.title}</Text>
              <Text style={styles.holidayType}>{holiday.type}</Text>
            </View>

            <MaterialIcons name="chevron-right" size={24} color="#CBD5E1" />
          </View>
        ))}
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
});