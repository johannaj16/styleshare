import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import {Container} from '../styles/HomeScreenStyle';
import {Card} from '../styles/HomeScreenStyle';
import {UserInfo} from '../styles/HomeScreenStyle';
import {UserImg} from '../styles/HomeScreenStyle';
import {UserInfoText} from '../styles/HomeScreenStyle';
import {UserName} from '../styles/HomeScreenStyle';
import {PostTime} from '../styles/HomeScreenStyle';
import {PostText} from '../styles/HomeScreenStyle';
import {PostImg} from '../styles/HomeScreenStyle';
import {InteractionWrapper} from '../styles/HomeScreenStyle';
import {Interaction} from '../styles/HomeScreenStyle';
import {InteractionText} from '../styles/HomeScreenStyle';
import {Divider} from '../styles/HomeScreenStyle';

import Icon from 'react-native-vector-icons/Ionicons';
import PostCard from '../components/PostCard';

const HomeScreen = () => {
  return (
    <Container>
      <Card>
        <UserInfo>
          <UserImg source={require('../assets/styleshare-dino.png')}/>
          <UserInfoText>
          <UserName>Johanna J :)</UserName>
          <PostTime>4 hours</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>Hii this is my post</PostText>
        <PostImg source={require('../assets/styleshare-dino.png')}/>
        <InteractionWrapper>
          <Interaction>
            <Icon name="heart-outline" size={25}/>
            <InteractionText>Like</InteractionText>
          </Interaction>
          <Interaction>
            <Icon name="md-chatbubble-outline" size={25}/>
            <InteractionText>Comment</InteractionText>
          </Interaction>
        </InteractionWrapper>
      </Card>

      
        {/* <FormButton 
        buttonTitle='Logout' 
        onPress={() => navigation.navigate('Login')}
        >
        </FormButton> */}
    </Container>
  )
}

export default HomeScreen;

