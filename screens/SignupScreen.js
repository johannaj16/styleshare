import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useFonts } from 'expo-font';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <View style={styles.container}>
      <Image
      source={require('../assets/styleshare-dino.png')}
      style={styles.logo}
      />
      <Text style={styles.text}>Create an Account</Text>

      {/* userName input */}
      <FormInput
        labelValue={email}
        onChangeText={ (userEmail) => setEmail(userEmail) }
        placeholderText="email here"
        iconType="user"
        keyboardType='email-address'
        autoCapitalize="none"
        autoCorrect={false}
      />

      {/* password input */}
      <FormInput
        labelValue={password}
        onChangeText={ (userPassword) => setPassword(userPassword) }
        placeholderText="password"
        iconType="lock"
        secureTextEntry = {true}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormButton
        buttonTitle="Sign up !"
        onPress={() => alert('Sign up creation Clicked!')}
        />

        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>By registering, confirm that you accept our </Text>
          <TouchableOpacity onPress={() => alert('Terms clicked!')}>
            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>Terms of Service and Privacy Policy</Text>
          </TouchableOpacity>
        </View>

        <SocialButton
          buttonTitle="Sign up with Facebook"
          btnType="facebook"
          color="#4867aa"
          backgroundColor="#e6eaf4"
          onPress={() => {}}
        />

        <SocialButton
          buttonTitle="Sign up with Google"
          btnType="google"
          color="#de4d41"
          backgroundColor="#f5e7ea"
          onPress={() => {}}
        />

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navButtonText}>
            Have an account? Sign in.
          </Text>
        </TouchableOpacity>
    </View>
    // <div>OnboardingScreen</div>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
      width:150,
      height:150,
      resizeMode: 'cover',
    },
    text: {
        fontFamily: 'Calibri',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {

    },
    forgotButton: {

    },
    navButtonText: {
      fontSize: 18,

    }
})