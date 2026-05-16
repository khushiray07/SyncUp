import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface OnboardingHeaderProps {
  onSkip: () => void;
}

export function OnboardingHeader({ onSkip }: OnboardingHeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <MaterialIcons name="calendar-today" size={24} color="#1A56DB" />
        <Text style={styles.logoText}>SyncUp</Text>
      </View>

      <TouchableOpacity onPress={onSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 72,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  logoText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1A56DB',
  },

  skipText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5F6368',
  },
});