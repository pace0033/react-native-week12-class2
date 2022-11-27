import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useUser } from '../hooks/userContext';

function Details({ route }) {
  const [users] = useUser();

  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="red" />
      <Text>{route.params.id}</Text>
    </View>
  );
}

export default Details;
