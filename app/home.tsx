import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerPlaceholder} />
        <View style={styles.heroPlaceholder} />
        <View style={styles.calendarPlaceholder} />
        <View style={styles.breaksPlaceholder} />
        <View style={styles.syncPlaceholder} />
      </ScrollView>

      <View style={styles.bottomTabsPlaceholder} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFF',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 110,
  },
  headerPlaceholder: {
    height: 54,
    backgroundColor: '#E5F0FF',
    borderRadius: 16,
    marginBottom: 14,
  },
  heroPlaceholder: {
    height: 215,
    backgroundColor: '#DBEAFE',
    borderRadius: 16,
    marginBottom: 18,
  },
  calendarPlaceholder: {
    height: 480,
    backgroundColor: '#E5F0FF',
    borderRadius: 16,
    marginBottom: 18,
  },
  breaksPlaceholder: {
    height: 310,
    backgroundColor: '#DBEAFE',
    borderRadius: 16,
    marginBottom: 18,
  },
  syncPlaceholder: {
    height: 360,
    backgroundColor: '#BFDBFE',
    borderRadius: 16,
    marginBottom: 18,
  },
  bottomTabsPlaceholder: {
    height: 82,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
});