import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {horizontalScale, moderateScale, verticalScale} from './metrices';

const MetricsExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}> Hello world </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: verticalScale(90),
    width: horizontalScale(200),
    marginTop: verticalScale(500),
  },
  containerText: {
    fontSize: moderateScale(18),
  },
});

export default MetricsExample;
