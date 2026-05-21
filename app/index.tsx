import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { OnboardingFooter } from '../components/onboarding/OnboardingFooter';
import { OnboardingHeader } from '../components/onboarding/OnboardingHeader';
import { OnboardingSlideOne } from '../components/onboarding/OnboardingSlideOne';
import { OnboardingSlideThree } from '../components/onboarding/OnboardingSlideThree';
import { OnboardingSlideTwo } from '../components/onboarding/OnboardingSlideTwo';

export default function OnboardingScreen() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < 2) {
      setCurrentSlide(currentSlide + 1);
    } else {
      router.replace('/company-search');
    }
  };

  const handleSkip = () => {
    router.replace('/company-search');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <OnboardingHeader onSkip={handleSkip} />

      {currentSlide === 0 && <OnboardingSlideOne />}
      {currentSlide === 1 && <OnboardingSlideTwo />}
      {currentSlide === 2 && <OnboardingSlideThree />}

      <OnboardingFooter
        onBack={handleBack}
        onNext={handleNext}
        isBackDisabled={currentSlide === 0}
        nextLabel={currentSlide === 2 ? 'Get Started' : 'Next'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});