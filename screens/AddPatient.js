import React,{useState} from 'react';
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
  Input
} from 'react-native';
import Colors from '../components/Colors';
import { Ref } from 'react';
import Header from '../components/Header';

export default function AddPatient({navigation}) {


  const [ fullName,setFullName] = useState('');
  const [ age,setAge] = useState();
  const [ address,setAdresss] = useState('');
  const [ phone,setPhone] = useState('');
  const [ gender,setGender] = useState('');
  




const handleSubmit = (e) => {
  e.preventDefault();
 
  fetch('http://192.168.0.21:3009/patientderver/add-patient', {
     method: 'POST',
     body: JSON.stringify({
        patientname: fullName,
        patientage: age,
        patientaddress: address,
        patientphone: phone,
        patientgender: gender,
        
     }),
     headers: {
        'Content-type': 'application/json; charset=UTF-8',
     },
  })
     .then((res) => res.json())
     .then(() => {
        setFullName('');
        setAge('');
        setGender('');
        setAdresss('');
        setPhone('')
     })
     .catch((err) => {
        console.log(err.message);
     });
};




  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.secondary}}>
      <Header title="ADD PATIENT" parent />
      <View style={{backgroundColor: Colors.secondary, flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.mainPage}>
          <Text style={{paddingVertical: 20}}>FULLNAME</Text>
          <TextInput style={{borderBottomWidth: 2}} 
          onChangeText={(e) => setFullName(e)}/>

          <Text style={{paddingVertical: 20}}>AGE</Text>
          <TextInput style={{borderBottomWidth: 2}}
          keyboardType="numeric" 
          onChangeText={(e) => setAge(e)}/>

          <Text style={{paddingTop: 20}}>RECORDS</Text>
          <View style={styles.firstSection}>
          
            <TextInput style={{fontWeight: 'bold', color: 'white',flex:1}}
            multiline={true}
            onChangeText={(e) => setPhone(e)}/>
          </View>

          <Text style={{paddingTop: 20}}>CLINICAL DATA</Text>
          <View style={styles.firstSection}>
          <TextInput style={{fontWeight: 'bold', color: 'white',flex:1}}
            multiline={true}
            onChangeText={(e) => setGender(e)}
        />
          </View>

          <Text style={{paddingTop: 20}}>ADDRESS</Text>
          <View style={styles.firstSection}>
          <TextInput style={{fontWeight: 'bold', color: 'white',flex:1}}
            multiline={true}
            onChangeText={(e) => setAdresss(e)}/>
          </View>

          <TouchableOpacity style={styles.doneButton}
          onPress={handleSubmit}>
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
    // justifyContent:'',
    // alignItems: 'center',
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
