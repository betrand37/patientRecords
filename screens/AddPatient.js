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
 const [bloodlevel,setBloodLevel] = useState('');
 const [heartRate,setHeartRate] = useState('')




const handleSubmit = (e) => {
  e.preventDefault();
 
  fetch('http://localhost:3000/patient/add', {
     method: 'POST',
    
     body: JSON.stringify(
      {
     patient_name:fullName,
     patient_phone:phone,
     patient_address:address,
     patient_age:age,
     patient_gender:gender,
     patient_medicalrecord:bloodlevel

     }),
     headers: {
        'Content-type': 'application/json; charset=UTF-8',
     },
  })
     .then((res) => res.json())
     .then((res) => {
      console.log(res)
     })
     .catch((err) => {
        console.log(err.message);
     });

  // axios.post('http://localhost:3000/patient/add', {
  //   patient_name:fullName,
  //    patient_phone:phone,
  //    patient_address:address,
  //    patient_age:age,
  //    patient_gender:gender,
  //    patient_medicalrecord:bloodlevel
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
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
          
            <TextInput style={{fontWeight: 'bold', color: 'white',flex:1,borderBottomWidth:2}}
            placeholder="Bloodlevel"
            onChangeText={(e) => setBloodLevel(e)}/>
              <TextInput style={{fontWeight: 'bold', color: 'white',flex:1}}
          placeholder="Heart rate"
            onChangeText={(e) => setHeartRate(e)}/>
          </View>

          <Text style={{paddingTop: 20}}>CLINICAL DATA</Text>
          <View style={styles.firstSection}>
          <TextInput style={{fontWeight: 'bold', color: 'white',flex:1,borderBottomWidth:2}}
          placeholder="Gender"
            onChangeText={(e) => setGender(e)}
        />
          <TextInput style={{fontWeight: 'bold', color: 'white',flex:1}}
     placeholder="phone"
            onChangeText={(e) => setPhone(e)}
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
    height: 80,
    justifyContent:'space-evenly',
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
