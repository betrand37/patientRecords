import React, { useEffect, useState } from 'react';
import {
    TouchableOpacity,
    Animated,
    StyleSheet,
    ActivityIndicator,
    Text
} from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons';
import Row from './Row';
import Colors from './Colors';
import Iconly from './Iconly';

export default function Button(props) {
    let animated = new Animated.Value(1);

    const handlePressIn = () => {
        Animated.spring(animated, {
            toValue: 0.9,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(animated, {
            toValue: 1,
            friction: 20,
            tension: 90,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        return animated.removeAllListeners();
    }, []);

    return (
        <TouchableOpacity
            disabled={props.loading}
            activeOpacity={0.8}
            {...props}
            style={[
                style.button,

                {
                    backgroundColor: props.disabled ? 'grey' : Colors.button,
                    ...props.style,
                    transform: [{ scale: animated }],
                },
            ]}
            onPressIn={() => {
                handlePressIn();
            }}
            onPressOut={() => {
                handlePressOut();
            }}>
            <Animated.View>
                {props.loading ? (
                    <ActivityIndicator color={'white'} />
                ) : (
                    <Row style={{ alignItems: 'center' }}>
                        {props?.icon && (
                            <IonIcons
                                name={props?.icon}
                                color={props?.iconColor || 'white'}
                                size={17}
                                style={{ marginRight: 5 }}
                            />
                        )}
                        <Text
                            style={{
                                color: props?.btnColor || 'white',
                                fontSize: props?.fontSize || 20,
                            }}>
                            {props.title}
                        </Text>
                    </Row>
                )}
            </Animated.View>
        </TouchableOpacity>
    );
}

export function FAB(props) {
    let animated = new Animated.Value(1);

    handlePressIn = () => {
        Animated.spring(animated, {
            toValue: 0.9,
            useNativeDriver: true,
        }).start();
    };

    handlePressOut = () => {
        Animated.spring(animated, {
            toValue: 1,
            friction: 20,
            tension: 30,
            useNativeDriver: true,
        }).start();
    };
    return (
        <TouchableOpacity
            disabled={props.loading}
            activeOpacity={0.8}
            onPressIn={() => {
                handlePressIn();
            }}
            onPressOut={() => {
                handlePressOut();
            }}
            {...props}
            style={[
                style.fab,
                {
                    backgroundColor: props.disabled ? 'grey' : Colors.button,
                    ...props.style,
                    transform: [{ scale: animated }],
                },
            ]}>
            {props.loading ? (
                <ActivityIndicator color={'white'} />
            ) : (
                <IonIcons
                    size={22}
                    color="white"
                    name={props?.icon || 'arrow-forward'}
                />
            )}
        </TouchableOpacity>
    );
}

export function IconlyFAB(props) {
    const [animated] = useState(new Animated.Value(1));

    const handlePressIn = () => {
        Animated.spring(animated, {
            toValue: 0.9,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(animated, {
            toValue: 1,
            friction: 20,
            tension: 30,
            useNativeDriver: true,
        }).start();
    };
    return (
        <TouchableOpacity
            disabled={props.loading}
            activeOpacity={0.8}
            onPressIn={() => {
                handlePressIn();
            }}
            onPressOut={() => {
                handlePressOut();
            }}
            {...props}
            style={[
                style.fab,
                {
                    backgroundColor: props.disabled ? 'grey' : COLORS.green,
                    ...props.style,
                    transform: [{ scale: animated }],
                },
            ]}>
            {props.loading ? (
                <ActivityIndicator color={'white'} />
            ) : (
                <Iconly size={18} color="white" name={props.name} />
            )}
        </TouchableOpacity>
    );
}

export function SecondaryButton(props) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            {...props}
            style={[style.secondary, { ...props.style }]}>
            {props.loading ? (
                <ActivityIndicator color={Colors.primaryColor} />
            ) : (
                <Text
                    style={{
                        color: props?.btnColor || 'black',
                        fontSize: props?.fontSize || 15,
                    }}>
                    {props.title}
                </Text>
            )}
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    button: {
        backgroundColor: Colors.button,
        padding: 13,
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        paddingVertical: 15,
    },
    fab: {
        backgroundColor: Colors.button,
        width: 50,
        height: 50,
        position: 'absolute',
        right: 0,
        bottom: 0,
        margin: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    secondary: {
        borderWidth: 1,
        borderColor: "green",
        padding: 13,
        marginVertical: 15,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
});
