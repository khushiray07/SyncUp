import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const dates = [
  '', '', '', '', '', '1', '2',
  '3', '4', '5', '6', '7', '8', '9',
  '10', '11', '12', '13', '14', '15', '16',
  '17', '', '', '', '', '', '',
];

export function HolidayCalendarCard() {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.monthRow}>
          <MaterialIcons name="chevron-left" size={24} color="#64748B" />

          <Text style={styles.monthText}>
            June{'\n'}2026
          </Text>

          <MaterialIcons name="chevron-right" size={24} color="#64748B" />
        </View>

        <View style={styles.toggleRow}>
          <View style={styles.activePill}>
            <Text style={styles.activePillText}>Monthly</Text>
          </View>

          <Text style={styles.weeklyText}>Weekly</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.weekRow}>
        {weekDays.map((day) => (
          <Text key={day} style={styles.weekDay}>
            {day}
          </Text>
        ))}
      </View>

      <View style={styles.grid}>
        {dates.map((date, index) => (
          <View key={`${date}-${index}`} style={styles.dateBox}>
            {date ? <Text style={styles.dateText}>{date}</Text> : null}

            {date === '4' || date === '5' ? (
              <View style={styles.leaveTag}>
                <Text style={styles.leaveTagText}>Annual Leave</Text>
              </View>
            ) : null}

            {date === '10' ? <View style={styles.blueDot} /> : null}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingTop: 24,
    paddingBottom: 18,
    marginBottom: 18,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 18,
    elevation: 4,
  },

  headerRow: {
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  monthRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  monthText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0647C7',
    lineHeight: 28,
    textAlign: 'center',
  },

  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },

  activePill: {
    height: 28,
    paddingHorizontal: 18,
    borderRadius: 14,
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#DBEAFE',
    justifyContent: 'center',
  },

  activePillText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#0647C7',
  },

  weeklyText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#94A3B8',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEF2F7',
    marginTop: 22,
    marginBottom: 16,
  },

  weekRow: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    marginBottom: 10,
  },

  weekDay: {
    flex: 1,
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '800',
    color: '#94A3B8',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 18,
  },

  dateBox: {
    width: `${100 / 7}%`,
    height: 78,
    borderWidth: 1,
    borderColor: '#E5EFFD',
    borderRadius: 8,
    padding: 6,
  },

  dateText: {
    fontSize: 14,
    color: '#0F172A',
  },

  leaveTag: {
    backgroundColor: '#0647C7',
    borderRadius: 2,
    paddingVertical: 4,
    paddingHorizontal: 3,
    marginTop: 10,
  },

  leaveTagText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  blueDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#60A5FA',
    alignSelf: 'center',
    marginTop: 10,
  },
});