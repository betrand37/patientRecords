import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../components/Colors';
import Header from '../components/Header';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: Colors.secondary}}>
      <Header title="Welcome" />

      <View style={styles.mainContent}>
        <View style={styles.firstSection}>
          <Text style={{fontWeight: 'bold', color: 'white', marginBottom: 10}}>
            WELCOME,
          </Text>
          <Text style={{fontWeight: 'bold', color: 'white'}}>
            DOCTOR THEOPHILUS
          </Text>
        </View>
        <TouchableOpacity
          style={styles.addPatient}
          onPress={() => navigation.navigate('AddPatient')}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>ADD PATIENT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addPatient}
          onPress={() => navigation.navigate('ListPatient')}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            LIST ALL PATIENTS
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={styles.addPatient}
          onPress={() => navigation.navigate('ViewPatient')}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            VIEW PATIENT RECORD
          </Text>
        </TouchableOpacity> */}

  
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    marginHorizontal: 40,
    marginTop: 80,
    height: '80%',
  },
  firstSection: {
    backgroundColor: Colors.primaryColor,
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPatient: {
    width: '100%',
    backgroundColor: '#000',
    padding: 20,
    marginVertical: 20,
  },
});
