import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type SettingCardProps = {
  title: string;
  children: React.ReactNode;
};

function SettingCard({
  title,
  children,
}: SettingCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 18,
    marginBottom: 18,
    elevation: 3,
  },

  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});

export default SettingCard;