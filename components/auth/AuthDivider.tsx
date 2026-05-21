import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function AuthDivider() {
  return (
    <View style={styles.dividerRow}>
      <View style={styles.line} />
      <Text style={styles.orText}>OR</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  dividerRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 10,
},

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },

  orText: {
    marginHorizontal: 18,
    fontSize: 13,
    fontWeight: '700',
    color: '#6B7280',
  },
});