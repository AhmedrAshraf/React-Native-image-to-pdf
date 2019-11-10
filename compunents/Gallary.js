import React from 'react';
import { View, } from 'react-native';
import { Appbar} from 'react-native-paper';
import * as ImagePicker from 'expo';

export default class Gallary extends React.Component {
    state = {
        imageUri: '',
        imageName: '',
    }
    static navigationOptions = { header: null }

    componentDidMount = async () => {
        let result = await ImagePicker.launchImageLibraryAsync();
        if (!result.cancelled) {
            let imgLenght = result.uri.lastIndexOf("/");
            var imgName = result.uri.slice(imgLenght);
            this.setState({ imageUri: result.uri, imageName, })
        }
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