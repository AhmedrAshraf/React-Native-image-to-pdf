import React from 'react';
import { Text, View, Dimensions, StyleSheet, AsyncStorage, TouchableOpacity, Image } from 'react-native'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class MenuDrawer extends React.Component {

    _remove = async () => {
        await AsyncStorage.removeItem('uid')
        this.props.navigation.navigate('Signup')
    }

    _switch = async () => {
        await AsyncStorage.removeItem('uid')
        this.props.navigation.navigate('Signin')
    }

    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.buttomLinks}>
                        <TouchableOpacity style={{ height: 50, fontWeight: 'bold', backgroundColor: 'lightblue' }}>
                        <Text style={styles.link}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 50 }} onPress={this._remove.bind(this)}>
                            <Text style={styles.link}>Logout</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 50 }} onPress={this._switch.bind(this)}>
                            <Text style={styles.link}>Switch Account</Text>
                        </TouchableOpacity>
                    </View>
                <View style={styles.footer}>
                    <Text style={styles.discription}>Todo-List`s</Text>
                    <Text style={styles.version}>v1.0</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttomLinks: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 450,
        paddingTop: 20,
    },
    homelink: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: "left",
        fontWeight: 'bold',
    },
    link: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: "left",
    },
    footer: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
    },
    discription: {
        flex: 1,
        marginLeft: 20,
        fontSize: 16,
    },
    version: {
        flex: 1,
        textAlign: 'right',
        marginRight: 20,
        color: 'gray',
    },
});

