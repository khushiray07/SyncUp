import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function HolidayHeroCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Viewing your holidays</Text>

      <Text style={styles.subtitle}>
        Schedule for Acme Corp • 2024
      </Text>

      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="edit" size={20} color="#0647C7" />
        <Text style={styles.buttonText}>Manage Subscription</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1A56DB',
    borderRadius: 12,
    padding: 26,
    marginBottom: 18,
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    lineHeight: 38,
    maxWidth: 260,
  },

  subtitle: {
    fontSize: 16,
    color: '#DBEAFE',
    marginTop: 8,
    marginBottom: 22,
  },

  button: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  buttonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0647C7',
  },
});