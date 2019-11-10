import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, ScrollView, TouchableOpacity } from 'react-native';
import { Appbar, FAB, Portal, Provider } from 'react-native-paper';
import { connect } from "react-redux";
import { adtodo } from "../store/action/auth";
import { getTodo } from "../store/action/auth";
import { deleting } from "../store/action/auth";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    static navigationOptions = { header: null }

    componentDidMount = async () => {

    }

    render() {
        return (
            <View>
                <Appbar.Header>
                    <Appbar.Content titleStyle={{ left: 50 }} title="PDF Creator" />
                </Appbar.Header>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    fab: {
        marginBottom: 80,
    },
});



function mapStateToProps(state) {
    return ({
        loader: state.basicInfo.loader,
        list: state.basicInfo.list,
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        adTodo: (text) => {
            dispatch(adtodo(text))
        },
        fetchTodo: () => {
            dispatch(getTodo())
        },
        deletetodo: (item) => {
            dispatch(deleting(item))
        },
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)