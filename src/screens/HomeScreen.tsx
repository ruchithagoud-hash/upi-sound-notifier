import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Linking,
} from 'react-native';

function HomeScreen() {
  const [enabled, setEnabled] = useState(false);

  const openNotificationSettings = async () => {
    try {
      await Linking.openSettings();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UPI Sound Notifier</Text>

      <View style={styles.card}>
        <Text style={styles.heading}>Notification Access</Text>

        <Text
          style={[
            styles.status,
            { color: enabled ? 'green' : 'red' },
          ]}>
          Status: {enabled ? 'Enabled' : 'Disabled'}
        </Text>

        <Switch
          value={enabled}
          onValueChange={setEnabled}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={openNotificationSettings}>
          <Text style={styles.buttonText}>
            Grant Permission
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>Custom Sounds</Text>

        <Text style={styles.item}>💰 Money Received</Text>
        <Text style={styles.item}>💸 Money Sent</Text>
        <Text style={styles.item}>❌ Payment Failed</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>Recent Transactions</Text>

        <Text style={styles.item}>₹500 Received</Text>
        <Text style={styles.item}>₹250 Sent</Text>
        <Text style={styles.item}>₹99 Failed</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginTop: 50,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },

  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  status: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '600',
  },

  item: {
    fontSize: 16,
    marginBottom: 8,
  },

  button: {
    backgroundColor: '#1976D2',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },

  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;