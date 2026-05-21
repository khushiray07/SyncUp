import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useRouter } from 'expo-router';
import { AuthHeader } from '../components/auth/AuthHeader';
import { SignupFormCard } from '../components/auth/SignupFormCard';
import { SignupHero } from '../components/auth/SignupHero';

export default function SignupScreen() {
    const router = useRouter();
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
<AuthHeader onBack={() => router.back()} />
      <View style={styles.authCard}>
        <SignupHero />
        <SignupFormCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#F5F7FF',
  paddingHorizontal: 24,
},

  authCard: {
    flex: 1,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    marginBottom: 16,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.08,
    shadowRadius: 30,
    elevation: 8,
  },
});