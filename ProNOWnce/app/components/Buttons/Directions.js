import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

class Directions extends React.Component {
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
        width: 100,
    },
});

AppRegistry.registerComponent('Directions', ()=> Directions);
