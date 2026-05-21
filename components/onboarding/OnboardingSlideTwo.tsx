import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { GroupAvailabilityCard } from './GroupAvailabilityCard';

export function OnboardingSlideTwo() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.mainContent}
      showsVerticalScrollIndicator={false}
    >
      

      <GroupAvailabilityCard />

      <Text style={styles.title}>
        Find days when all friends are free
      </Text>

      <Text style={styles.description}>
        Our algorithm automatically identifies the best dates for your group to meet.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  mainContent: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 48,
  },

  

  title: {
  fontSize: 32,
  fontWeight: '800',
  color: '#111827',
  lineHeight: 40,
  marginBottom: 18,
},

  description: {
  fontSize: 19,
  color: '#374151',
  lineHeight: 30,
},
imagePlaceholder: {
  width: '100%',
  height: 300,
  borderRadius: 28,
  backgroundColor: '#DBEAFE',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 34,
  overflow: 'hidden',
},
container: {
  paddingHorizontal: 24,
  paddingTop: 20,
  paddingBottom: 48,
},
contentCard: {
  backgroundColor: '#FFFFFF',
  borderRadius: 32,
  padding: 28,
  marginTop: -42,

  shadowColor: '#000',
  shadowOffset: { width: 0, height: 14 },
  shadowOpacity: 0.08,
  shadowRadius: 28,
  elevation: 8,
},
featureRow: {
  flexDirection: 'row',
  gap: 18,
  marginTop: 32,
  marginBottom: 24,
},featureCard: {
  flex: 1,
  height: 120,
  backgroundColor: '#FFFFFF',
  borderRadius: 18,
  padding: 20,
  justifyContent: 'center',

  shadowColor: '#000',
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.06,
  shadowRadius: 20,
  elevation: 5,
},

});