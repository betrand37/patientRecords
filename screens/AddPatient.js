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
  Dimensions,
} from 'react-native';
import Colors from '../components/Colors';
import Header from '../components/Header';

export default function AddPatient({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.secondary}}>
      <Header title="ADD PATIENT" parent />
      <View style={{backgroundColor: Colors.secondary, flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.mainPage}>
          <Text style={{paddingVertical: 20}}>FULLNAME</Text>
          <TextInput style={{borderBottomWidth: 2}} />

          <Text style={{paddingVertical: 20}}>AGE</Text>
          <TextInput style={{borderBottomWidth: 2}} />

          <Text style={{paddingTop: 20}}>AGE</Text>
          <View style={styles.firstSection}>
            <Text
              style={{fontWeight: 'bold', color: 'white', marginBottom: 10}}>
              WELCOME,
            </Text>
            <Text style={{fontWeight: 'bold', color: 'white'}}>
              DOCTOR THEOPHILUS
            </Text>
          </View>

          <Text style={{paddingTop: 20}}>CLINICAL DATA</Text>
          <View style={styles.firstSection}>
            <Text
              style={{fontWeight: 'bold', color: 'white', marginBottom: 10}}>
              WELCOME,
            </Text>
            <Text style={{fontWeight: 'bold', color: 'white'}}>
              DOCTOR THEOPHILUS
            </Text>
          </View>

          <Text style={{paddingTop: 20}}>CRITICAL CONDITION</Text>
          <View style={styles.firstSection}>
            <Text
              style={{fontWeight: 'bold', color: 'white', marginBottom: 10}}>
              WELCOME,
            </Text>
            <Text style={{fontWeight: 'bold', color: 'white'}}>
              DOCTOR THEOPHILUS
            </Text>
          </View>

          <TouchableOpacity style={styles.doneButton}
          onPress={()=> navigation.navigate('HomeScreen')}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>DONE</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainPage: {
    marginHorizontal: 20,
    flex: 1,
  },
  firstSection: {
    backgroundColor: Colors.primaryColor,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneButton: {
    width: '100%',
    backgroundColor: Colors.button,
    padding: 15,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
