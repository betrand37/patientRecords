/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import AddPatient from './screens/AddPatient';
import ListPatient from './screens/ListPatient';
import ViewPatient from './screens/ViewPatient';
import PatientDetails from './screens/PatientDetails';

import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './components/onBoarding/SignUp';
import SignIn from './components/onBoarding/SignIn';


const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="SignUp"
        component={SignUp}
        screenOptions={{headerShown: false}}>
        <stack.Screen name="SignUp" component={SignUp} />
        <stack.Screen name="SignIn" component={SignIn} />
        <stack.Screen name="HomeScreen" component={HomeScreen} />
        <stack.Screen name="AddPatient" component={AddPatient} />
        <stack.Screen name="ListPatient" component={ListPatient} />
        <stack.Screen name="ViewPatient" component={ViewPatient} />
        <stack.Screen name="PatientDetails" component={PatientDetails} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
