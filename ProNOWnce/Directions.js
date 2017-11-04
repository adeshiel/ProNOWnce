import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

export default class Directions extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Pick one of these options.</Text>
                <View style={styles.buttons}>
                    <View style={styles.leftColumn}>
                        <View style={styles.btn}>
                            <Button
                                onPress={() => {
                                Alert.alert('Right Answer.')
                            }}
                                title="Option 1"/>
                        </View>
                        <View style={styles.btn}>
                            <Button
                                onPress={() => {
                                Alert.alert('Wrong Answer.')
                            }}
                                title="Option 2"/>
                        </View>
                    </View>
                    <View style={styles.rightColumn}>
                        <View style={styles.btn}>
                            <Button
                                onPress={() => {
                                Alert.alert('Wrong Answer.')
                            }}
                                title="Option 3"/>
                        </View>
                        <View style={styles.btn}>
                            <Button
                                onPress={() => {
                                Alert.alert('Wrong Answer.')
                            }}
                                title="Option 4"/>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    myView:{

    },
});

AppRegistry.registerComponent('Directions', ()=> Directions);