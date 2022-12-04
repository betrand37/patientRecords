import React from 'react'
import { View, Text, KeyboardAvoidingView, SafeAreaView, StyleSheet, TouchableOpacity, Platform, StatusBar } from 'react-native'
import SimpleLinesIcons from 'react-native-vector-icons/Feather';

export default function SignIn({ navigation }) {
    return (

        <KeyboardAvoidingView>
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