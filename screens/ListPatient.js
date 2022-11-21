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


export default function ListPatient({navigation}){

  const [itemIndex] = useState('')

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPatients = async () => {
    try {
     const response = await fetch('http://172.20.10.2.:3000/patient/fetch');
     const json = await response.json();
     setData(json);
   } catch (error) {
     console.error(error);
   } finally {
    console.log(data)
     setLoading(false);
   }
 }

 useEffect(() => {
  getPatients();
}, []);



    return(
      <SafeAreaView style={{backgroundColor: Colors.secondary, flex:1}}>
        <Header title="PATIENT'S LIST" parent/>

        {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
   
            <View>
            {/* <View
            style={{borderBottomColor:'#000',borderBottomWidth:2}}>
            <Text
            style={{marginHorizontal:20,fontSize:35,fontWeight:'bold'}}>{item.patientname[0]}</Text>
            </View> */}
            <View
            style={{borderBottomColor:'#000',borderBottomWidth:2}}>
              <TouchableOpacity
              onPress={()=> navigation.navigate('PatientDetails',item)}>
              <Text
            style={{marginHorizontal:20,fontSize:31,fontWeight:'300'}}>{item.patientname}</Text>
              </TouchableOpacity>
     
            </View>

            </View>
          )}
        />
      )}
 
      </SafeAreaView>
    )
}

const styles= StyleSheet.create({

})
