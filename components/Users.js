import { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { useUser } from '../hooks/userContext';
import UserItem from './UserItem';

export default function Users({ navigation }) {
  const [users] = useUser();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (!users) {
    return null;
  }

  if (isLoading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor="blue" />
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <UserItem
              user={item}
              onPress={() => navigation.navigate('Details', { id: item.id })}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
