import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

export default class Word extends React.Component {
    showDirections() {
        console.log('hello')
    }
    render() {
        return (
            <View style={styles.myView}>
             <Button
                onPress={this.showDirections}
                title="Directions"/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    myView:{

    },
});

AppRegistry.registerComponent('Directions', ()=> Directions);