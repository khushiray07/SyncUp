import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AuthDivider } from './AuthDivider';

export function SignupFormCard() {
  return (
    <View style={styles.card}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>Plan Together,{'\n'}Sync Better</Text>
        
      </View>

      <Text style={styles.description}>
        Sign up to see your friends' holidays, create groups, and find the perfect time to meet up.
      </Text>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleIcon}>G</Text>
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <AuthDivider />

      <TouchableOpacity style={styles.emailButton}>
        <Text style={styles.emailButtonText}>Sign up with Email</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Already have an account? <Text style={styles.loginLink}>Log in</Text>
      </Text>

      <View style={styles.bottomDivider} />

      <View style={styles.privacyRow}>
        <MaterialIcons name="lock" size={18} color="#6B7280" />
        <Text style={styles.privacyText}>
          Your schedule data is always private and secure.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
  flex: 1,
  backgroundColor: '#FFFFFF',
  borderBottomLeftRadius: 24,
  borderBottomRightRadius: 24,
  paddingHorizontal: 28,
  paddingTop: 24,
  paddingBottom: 20,
},

  titleRow: {
    position: 'relative',
  },

  title: {
  fontSize: 28,
  fontWeight: '800',
  color: '#111827',
  textAlign: 'center',
  lineHeight: 34,
},
  

  description: {
  fontSize: 15,
  color: '#374151',
  textAlign: 'center',
  lineHeight: 22,
  marginTop: 16,
  marginBottom: 20,
},

  googleButton: {
  height: 50,
  borderWidth: 1,
  borderColor: '#CBD5E1',
  borderRadius: 8,
  backgroundColor: '#FFFFFF',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 14,
},

emailButton: {
  height: 52,
  borderRadius: 8,
  backgroundColor: '#0647C7',
  justifyContent: 'center',
  alignItems: 'center',
},

  googleIcon: {
    fontSize: 22,
    fontWeight: '800',
    color: '#4285F4',
  },

  googleButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },

  

  emailButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  loginText: {
  marginTop: 16,
  textAlign: 'center',
  fontSize: 14,
  fontWeight: '700',
  color: '#6B7280',
},



  loginLink: {
    color: '#0647C7',
  },

  bottomDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 18,
  },

  privacyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  privacyText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '700',
    color: '#6B7280',
    lineHeight: 19,
  },
});