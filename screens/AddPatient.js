import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';


export default function AddPatient(){
    return(
        <Header title="ADD PATIENT" parent/>
    )
}