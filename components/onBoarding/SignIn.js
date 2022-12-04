import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView, SafeAreaView, StyleSheet, TouchableOpacity, Platform, TextInput, StatusBar } from 'react-native'
import SimpleLinesIcons from 'react-native-vector-icons/Feather';
import Colors from '../Colors';
import Input,{ Password } from '../Input';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Button from '../Button';
import Row from '../Row';

export default function SignIn({ navigation }) {


    const [callingCode, setCallingCode] = useState('+1');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
    const [focus, setFocus] = useState(false);

    return (

        <KeyboardAvoidingView
            style={{
                backgroundColor: 'white',
                flex: 1
            }}>
            <SafeAreaView style={styles.androidSafeArea}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ paddingRight: 10 }}
                    onPress={() => {
                        navigation.canGoBack() && navigation.goBack();
                    }}>
                    <SimpleLinesIcons
                        size={20}
                        name={'arrow-left'}
                    />
                </TouchableOpacity>
                <View
                    style={{
                        paddingTop: '20%',
                        alignSelf: 'center'
                    }}>
                    <Text
                        style={{
                            fontSize: 17
                        }}>Welcome Back</Text>
                </View>

                <View
                // style={{
                //     paddingTop: '10%',
                //     height: 40,
                //     width: '100%',
                //     marginBottom: 12,
                //     borderColor: COLORS.green,
                //     borderWidth: 1
                // }}
                >
                    <View
                        style={{
                            height: 50,
                            width: '100%',
                            alignSelf: 'center',
                            backgroundColor: 'white',
                            borderTopWidth: 3,
                            borderTopColor: '#f5f5f5',
                            flexDirection: 'row',
                            marginBottom: 15,
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.30,
                            shadowRadius: 4.65,

                            elevation: 8,

                        }}>
                        <Ionicons name="person-outline" size={25} color="grey"
                            style={{
                                // width: '20%',
                                alignSelf: 'center',
                                marginLeft: 10
                            }} />
                        <TextInput
                            style={{
                                height: '100%',
                                width: '90%',

                                fontSize: 15,
                                marginLeft: 5
                            }}
                            placeholder="Full Name"
                        />
                    </View>


                    <View
                        style={{
                            height: 50,
                            width: '100%',
                            alignSelf: 'center',
                            backgroundColor: 'white',
                            borderTopWidth: 3,
                            borderTopColor: '#f5f5f5',
                            flexDirection: 'row',
                            marginBottom: 15,
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.30,
                            shadowRadius: 4.65,

                            elevation: 8,

                        }}>
                        <View
                            style={{
                                justifyContent: 'center',
                                marginLeft: 10
                            }}>
                            <Ionicons name="lock-closed-outline" size={25} color="grey"
                                style={{
                                    alignSelf: 'center',

                                }} />
                        </View>
                        <View
                            style={{
                                width: '89%',
                                justifyContent: 'center',
                                paddingLeft: 5
                            }}>
                            <Password
                                placeholder="Password"
                                style={{
                                    borderWidth: 0,

                                }}
                                onChangeText={t => setPassword(t)}
                            />
                        </View>
                    </View>
                    <Row style={{ justifyContent: 'flex-end' }}>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={{ paddingBottom: -4, paddingTop: 5 }}
                            onPress={() => {
                                navigation.navigate('');
                            }}>
                            <Text style={{
                                color: "red",
                                fontSize: 15
                            }}
                            >Forgot Your Password?</Text>
                        </TouchableOpacity>
                    </Row>

               
                
                    <Button
                        title="Sign In"
                        style={{
                            marginTop: '13%',
                          
                        }}
                        onPress={() => navigation.navigate('HomeScreen')}
                    />
                  

                    <Row style={{ justifyContent: 'center' }}>
                        <Text
                            style={{
                                alignSelf: 'center',
                                textAlign: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            Not a member?{' '}
                        </Text>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={{ paddingBottom: -4 }}
                            onPress={() => {
                                navigation.navigate('SignIn');
                            }}>
                            <Text style={{
                                color: "green",
                                fontSize: 15
                            }}
                            >Sign Up</Text>
                        </TouchableOpacity>
                    </Row>

                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        margin: 20
    }
})