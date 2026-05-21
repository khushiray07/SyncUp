import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface AuthHeaderProps {
  onBack?: () => void;
}

export function AuthHeader({ onBack }: AuthHeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.leftSection}>
        {onBack && (
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <MaterialIcons name="arrow-back" size={24} color="#0647C7" />
          </TouchableOpacity>
        )}

        <View style={styles.logoRow}>
          <MaterialIcons name="calendar-today" size={22} color="#0647C7" />
          <Text style={styles.logoText}>SyncUp</Text>
        </View>
      </View>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>👨‍💼</Text>
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
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  backButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  logoText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0647C7',
  },

  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#DBEAFE',
    borderWidth: 2,
    borderColor: '#0647C7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    fontSize: 18,
  },
});