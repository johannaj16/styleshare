import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import Providers from './navigation';
const AppStack = createStackNavigator();
const App = () => {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Providers />
    // <NavigationContainer>
    //   <AppStack.Navigator
    //   screenOptions={{ headerShown: false }}
    //   >
    //     <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
    //     <AppStack.Screen name="Login" component={LoginScreen} />

    //   </AppStack.Navigator>
    // </NavigationContainer>
  );
}


export default App;
