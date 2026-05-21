import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const tabs = [
  {
    label: 'HOME',
    icon: 'calendar-today',
    active: false,
    disabled: true,
  },
  {
    label: 'SEARCH',
    icon: 'search',
    active: true,
    disabled: false,
  },
  {
    label: 'GROUPS',
    icon: 'group-add',
    active: false,
    disabled: true,
  },
  {
    label: 'PROFILE',
    icon: 'person-outline',
    active: false,
    disabled: true,
  },
] as const;

export function CompanyBottomTabs() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.tabBar}>
        {tabs.map((tab) => (
          <View key={tab.label} style={styles.tabItem}>
            <MaterialIcons
              name={tab.icon}
              size={24}
              color={tab.active ? '#0647C7' : '#94A3B8'}
            />

            <Text style={[styles.tabLabel, tab.active && styles.tabLabelActive]}>
              {tab.label}
            </Text>

            {tab.disabled && <Text style={styles.upcomingText}>Soon</Text>}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.06,
    shadowRadius: 18,
    elevation: 12,
  },

  tabBar: {
    height: 82,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
  },

  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },

  tabLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#94A3B8',
  },

  tabLabelActive: {
    color: '#0647C7',
  },

  upcomingText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#CBD5E1',
    marginTop: -2,
  },
});