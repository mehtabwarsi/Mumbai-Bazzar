//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import PrimaryButton from '../utill/PrimaryButton';
const ModelViewComponet = ({isVisible, onBackdropPress}) => {
  return (
    <View>
      <Modal
        isVisible={isVisible}
        swipeDirection={'down'}
        onBackdropPress={onBackdropPress}>
        <View style={styles.container}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={{marginTop: 50}}>
              <PrimaryButton title={'Sign In'} />
            </View>
            <View style={{marginTop: 20}}>
              <PrimaryButton title={'Sign Up'} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '30%',
    width: 'auto',
    borderRadius: 10,
  },
});

//make this component available to the app
export default ModelViewComponet;
