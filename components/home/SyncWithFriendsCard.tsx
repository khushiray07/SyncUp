import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type SyncWithFriendsCardProps = {
  onSignupPress: () => void;
};

export function SyncWithFriendsCard({ onSignupPress }: SyncWithFriendsCardProps) {
  return (
    <ImageBackground
      source={{
        uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy9T8JCeAHi5QBJq0aS3aVLwWM4uRLAAI8S0I0Y08tmgkLXXoKLwwNkG9tHmkxiGb4vMI_iED7J55ZJd1Y7lITJJfOCAYh-E5nSK7Y4h7ta6D2jn1H0r-ZUXrkZ_A_prxKRUPkadXToXdLiUN1xXJimRUSy4Um5wAI2HxjhktBOMDpfzPqZ9dj4_34XcjTb-np_VTLV0lwyHKnzATkIYftBfxcjGEPS-NRzsm2_7vZLjxjW3-kSxJtPEe8XPIgl7cokSuchxNHlIA',
      }}
      style={styles.card}
      imageStyle={styles.image}
    >
      <View style={styles.overlay} />

      <View style={styles.content}>
        <View style={styles.lockRow}>
          <MaterialIcons name="lock" size={18} color="#FFFFFF" />
          <Text style={styles.lockText}>LOCKED FEATURE</Text>
        </View>

        <Text style={styles.title}>Sync with Friends</Text>

        <Text style={styles.description}>
          Want to see when your friends are free? Connect your calendar and see overlapping availability instantly.
        </Text>

        <TouchableOpacity style={styles.button} onPress={onSignupPress}>
  <Text style={styles.buttonText}>Sign up to sync schedules</Text>
</TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 340,
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 18,
    backgroundColor: '#1A56DB',
  },

  image: {
    borderRadius: 14,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(6, 71, 199, 0.68)',
  },

  content: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 28,
  },

  lockRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },

  lockText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#FFFFFF',
  },

  title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 14,
  },

  description: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 23,
    marginBottom: 22,
  },

  button: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0647C7',
  },
});