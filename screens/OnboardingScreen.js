import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

// const Skip = () => (
//     <Button
//         title='Skip'
//         color='#000000'
//     />
// )
const OnboardingScreen = ({navigation}) => {
  return (

    <Onboarding
    //SkipButtonComponent={Skip}
    onSkip={() => navigation.replace("Login")}
    onDone={() => navigation.navigate("Login")}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/Virtual-Onboarding-Thumbnail.png')} />,
      title: 'Onboarding',
      subtitle: 'first onboarding screen!',
    },
    {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/Virtual-Onboarding-Thumbnail.png')} />,
        title: 'Onboarding',
        subtitle: 'second!',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/Virtual-Onboarding-Thumbnail.png')} />,
        title: 'Onboarding',
        subtitle: 'third!!',
      },
    
  ]}
/>

    // <View style={styles.container}>
    //     <Text>Onboarding Screen</Text>
    //     <Button
    //     title = 'click ere'
    //     onPress={()=> navigation.navigate("Login")}
    //     />
    // </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})