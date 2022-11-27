import { createStackNavigator } from '@react-navigation/stack';
import Details from '../components/Details';
import Users from '../components/Users';

const Stack = createStackNavigator();

const UserStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export { UserStackNavigation };
