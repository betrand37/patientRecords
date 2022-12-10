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
} from 'react-native';
import Header from '../components/Header';
import Colors from '../components/Colors';

export default function ViewPatient({navigation, route}) {

  const detail = route.params

  const[openClinical,setOpenClinical] = useState(false);
  const[openRecords,setOpenRecords] = useState(false);
  const[openCritical,setOpenCritical] = useState(false);

  const handleClinicalOpening = () => {
    setOpenClinical(true)
    
  }

  const handleClinicalClosing = () => {
    setOpenClinical(false)
    
  }

  const handleRecordsOpening = () => {
    setOpenRecords(true)
    
  }

  const handleRecordsClosing = () => {
    setOpenRecords(false)
    
  }

  const handleCriticalOpening = () => {
    setOpenCritical(true)
    
  }

  const handleCriticalClosing = () => {
    setOpenCritical(false)
    
  }
  // const handleOpening = () => {
  //   setOpen(false)
  // }


  return (
    <SafeAreaView style={{backgroundColor: Colors.secondary,flex:1}}>
      <Header title="VIEW PATIENT" parent />

      <ScrollView style={styles.mainContent}
      showsVerticalScrollIndicator={false}>
        <View style={{alignSelf: 'center'}}>
          <View style={styles.firstSection}></View>
          <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>
          {detail.patient_name}
          </Text>
        </View>
        <TouchableOpacity style={styles.addPatient}
         onPress={openRecords === false ? handleRecordsOpening : handleRecordsClosing}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>RECORDS</Text>
        </TouchableOpacity>
        {openRecords === true ?
        <View style={styles.openSection}>
           
            <Text style={{fontWeight: 'bold', color: 'white'}}>
            {detail.patient_medicalrecord} 
            </Text>
          </View>
: <></>}

        <TouchableOpacity style={styles.addPatient}
        onPress={openClinical === false ? handleClinicalOpening : handleClinicalClosing}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            CLINICAL DATA
          </Text>
        </TouchableOpacity>
        {openClinical === true ?
        <View style={styles.openSection}>
         <Text style={{marginHorizontal:20,fontSize:18,fontWeight:'300'}}>Age: {detail.patient_age}</Text>
         <Text
          style={{marginHorizontal:20,fontSize:18,fontWeight:'300'}}>Gender: {detail.patient_gender}</Text>
         <Text
          style={{marginHorizontal:20,fontSize:18,fontWeight:'300'}}>Address: {detail.patient_address}</Text>
            <Text
           style={{marginHorizontal:20,fontSize:18,fontWeight:'300'}}>Phone: {detail.patient_phone}</Text>
          </View>
: <></>}

        <TouchableOpacity style={styles.addPatient}
         onPress={openCritical === false ? handleCriticalOpening : handleCriticalClosing}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            CRITICAL CONDITION
          </Text>
        </TouchableOpacity>
        {openCritical === true ?
        <View style={styles.openSection}>
            <Text
              style={{fontWeight: 'bold', color: 'white', marginBottom: 10}}>
              TRUE
            </Text>
          
          </View>
: <></>}


        <TouchableOpacity style={styles.doneButton}
        onPress={()=> navigation.navigate('HomeScreen')}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>DONE</Text>
          </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    marginHorizontal: 40,
    marginTop: 50,
   flex:1,
  },
  firstSection: {
    backgroundColor: Colors.primaryColor,
    height: 150,
    width: 150,
    borderRadius: 150,
    marginBottom: 15,
  },
  addPatient: {
    width: '100%',
    backgroundColor: '#000',
    padding: 20,
    marginVertical: 20,
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
  openSection: {
    backgroundColor: Colors.primaryColor,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
