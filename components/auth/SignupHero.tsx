import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export function SignupHero() {
  return (
    <ImageBackground
      source={{
        uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy9T8JCeAHi5QBJq0aS3aVLwWM4uRLAAI8S0I0Y08tmgkLXXoKLwwNkG9tHmkxiGb4vMI_iED7J55ZJd1Y7lITJJfOCAYh-E5nSK7Y4h7ta6D2jn1H0r-ZUXrkZ_A_prxKRUPkadXToXdLiUN1xXJimRUSy4Um5wAI2HxjhktBOMDpfzPqZ9dj4_34XcjTb-np_VTLV0lwyHKnzATkIYftBfxcjGEPS-NRzsm2_7vZLjxjW3-kSxJtPEe8XPIgl7cokSuchxNHlIA',
      }}
      style={styles.hero}
      imageStyle={styles.heroImage}
    >
      <View style={styles.overlay} />

      <View style={styles.syncCard}>
        <View style={styles.avatarRow}>
          <View style={[styles.avatar, { backgroundColor: '#F9A8D4' }]} />
          <View style={[styles.avatar, { backgroundColor: '#F59E0B', marginLeft: -10 }]} />
          <View style={[styles.avatar, { backgroundColor: '#FB7185', marginLeft: -10 }]} />

          <View style={styles.moreAvatar}>
            <Text style={styles.moreText}>+12</Text>
          </View>
        </View>

        <Text style={styles.syncTitle}>In Sync</Text>
        <Text style={styles.syncSubtitle}>
          4 friends are available this weekend!
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  hero: {
  height: 230,
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#111827',
},

  heroImage: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(17, 24, 39, 0.72)',
  },

  syncCard: {
  width: '82%',
  minHeight: 110,
  backgroundColor: 'rgba(255,255,255,0.82)',
  borderRadius: 14,
  padding: 14,
  alignItems: 'center',
},
  avatarRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  avatar: {
  width: 38,
  height: 38,
  borderRadius: 19,
  borderWidth: 2,
  borderColor: '#FFFFFF',
},

moreAvatar: {
  width: 38,
  height: 38,
  borderRadius: 19,
  backgroundColor: '#1A56DB',
  borderWidth: 2,
  borderColor: '#FFFFFF',
  marginLeft: -10,
  justifyContent: 'center',
  alignItems: 'center',
},

  moreText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },

  syncTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0647C7',
    marginBottom: 8,
  },

  syncSubtitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#374151',
    textAlign: 'center',
    lineHeight: 20,
  },
});