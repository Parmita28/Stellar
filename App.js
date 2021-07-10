import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StackNavigator } from 'react-native';

import SpaceCraftScreen from './screens/SpaceCrafts';
import DailyPicScreen from './screens/DailyPic';
import StarMapScreen from './screens/StarMap';

export default function App() {
 return (
  <NavigationContainer>
  <Stack.Navigator initialRouteName="Home" screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen} />
    <Stack.Screen name="DailyPic" component={DailyPicScreen} />
    <Stack.Screen name="StarMap" component={StarMapScreen} />
  </Stack.Navigator>
</NavigationContainer>
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
