import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/HomeScreen';
import Space from './src/components/SpaceScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={Home}/>
        <Stack.Screen name="SpaceScreen" component={Space}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

