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
import { Swipeable } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'



export default function ListPatient({navigation}){

  const [itemIndex] = useState('')

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPatients = async () => {
    try {
     const response = await fetch('http://localhost:3000/patient/fetch');
     const json = await response.json();
     setData(json);
   } catch (error) {
     console.error(error);
   } 
   finally {
    console.log(data)
     setLoading(false);
   }
 }

 useEffect(() => {
  getPatients();
}, []);

deleteItemById = id => {
  const filteredData = data.filter(item => item.id !== id);
  setData(filteredData)

//   useEffect(() => {
//     // DELETE request using axios with async/await
//     async function deletePost() {
//         await axios.delete(`http://localhost:3000/patient/delete/${id}`);
//         setStatus('Delete successful');
//     }

//     deletePost();
// }, []);
}


    return(
      <SafeAreaView style={{backgroundColor: Colors.secondary, flex:1}}>
        <Header title="PATIENT'S LIST" parent/>

        {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            
            <View>
        
              <View
              style={{borderBottomColor:'#000',borderBottomWidth:2, flexDirection:'row', justifyContent:'space-between', alignContent:'center'}}>      
                <TouchableOpacity
                onPress={()=> navigation.navigate('ViewPatient',item)}>
                <Text
              style={{marginHorizontal:20,fontSize:31,fontWeight:'300'}}>{item.patient_name}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=> this.deleteItemById(item.id)}>
                   <Ionicons name="trash-outline" size={28} color="red"
                                style={{
                                    alignSelf: 'center',

                     }} />
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
