import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Appbar, Button, TextInput, Snackbar } from 'react-native-paper';
import { connect } from "react-redux";
import { signup } from "../store/action/auth";

class Signup extends React.Component {
    static navigationOptions = {
        header: null
    }
    state = {
        name: '',
        email: '',
        psw: '',
        visible: false,
    };

    _goBack = () => this.props.navigation.navigate('Signin');

    Signup() {
        if (this.state.name !== '' || this.state.email !== '' || this.state.psw !== '') {
            this.props.Register(this.state.name, this.state.email, this.state.psw, this.props.navigation)
        }
        else {
            this.setState({ visible: true })
        }
    }

    render() {
        const { visible } = this.state;
        return (
            <View>
                <Appbar.Header>
                    <Appbar.BackAction onPress={this._goBack} />
                    <Appbar.Content title="Signup" subtitle="Create an account" />
                    <Appbar.Action icon="more-vert" />
                </Appbar.Header>

                <KeyboardAvoidingView behavior="padding" enabled>
                    <View style={styles.inputxt}>
                        <TextInput label='Type Name' style={styles.inpt} value={this.state.name} onChangeText={name => this.setState({ name })} />
                        <TextInput label='Type Email' style={styles.inpt} value={this.state.email} onChangeText={email => this.setState({ email })} keyboardType="email-address" />
                        <TextInput label='Set Pin' style={styles.inpt} value={this.state.psw} onChangeText={psw => this.setState({ psw })} keyboardType="phone-pad" />
                    </View>
                </KeyboardAvoidingView>

                <Button loading={this.props.loader} icon='send' style={{ margin: 20, marginTop: 25 }} mode="contained" onPress={this.Signup.bind(this)}> Signup </Button>

                <View style={styles.go}>
                    <Text style={styles.gotxt}>Already have an account? </Text>
                    <TouchableOpacity onPress={this._goBack.bind(this)}><Text style={styles.going}>Login here</Text></TouchableOpacity>
                </View>

                <Snackbar visible={this.state.visible} onDismiss={() => this.setState({ visible: false })}
                    action={{ label: 'Ok', onPress: () => { }, }}> Invalid Input Fields. </Snackbar>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputxt: {
        marginTop: 70,
        padding: 20,
    },
    inpt: {
        marginTop: 10,
        backgroundColor: 'transparent',
    },
    go: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
    gotxt: {
        fontSize: 17,

    },
    going: {
        color: '#038cfc',
        fontSize: 17,

    }
});


function mapStateToProps(state) {
    return ({
        loader: state.basicInfo.loader,
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        Register: (name, email, psw, navigation) => {
            dispatch(signup(name, email, psw, navigation))
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)