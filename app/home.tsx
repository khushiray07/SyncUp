import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HolidayCalendarCard } from '../components/home/HolidayCalendarCard';
import { HolidayHeroCard } from '../components/home/HolidayHeroCard';
import { HomeBottomTabs } from '../components/home/HomeBottomTabs';
import { HomeHeader } from '../components/home/HomeHeader';
import { SyncWithFriendsCard } from '../components/home/SyncWithFriendsCard';
import { UpcomingBreaksCard } from '../components/home/UpcomingBreaksCard';


export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <HomeHeader />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <HolidayHeroCard />

        <HolidayCalendarCard />
        <UpcomingBreaksCard />
        
        <SyncWithFriendsCard 
        onSignupPress={() => router.push('/signup')} />
      </ScrollView>

      <HomeBottomTabs />
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
    paddingTop: 12,
    paddingBottom: 110,
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