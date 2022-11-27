import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function UserItem({ user, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={{ fontSize: 20, paddingBottom: 5 }}>{user.name}</Text>
      <Text>Phone: {user.phone}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
  },
});
