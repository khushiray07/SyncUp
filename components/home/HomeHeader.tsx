import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function HomeHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.logoRow}>
        <MaterialIcons name="calendar-today" size={22} color="#1A56DB" />
        <Text style={styles.logoText}>SyncUp</Text>
      </View>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>👩‍💼</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },

  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  logoText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1A56DB',
  },

  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#DBEAFE',
    borderWidth: 2,
    borderColor: '#1A56DB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 18,
  },
});