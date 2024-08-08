import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
const Stack = createStackNavigator();
const AuthStack = () => {
  let routeName;
  return (
      
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

      <Stack.Navigator
      initialRouteName={routeName}
      >
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{header: () => null}}
        />
        <Stack.Screen 
        name="Onboarding" 
        component={OnboardingScreen} 
        options={{header: () => null}}
        />

        <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{header: () => null}}
        />
        <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={({navigation}) => ({
          title: '',
          // headerLeft: () => (
          //   <View style={{marginLeft:10}}>
          //     <FontAwesome.Button
          //     name="long-arrow-left"
          //     size={25}
          //     backgroundColor="#f9fafd"
          //     onPress={() => navigation.navigate('Login')}

          //     />
          //   </View>
          // )
        })
      }
        />
        
      </Stack.Navigator>
  );
}


export default AuthStack;
