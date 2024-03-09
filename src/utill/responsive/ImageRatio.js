import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {verticalScale} from './metrices';

const AspectRatioExample = () => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: 'https://static.toiimg.com/photo/107091638.cms'}}
          style={styles.image}
          resizeMode="stretch"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(700),
    // height:'110%',
    alignContent: 'center',
  },
  image: {
    flex: 1,
    aspectRatio: 1 / 2,
  },
});

export default AspectRatioExample;
