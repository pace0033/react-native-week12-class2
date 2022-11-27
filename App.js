import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './hooks/userContext';
import { UserStackNavigation } from './navigation/UserNavigation';
import HomeScreen from './components/HomeScreen';
import Settings from './components/Settings';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <UserProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: 'indigo' },
              headerTintColor: 'white',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              tabBarActiveTintColor: 'indigo',
              tabBarInactiveTintColor: 'grey',
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
                tabBarIcon: ({ focused, size, color }) => (
                  <Ionicons
                    name={focused ? 'ios-home' : 'ios-home-outline'}
                    size={size}
                    color={color}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="User List"
              component={UserStackNavigation}
              options={{
                headerShown: false,
                tabBarIcon: ({ focused, size, color }) => (
                  <Ionicons
                    name={
                      focused ? 'ios-list-circle' : 'ios-list-circle-outline'
                    }
                    size={size}
                    color={color}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{
                tabBarIcon: ({ focused, size, color }) => (
                  <Ionicons
                    name={focused ? 'ios-settings' : 'ios-settings-outline'}
                    size={size}
                    color={color}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
