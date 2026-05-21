import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type BreakItemProps = {
  day: string;
  month: string;
  title: string;
  subtitle: string;
  highlighted?: boolean;
};

function BreakItem({ day, month, title, subtitle, highlighted = false }: BreakItemProps) {
  return (
    <View style={[styles.breakItem, highlighted && styles.breakItemHighlighted]}>
      <View style={styles.dateBox}>
        <Text style={styles.dateDay}>{day}</Text>
        <Text style={styles.dateMonth}>{month}</Text>
      </View>

      <View style={styles.breakTextContainer}>
        <Text style={styles.breakTitle}>{title}</Text>
        <Text style={styles.breakSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

export function UpcomingBreaksCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Upcoming Breaks</Text>

      <BreakItem
        day="03"
        month="JUN"
        title="Summer Trip"
        subtitle="5 Days • Annual Leave"
        highlighted
      />

      <BreakItem
        day="12"
        month="JUL"
        title="Dentist Appt."
        subtitle="2 Hours • Personal"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 26,
    marginBottom: 18,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 18,
    elevation: 4,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 20,
  },

  breakItem: {
    minHeight: 88,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
  },

  breakItemHighlighted: {
    backgroundColor: '#EFF6FF',
    borderColor: '#CBDDFF',
  },

  dateBox: {
    width: 58,
    height: 58,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 18,
  },

  dateDay: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0647C7',
  },

  dateMonth: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
    marginTop: 2,
  },

  breakTextContainer: {
    flex: 1,
  },

  breakTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },

  breakSubtitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748B',
    marginTop: 2,
  },
});