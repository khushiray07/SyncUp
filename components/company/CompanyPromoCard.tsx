import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export function CompanyPromoCard() {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200',
      }}
      style={styles.card}
      imageStyle={styles.image}
    >
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.title}>Sync your life.</Text>

        <Text style={styles.description}>
          Manage work-life balance with ease by tracking every regional and company holiday in one place.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 250,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 28,
    backgroundColor: '#1A56DB',

    shadowColor: '#1A56DB',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.22,
    shadowRadius: 18,
    elevation: 8,
  },

  image: {
    borderRadius: 20,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(6, 71, 199, 0.82)',
  },

  content: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 26,
  },

  title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 22,
  },
});