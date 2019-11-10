import React from 'react';
import { StyleSheet, View, Text, AsyncStorage, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Appbar, Button, TextInput, Snackbar } from 'react-native-paper';
import { connect } from "react-redux";
import { signin } from "../store/action/auth";

class Signin extends React.Component {
    static navigationOptions = {
        header: null
    }
    state = {
        email: '',
        psw: '',
        visible: false,
    };

    _goBack = () => this.props.navigation.navigate('Signup');

    Signin() {
        if (this.state.email !== '' || this.state.psw !== '' ) {
            this.props.Login(this.state.email, this.state.psw, this.props.navigation)
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
                    <Appbar.Content title="Login" subtitle="Type Your Email & Password" />
                    <Appbar.Action icon="more-vert" />
                </Appbar.Header>

                <KeyboardAvoidingView behavior="padding" enabled>
                    <View style={styles.inputxt}>
                        <TextInput label='Enter Your Email' style={styles.inpt} value={this.state.email} onChangeText={email => this.setState({ email })} keyboardType="email-address" />
                        <TextInput label='Enter Pin' style={styles.inpt} value={this.state.psw} onChangeText={psw => this.setState({ psw })} keyboardType="phone-pad" />
                    </View>
                </KeyboardAvoidingView>

                <Button loading={this.props.loader} icon='send' style={{ margin: 20, marginTop: 25 }} mode="contained" onPress={this.Signin.bind(this)}> Login </Button>
              
                <View style={styles.go}>
                    <Text style={styles.gotxt}>Don`t have an account? </Text>
                    <TouchableOpacity onPress={this._goBack.bind(this)}><Text style={styles.going}>Signup here</Text></TouchableOpacity>
                </View>

                <Snackbar visible={this.state.visible} onDismiss={() => this.setState({ visible: false })}
                action={{ label: 'Ok', onPress: () => {},}}> Invalid Input Fields. </Snackbar>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputxt: {
        marginTop: 100,
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
        Login: (email, psw, navigation) => {
            dispatch(signin(email, psw, navigation))
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin)