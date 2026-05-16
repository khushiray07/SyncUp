import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function GroupAvailabilityCard() {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.monthText}>June 2024</Text>
          <Text style={styles.subtitleText}>Group Availability</Text>
        </View>

        <View style={styles.avatarGroup}>
          <View style={[styles.avatar, styles.avatarOne]} />
          <View style={[styles.avatar, styles.avatarTwo]} />
          <View style={styles.moreAvatar}>
            <Text style={styles.moreText}>+3</Text>
          </View>
        </View>
      </View>

      <View style={styles.calendarArea}>
        <View style={styles.dateCard}>
          <Text style={styles.dayText}>FRI</Text>
          <Text style={styles.dateText}>14</Text>

          <View style={styles.dateAvatarRow}>
            <View style={[styles.dateAvatar, styles.dateAvatarOne]} />
            <View style={[styles.dateAvatar, styles.dateAvatarTwo]} />
          </View>
        </View>

        <View style={styles.bestMatchCard}>
          <Text style={styles.bestMatchLabel}>BEST MATCH</Text>
          <Text style={styles.bestMatchDate}>June 16 - 18</Text>

          <View style={styles.availableRow}>
            <View style={styles.availableDot} />
            <Text style={styles.availableText}>4/5 available</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
  width: '100%',
  height: 360,
  backgroundColor: '#FFFFFF',
  borderRadius: 36,
  padding: 22,
  marginBottom: 28,

  shadowColor: '#000',
  shadowOffset: { width: 0, height: 14 },
  shadowOpacity: 0.08,
  shadowRadius: 30,
  elevation: 8,
},
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  monthText: {
  fontSize: 24,
  fontWeight: '800',
  color: '#111827',
},
  subtitleText: {
  fontSize: 15,
  fontWeight: '700',
  color: '#6B7280',
  marginTop: 2,
},

  avatarGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },

  avatarOne: {
    backgroundColor: '#F59E0B',
  },

  avatarTwo: {
    backgroundColor: '#60A5FA',
    marginLeft: -12,
  },

  moreAvatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#EEF2FF',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    marginLeft: -12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  moreText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1A56DB',
  },

  calendarArea: {
  flex: 1,
  marginTop: 18,
  backgroundColor: '#EFF6FF',
  borderRadius: 28,
  borderWidth: 1,
  borderColor: '#DBEAFE',
  position: 'relative',
  overflow: 'visible',
},

  dateCard: {
  position: 'absolute',
  top: 34,
  left: 32,
  zIndex: 2,

  width: 104,
  height: 120,
  backgroundColor: '#FFFFFF',
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',

  shadowColor: '#000',
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.08,
  shadowRadius: 20,
  elevation: 6,
},

  dayText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#6B7280',
    letterSpacing: 1,
  },

  dateText: {
  fontSize: 30,
  fontWeight: '800',
  color: '#111827',
  marginTop: 6,
},

  dateAvatarRow: {
    flexDirection: 'row',
    marginTop: 10,
  },

  dateAvatar: {
  width: 30,
  height: 30,
  borderRadius: 15,
  borderWidth: 3,
  borderColor: '#10B981',
},

  dateAvatarOne: {
    backgroundColor: '#F59E0B',
  },

  dateAvatarTwo: {
    backgroundColor: '#1A56DB',
    marginLeft: -8,
  },

  bestMatchCard: {
  position: 'absolute',
  top: 112,
  left: 130,
  zIndex: 3,

  width: 142,
  height: 112,
  backgroundColor: '#1A56DB',
  borderRadius: 22,
  padding: 15,

  shadowColor: '#1A56DB',
  shadowOffset: { width: 0, height: 12 },
  shadowOpacity: 0.22,
  shadowRadius: 20,
  elevation: 8,
},

  bestMatchLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#BFDBFE',
    letterSpacing: 1,
  },

  bestMatchDate: {
  fontSize: 19,
  fontWeight: '800',
  color: '#FFFFFF',
  marginTop: 7,
  lineHeight: 23,
},

  availableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 10,
  },

  availableDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#22C55E',
  },

  availableText: {
  fontSize: 11,
  fontWeight: '700',
  color: '#DBEAFE',
},
});