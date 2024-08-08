import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {
    InputWrapper,
    InputField,
    SubmitBtn,
    SubmitBtnText
  } from '../styles/AddPostStyle';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const AddPostScreen = ({navigation}) => {

    const takePhotoFromCamera = () => {
        console.log("Take Photo pressed");
        // Implement your takePhotoFromCamera function here
      };
    
      const choosePhotoFromLibrary = () => {
        console.log("Choose Photo pressed");
        // Implement your choosePhotoFromLibrary function here
      };

  return (
    <View style={styles.container}>
      <InputWrapper>
        {/* {image != null ? <AddImage source={{uri: image}} /> : null} */}

        <InputField
          placeholder="What's on your mind?"
          multiline
          numberOfLines={4}
        //   value={post}
        //   onChangeText={(content) => setPost(content)}
        />
        <SubmitBtn onPress={() => navigation.navigate('AddPost')}>
            <SubmitBtnText>Post</SubmitBtnText>
          </SubmitBtn>
        {/* {uploading ? (
          <StatusWrapper>
            <Text>{transferred} % Completed!</Text>
            <ActivityIndicator size="large" color="#0000ff" />
          </StatusWrapper>
        ) : (
          <SubmitBtn onPress={submitPost}>
            <SubmitBtnText>Post</SubmitBtnText>
          </SubmitBtn>
        )} */}
      </InputWrapper>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#ff7900' }]}
        onPress={takePhotoFromCamera}
      >
        <Icon name="camera-outline" style={styles.actionButtonIcon} />
        <Text style={styles.buttonText}>Take Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#ffbdf0' }]}
        onPress={choosePhotoFromLibrary}
      >
        <Icon name="camera-outline" style={styles.actionButtonIcon} />
        <Text style={styles.buttonText}>Choose Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      fontColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
  });