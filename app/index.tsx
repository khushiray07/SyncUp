import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function OnboardingScreen() {
    const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
      <View style={styles.logoContainer}>
        <MaterialIcons name="calendar-today" size={24} color="#1A56DB" />
        <Text style={styles.logoText}>SyncUp</Text>
      </View>

  <TouchableOpacity>
    <Text style={styles.skipText}>Skip</Text>
  </TouchableOpacity>
</View>

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

      <View style={styles.bottomNav}>
  <TouchableOpacity style={styles.backButton}>
    <MaterialIcons name="arrow-back" size={24} color="#9CA3AF" />
    <Text style={styles.backText}>Back</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.nextButton}>
    <Text style={styles.nextText}>Next</Text>
    <MaterialIcons name="arrow-forward" size={24} color="#FFFFFF" />
  </TouchableOpacity>
</View>
    </SafeAreaView>
  );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
  height: 72,
  backgroundColor: '#FFFFFF',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 24,
},
logoContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
},
  mainContent: {
  flex: 1,
  backgroundColor: '#FFFFFF',
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 24,
},
  bottomNav: {
  height: 110,
  backgroundColor: '#FFFFFF',
  borderTopWidth: 1,
  borderTopColor: '#E5E7EB',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 32,
},
  logoText: {
  fontSize: 24,
  fontWeight: '800',
  color: '#1A56DB',
},
skipText: {
  fontSize: 16,
  fontWeight: '600',
  color: '#5F6368',
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
  color: '#9CA3AF',
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