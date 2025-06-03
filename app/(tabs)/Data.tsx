// data.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

export default function DataScreen() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  type User = {
    id: number;
    name: string;
    email: string;
    company: {
      name: string;
    };
  };

  useEffect(() => {
    fetch('https://fake-json-api.mock.beeceptor.com/users')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text> Loading users...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.list}>Data has been fetched. Go to company tab to view</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    padding: 50,
    marginBottom: 3,
    justifyContent: 'center',
    marginTop: 400, 
  },
  card: {
    backgroundColor: '#f0f8ff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 2,
  },
  name: {
    fontSize: 100,
    fontWeight: 'bold',
  },
  email: {
    fontStyle: 'italic',
  },
  company: {
    color: '#555',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(250, 159, 205)', // background colour
  }
});
