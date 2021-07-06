import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import MovieDetailScreen from './src/screens/MovieDetailScreen';
import { APP_TITLE, DARKBLUE } from './src/utils/commoncolors';

const Stack = createStackNavigator();

export default function(){
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MovieDetail"
        screenOptions={{
            headerTitle: 'TMDB',
            headerTitleStyle: {
              color: APP_TITLE,
              letterSpacing: 3,
              fontWeight: 'bold',
              fontSize: 24
            },
            headerStyle: {
                backgroundColor: DARKBLUE,
            }}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MovieDetail" component={MovieDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}