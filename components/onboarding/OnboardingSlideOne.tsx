import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export function OnboardingSlideOne() {
  return (
    <View style={styles.mainContent}>
      <View style={styles.illustrationWrapper}>
  <Image
    source={require('../../assets/images/onboardingone.png')}
    style={styles.illustrationImage}
    resizeMode="contain"
  />
</View>

      <Text style={styles.title}>
        See everyone's holidays in one place
      </Text>

      <Text style={styles.description}>
        Centralize multiple schedules into a single high-definition view for seamless planning.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContent: {
  flex: 1,
  backgroundColor: '#FFFFFF',
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 24,
  paddingBottom: 20,
},

illustrationWrapper: {
  width: '90%',
  height: 260,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 34,
  borderRadius: 28,
  backgroundColor: '#F8FBFF',

  shadowColor: '#1A56DB',
  shadowOffset: { width: 0, height: 12 },
  shadowOpacity: 0.08,
  shadowRadius: 24,
  elevation: 6,
},

illustrationImage: {
  width: '100%',
  height: '100%',
},

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#111827',
    textAlign: 'center',
    lineHeight: 38,
    marginBottom: 16,
    maxWidth: 340,
  },

  description: {
    fontSize: 18,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 28,
    maxWidth: 330,
  },
});