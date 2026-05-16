import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function OnboardingSlideOne() {
  return (
    <View style={styles.mainContent}>
      <View style={styles.illustrationPlaceholder}>
        <Text style={styles.placeholderText}>Illustration</Text>
        
      </View>

      <Text style={styles.title}>
        See everyone's holidays in one place
      </Text>

      <Text style={styles.description}>
        Centralize multiple schedules into a single high-definition view for seamless planning.
      </Text>

      <View style={styles.progressContainer}>
        <View style={[styles.progressDot, styles.progressDotActive]} />
        <View style={styles.progressDot} />
        <View style={styles.progressDot} />
      </View>
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
  },

  illustrationPlaceholder: {
    width: 280,
    height: 260,
    backgroundColor: '#E5F0FF',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },

  placeholderText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A56DB',
  },

  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#111827',
    textAlign: 'center',
    lineHeight: 42,
    marginBottom: 16,
  },

  description: {
    fontSize: 18,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 28,
    maxWidth: 330,
  },

  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 28,
  },

  progressDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D1D5DB',
  },

  progressDotActive: {
    width: 32,
    backgroundColor: '#1A56DB',
  },
});