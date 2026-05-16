import React from 'react';
import { Image,ScrollView, StyleSheet, Text, View } from 'react-native';

export function OnboardingSlideThree() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.imageCard}>
  <View style={styles.imageContainer}>
    <Image
      source={{
        uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy9T8JCeAHi5QBJq0aS3aVLwWM4uRLAAI8S0I0Y08tmgkLXXoKLwwNkG9tHmkxiGb4vMI_iED7J55ZJd1Y7lITJJfOCAYh-E5nSK7Y4h7ta6D2jn1H0r-ZUXrkZ_A_prxKRUPkadXToXdLiUN1xXJimRUSy4Um5wAI2HxjhktBOMDpfzPqZ9dj4_34XcjTb-np_VTLV0lwyHKnzATkIYftBfxcjGEPS-NRzsm2_7vZLjxjW3-kSxJtPEe8XPIgl7cokSuchxNHlIA',
      }}
      style={styles.image}
      resizeMode="cover"
    />

    <View style={styles.imageGradient} />
  </View>
</View>

      <View style={styles.contentCard}>
        <View style={styles.progressLines}>
          <View style={styles.inactiveLine} />
          <View style={styles.inactiveLine} />
          <View style={styles.activeLine} />
        </View>

        <Text style={styles.title}>
          Plan trips and meetups instantly
        </Text>

        <Text style={styles.description}>
          Go from finding a date to booking a plan in seconds with integrated voting and checklists.
        </Text>
      </View>

      <View style={styles.featureRow}>
        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>◇</Text>
          <Text style={styles.featureTitle}>Smart Voting</Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>✓</Text>
          <Text style={styles.featureTitle}>Live Lists</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#F8FBFF',
  },

  container: {
    paddingHorizontal: 18,
    paddingTop: 8,
    paddingBottom: 24,
    position: 'relative',
  },

  imagePlaceholder: {
    width: '100%',
    height: 270,
    borderRadius: 28,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  placeholderText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A56DB',
  },

  contentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 22,
    marginTop: -34,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.07,
    shadowRadius: 20,
    elevation: 6,
  },

  progressLines: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 28,
  },

  inactiveLine: {
    width: 56,
    height: 8,
    borderRadius: 10,
    backgroundColor: '#DBEAFE',
  },

  activeLine: {
    width: 86,
    height: 8,
    borderRadius: 10,
    backgroundColor: '#1A56DB',
  },

  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#111827',
    lineHeight: 42,
    marginBottom: 20,
  },

  description: {
    fontSize: 20,
    color: '#374151',
    lineHeight: 32,
  },

  featureRow: {
    flexDirection: 'row',
    gap: 18,
    marginTop: 42,
  },

  featureCard: {
    flex: 1,
    height: 130,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 22,
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.06,
    shadowRadius: 20,
    elevation: 5,
  },

  featureIcon: {
    fontSize: 28,
    color: '#1A56DB',
    marginBottom: 18,
  },

  featureTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  imageCard: {
  width: '100%',
  height: 170,
  borderRadius: 24,
  overflow: 'hidden',
  marginTop: 4,
  backgroundColor: '#DBEAFE',
},

imageContainer: {
  flex: 1,
  position: 'relative',
},

image: {
  width: '100%',
  height: '100%',
},

imageGradient: {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  height: 90,
  backgroundColor: 'rgba(255, 255, 255, 0.45)',
},
});