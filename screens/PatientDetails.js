import React,{useState, useEffect} from 'react';
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
  FlatList,
  ActivityIndicator
} from 'react-native';
import Header from '../components/Header';
import Colors from '../components/Colors';


export default function PatientDetails({ navigation, route }){


    const detail = route.params

  const [itemIndex] = useState('')

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


    return(
      <SafeAreaView style={{backgroundColor: Colors.secondary, flex:1}}>
        <Header title="PATIENT'S DETAILS" parent/>

            <View
            style={{borderBottomColor:'#000'}}>
              <TouchableOpacity
             >
              <Text
            style={{marginHorizontal:20,fontSize:28,fontWeight:'300'}}>Name: {detail.patient_name}</Text>
                   <Text
            style={{marginHorizontal:20,fontSize:28,fontWeight:'300'}}>Age: {detail.patient_age}</Text>
                   <Text
            style={{marginHorizontal:20,fontSize:28,fontWeight:'300'}}>Gender: {detail.patient_gender}</Text>
                   <Text
            style={{marginHorizontal:20,fontSize:28,fontWeight:'300'}}>Address: {detail.patient_address}</Text>
                   <Text
            style={{marginHorizontal:20,fontSize:28,fontWeight:'300'}}>Phone: {detail.patient_phone}</Text>
                               <Text
            style={{marginHorizontal:20,fontSize:28,fontWeight:'300'}}>Medical records: {detail.patient_medicalrecords}</Text>
              </TouchableOpacity>
     
            </View>
          
      </SafeAreaView>
    )
}

const styles= StyleSheet.create({

})
