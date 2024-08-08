import { NavigationContainer } from '@react-navigation/native';
import React, {useContext, useState, useEffect} from 'react';
import AuthStack from './AuthStack';

const Routes = () => {
  return (
    <NavigationContainer>
        <AuthStack/>
    </NavigationContainer>
  )
}

export default Routes;