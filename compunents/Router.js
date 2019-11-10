import React from 'react';
import { View, StatusBar, ActivityIndicator, AsyncStorage, StyleSheet } from 'react-native'
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from "react-native-vector-icons/Ionicons";
import Signup from "./Signup";
import Signin from "./Signin";
import Home from "./Home";
import Camera from "./Camera";
import Gallary from "./Gallary";

const AppNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: "Home",
                tabBarIcon: ({tintColor}) => (
                    <Icon name="ios-home" color={tintColor} size={24} />
                )
            }
        },
        camera: {
            screen: Camera,
            navigationOptions: {
                tabBarLabel: "Camera",
                tabBarIcon: ({tintColor}) => (
                    <Icon name="ios-camera" color={tintColor} size={24} />
                )
            }
        },
        Gallary: {
            screen: Gallary,
            navigationOptions: {
                tabBarLabel: "Gallary",
                tabBarIcon: ({tintColor}) => (
                    <Icon name="ios-image" color={tintColor} size={24} />
                )
            }
        },
    },
    {
        initialRouteName: "Home",
        order: ["Home", "camera", "Gallary"],
        navigationOptions: {
            tabBarVisible: true,
        },
        tabBarOptions: {
            activeTintColor: "#038cfc",
            inactiveTintColor:"gray",
        }
    }
);

const AuthNavigator = createStackNavigator({
    Signup, Signin
},
    { initialRouteName: "Signup" });

class AuthLoading extends React.Component {

    constructor() {
        super();
        this.loadData();
    }

    loadData = async () => {
        const value = await AsyncStorage.getItem('uid');
        this.props.navigation.navigate(value !== null ? 'App' : 'Auth');
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default createAppContainer(createSwitchNavigator(
    {
        App: AppNavigator,
        Auth: AuthNavigator,
        AuthLoad: AuthLoading
    },
    {
        initialRouteName: "AuthLoad"
    }
))
