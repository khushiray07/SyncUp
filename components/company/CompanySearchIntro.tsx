import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function CompanySearchIntro() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find your company holidays</Text>

      <Text style={styles.subtitle}>
        Enter your company name to view upcoming holidays.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  marginTop: 34,
  marginBottom: 28,
  alignItems: 'center',
},

title: {
  fontSize: 26,
  fontWeight: '800',
  color: '#111827',
  textAlign: 'center',
  lineHeight: 34,
},

subtitle: {
  fontSize: 17,
  color: '#64748B',
  textAlign: 'center',
  lineHeight: 25,
  marginTop: 10,
  maxWidth: 320,
},
});