import React from "react";
import {Card} from '../styles/HomeScreenStyle';

import {Container} from '../styles/HomeScreenStyle';
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

const PostCard = ({item}) => {

        likeIcon = item.liked ? 'heart' : 'heart-outline';
        likeIconColor = item.liked ? '#2e64e5' : '#333';

        if (item.likes == 1) {
            likeText = '1 Like';
          } else if (item.likes > 1) {
            likeText = item.likes + ' Likes';
          } else {
            likeText = 'Like';
          }
        
          if (item.comments == 1) {
            commentText = '1 Comment';
          } else if (item.comments > 1) {
            commentText = item.comments + ' Comments';
          } else {
            commentText = 'Comment';
          }

    return(
        <Card>
        <UserInfo>
          <UserImg source={item.userImg}/>
          <UserInfoText>
          <UserName>{item.userName}</UserName>
          <PostTime>{item.postTime}</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>{item.post}</PostText>
        {item.postImg !== 'none' ? <PostImg source={item.posting} /> : <Divider />}
        <Divider/>
        <InteractionWrapper>
          <Interaction active={item.liked}>
            <Icon name={likeIcon} size={25} color='#2e64e5'/>
            <InteractionText active={item.liked}>{likeText}</InteractionText>
          </Interaction>
          <Interaction>
            <Icon name="heart" size={25}/>
            <InteractionText>{commentText}</InteractionText>
          </Interaction>
        </InteractionWrapper>
      </Card>
    );
};

export default PostCard;