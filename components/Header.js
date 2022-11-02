import React, { useState ,useEffect} from 'react'
import { View, Text, KeyboardAvoidingView, SafeAreaView, StyleSheet, TouchableOpacity, Platform, TextInput, StatusBar } from 'react-native'
import SimpleLinesIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Colors from './Colors';


export default function Header({

    title,
    titleAlign,
    child = false,
    parent = false,
    notification = false,
    transparent = false,
    modal = false,
    border = false,
    subtitle,
    additional = () => null,
   }) {
    const navigation = useNavigation();

    useEffect(() => {
        const subscribe = navigation.addListener('focus',() => {
            StatusBar.setBarStyle(modal?'light-content':'dark-content')
        });
        return subscribe
    }, [navigation])



    return (

        <SafeAreaView style={styles.androidSafeArea}>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 15,
                    backgroundColor: Colors.primaryColor ,
                    paddingTop: !modal
                        ? Platform.OS === 'android'
                            ? 10
                            : StatusBar.currentHeight + 10
                        : 15,
                    borderBottomWidth: border ? 0.5 : 0,
                    borderBottomColor: '#e3e3e3',
                }}>
                    <View>
                <StatusBar  barStyle="dark-content" />
                {child || parent ? (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ paddingRight: 10 }}
                        onPress={() => {
                            navigation.canGoBack() && navigation.goBack();
                        }}>
                        <SimpleLinesIcons
                            size={35}
                            name={modal ? 'arrow-down' : 'arrow-left'}
                        />
                    </TouchableOpacity>
                ) : null}
            </View>
            <View >
                <Text
                    style={{
                        fontSize: child ? 18 : 22,
                        textAlign: titleAlign ? titleAlign : 'left',
                        // paddingBottom: ,
                        fontWeight:'bold'
                    }}>
                    {title}
                </Text>
                {subtitle && (
                    <Text
                        style={{
                            color: 'grey',
                            fontSize: 14,
                            textAlign: titleAlign ? titleAlign : 'left',
                        }}>
                        {subtitle}
                    </Text>
                )}
                </View>
            </View>

        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: 'white',
    }
})