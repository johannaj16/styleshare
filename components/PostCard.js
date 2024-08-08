import React from "react";

const PostCard = () => {
    return(
        <Card>
        <UserInfo>
          <UserImg source={require('../assets/styleshare-dino.png')}/>
          <UserInfoText>
          <UserName>Johanna J :)</UserName>
          <PostTime>4 hours</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>Hii this is my post!!</PostText>
        <Divider/>
        <InteractionWrapper>
          <Interaction active>
            <Icon name="heart" size={25} color='#2e64e5'/>
            <InteractionText active>Like</InteractionText>
          </Interaction>
          <Interaction>
            <Icon name="md-chatbubble-outline" size={25}/>
            <InteractionText>Comment</InteractionText>
          </Interaction>
        </InteractionWrapper>
      </Card>
    );
};