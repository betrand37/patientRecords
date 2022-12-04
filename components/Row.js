import React from 'react';
import { View } from 'react-native';

export default function Row(props) {
  return <View {...props} style={[props.style, { flexDirection: 'row' }]} />;
}
