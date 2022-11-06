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

//   const getMovies = async () => {
//     try {
//      const response = await fetch('http://192.168.2.150:3009/patientderver/get-all-patients');
//      const json = await response.json();
//      setData(json);
//    } catch (error) {
//      console.error(error);
//    } finally {
//     console.log(data)
//      setLoading(false);
//    }
//  }

//  useEffect(() => {
//   getMovies();
// }, []);



    return(
      <SafeAreaView style={{backgroundColor: Colors.secondary, flex:1}}>
        <Header title="PATIENT'S DETAILS" parent/>

            <View
            style={{borderBottomColor:'#000'}}>
              <TouchableOpacity
             >
              <Text
            style={{marginHorizontal:20,fontSize:28,fontWeight:'300'}}>Name: {detail.patientname}</Text>
                   <Text
            style={{marginHorizontal:20,fontSize:28,fontWeight:'300'}}>Age: {detail.patientage}</Text>
                   <Text
            style={{marginHorizontal:20,fontSize:28,fontWeight:'300'}}>Gender: {detail.patientgender}</Text>
                   <Text
            style={{marginHorizontal:20,fontSize:28,fontWeight:'300'}}>Address: {detail.patientaddress}</Text>
                   <Text
            style={{marginHorizontal:20,fontSize:28,fontWeight:'300'}}>Phone: {detail.patientphone}</Text>
              </TouchableOpacity>
     
            </View>
          
      </SafeAreaView>
    )
}

const styles= StyleSheet.create({

})
