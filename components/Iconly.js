import React from 'react';
import Icomoon from 'react-native-icomoon';
import json from './selection.json';

export default function Iconly({ name, ...restProps }) {
  return <Icomoon iconSet={json} name={name} {...restProps} />;
}
