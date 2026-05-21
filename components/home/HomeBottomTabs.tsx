import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const tabs = [
  {
    label: 'Calendar',
    icon: 'calendar-today',
    active: true,
  },
  {
    label: 'Friends',
    icon: 'group',
    active: false,
  },
  {
    label: 'Planning',
    icon: 'map',
    active: false,
  },
  {
    label: 'Profile',
    icon: 'person',
    active: false,
  },
] as const;

export function HomeBottomTabs() {
  return (
    <View style={styles.tabBar}>
      {tabs.map((tab) => (
        <View key={tab.label} style={styles.tabItem}>
          <MaterialIcons
            name={tab.icon}
            size={24}
            color={tab.active ? '#0647C7' : '#94A3B8'}
          />
          <Text
            style={[
              styles.tabLabel,
              tab.active && styles.tabLabelActive,
            ]}
          >
            {tab.label}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 82,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: -6 },
    shadowOpacity: 0.04,
    shadowRadius: 14,
    elevation: 10,
  },

  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },

  tabLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#94A3B8',
  },

  tabLabelActive: {
    color: '#0647C7',
  },
});