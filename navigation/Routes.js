import { NavigationContainer } from '@react-navigation/native';
import React, {useContext, useState, useEffect} from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {
  return (
    <NavigationContainer>
        <AppStack/>
    </NavigationContainer>
  )
}

export default Routes;