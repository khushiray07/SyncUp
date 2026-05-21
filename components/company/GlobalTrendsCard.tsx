import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type TrendItemProps = {
  icon: keyof typeof MaterialIcons.glyphMap;
  iconColor: string;
  iconBg: string;
  title: string;
  subtitle: string;
};

function TrendItem({ icon, iconColor, iconBg, title, subtitle }: TrendItemProps) {
  return (
    <View style={styles.trendItem}>
      <View style={[styles.iconBox, { backgroundColor: iconBg }]}>
        <MaterialIcons name={icon} size={24} color={iconColor} />
      </View>

      <View style={styles.trendTextContainer}>
        <Text style={styles.trendTitle}>{title}</Text>
        <Text style={styles.trendSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

export function GlobalTrendsCard() {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Global trends</Text>
        <Text style={styles.viewAll}>View all trends</Text>
      </View>

      <TrendItem
        icon="event"
        iconColor="#EF4444"
        iconBg="#FEF2F2"
        title="Diwali 2024"
        subtitle="Most searched this week"
      />

      <TrendItem
        icon="flight-takeoff"
        iconColor="#059669"
        iconBg="#ECFDF5"
        title="Long weekends"
        subtitle="Q4 Vacation planner"
      />

      <TrendItem
        icon="groups"
        iconColor="#1A56DB"
        iconBg="#EFF6FF"
        title="Hybrid policy"
        subtitle="Accenture updates"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
  },

  viewAll: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0647C7',
  },

  trendItem: {
    minHeight: 92,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    marginBottom: 14,
  },

  iconBox: {
    width: 54,
    height: 54,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 18,
  },

  trendTextContainer: {
    flex: 1,
  },

  trendTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#111827',
  },

  trendSubtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748B',
    marginTop: 4,
  },
});