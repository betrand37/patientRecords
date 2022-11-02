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
import Colors from '../components/Colors';


export default function ListPatient(){
    return(
      <SafeAreaView style={{backgroundColor: Colors.secondary, flex:1}}>
        <Header title="PATIENT'S LIST" parent/>
        <ScrollView
        style={{flex:1, marginTop:20}}>
          <View
          style={{borderBottomColor:'#000',borderBottomWidth:2}}>
          <Text
          style={{marginHorizontal:20,fontSize:35,fontWeight:'bold'}}>A</Text>
          </View>
          <View
          style={{borderBottomColor:'#000',borderBottomWidth:2}}>
          <Text
          style={{marginHorizontal:20,fontSize:31,fontWeight:'300'}}>AARON MICHAEL</Text>
          </View>
          <View
          style={{borderBottomColor:'#000',borderBottomWidth:2}}>
          <Text
          style={{marginHorizontal:20,fontSize:31,fontWeight:'300'}}>ABIGAIL SIMPSON</Text>
          </View>
          <View
          style={{borderBottomColor:'#000',borderBottomWidth:2, marginBottom:13}}>
          <Text
          style={{marginHorizontal:20,fontSize:31,fontWeight:'300'}}>ALLYSON ONLY</Text>
          </View>

          <View
          style={{borderBottomColor:'#000',borderBottomWidth:2}}>
          <Text
          style={{marginHorizontal:20,fontSize:35,fontWeight:'bold'}}>B</Text>
          </View>
          <View
          style={{borderBottomColor:'#000',borderBottomWidth:2}}>
          <Text
          style={{marginHorizontal:20,fontSize:31,fontWeight:'300'}}>BAILY GRE</Text>
          </View>
          <View
          style={{borderBottomColor:'#000',borderBottomWidth:2}}>
          <Text
          style={{marginHorizontal:20,fontSize:31,fontWeight:'300'}}>BANS TEY</Text>
          </View>
          <View
          style={{borderBottomColor:'#000',borderBottomWidth:2, marginBottom:13}}>
          <Text
          style={{marginHorizontal:20,fontSize:31,fontWeight:'300'}}>BETRAND</Text>
          </View>

          <View
          style={{borderBottomColor:'#000',borderBottomWidth:2}}>
          <Text
          style={{marginHorizontal:20,fontSize:35,fontWeight:'bold'}}>C</Text>
          </View>
          <View
          style={{borderBottomColor:'#000',borderBottomWidth:2}}>
          <Text
          style={{marginHorizontal:20,fontSize:31,fontWeight:'300'}}>CARL JOHNSON</Text>
          </View>
          <View
          style={{borderBottomColor:'#000',borderBottomWidth:2}}>
          <Text
          style={{marginHorizontal:20,fontSize:31,fontWeight:'300'}}>CASEY</Text>
          </View>
          <View
          style={{borderBottomColor:'#000',borderBottomWidth:2, marginBottom:13}}>
          <Text
          style={{marginHorizontal:20,fontSize:31,fontWeight:'300'}}>CAB</Text>
          </View>


          <View
          style={{borderBottomColor:'#000',borderBottomWidth:2}}>
          <Text
          style={{marginHorizontal:20,fontSize:35,fontWeight:'bold'}}>D</Text>
          </View>
          <View
          style={{borderBottomColor:'#000',borderBottomWidth:2}}>
          <Text
          style={{marginHorizontal:20,fontSize:31,fontWeight:'300'}}>DARREN</Text>
          </View>
          <View
          style={{borderBottomColor:'#000',borderBottomWidth:2}}>
          <Text
          style={{marginHorizontal:20,fontSize:31,fontWeight:'300'}}>DEN</Text>
          </View>
          <View
          style={{borderBottomColor:'#000',borderBottomWidth:2, marginBottom:13}}>
          <Text
          style={{marginHorizontal:20,fontSize:31,fontWeight:'300'}}>DERM ONLY</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
}

const styles= StyleSheet.create({

})
