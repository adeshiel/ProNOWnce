import React from 'react';
import {Linking, Dimensions, AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class Directions extends React.Component {
    render() {
        return (
            <View style={styles.myView}>
             <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('https://github.com/adeshiel/ProNOWnce/blob/master/README.md')}>
                Click Here for Directions!
            </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    myView:{
        paddingLeft:width/3,
        paddingTop: height/3,
    },
});

AppRegistry.registerComponent('Directions', ()=> Directions);
