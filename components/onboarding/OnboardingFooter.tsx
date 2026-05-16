import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface OnboardingFooterProps {
  onBack: () => void;
  onNext: () => void;
  isBackDisabled?: boolean;
  nextLabel?: string;
}

export function OnboardingFooter({
  onBack,
  onNext,
  isBackDisabled = false,
  nextLabel = 'Next',
}: OnboardingFooterProps) {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={onBack}
        disabled={isBackDisabled}
      >
        <MaterialIcons
          name="arrow-back"
          size={24}
          color={isBackDisabled ? '#9CA3AF' : '#1A56DB'}
        />
        <Text
          style={[
            styles.backText,
            { color: isBackDisabled ? '#9CA3AF' : '#1A56DB' },
          ]}
        >
          Back
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextButton} onPress={onNext}>
<Text style={styles.nextText}>{nextLabel}</Text>
        <MaterialIcons name="arrow-forward" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
  height: 96,
  backgroundColor: '#FFFFFF',
  borderTopWidth: 1,
  borderTopColor: '#E5E7EB',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 32,
},

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },

  backText: {
    fontSize: 18,
    fontWeight: '600',
  },

  nextButton: {
    height: 56,
    paddingHorizontal: 28,
    borderRadius: 14,
    backgroundColor: '#1A56DB',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  nextText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});