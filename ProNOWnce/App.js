import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
=======
import {StackNavigator} from 'react-navigation';
import {StyleSheet, Text, View, Button} from 'react-native';
import Word from './Word';
>>>>>>> bbdc5c00dac97bd9ada6cfdf35d75b252032a965


<<<<<<< HEAD
export default class App extends React.Component {
=======

>>>>>>> bbdc5c00dac97bd9ada6cfdf35d75b252032a965

class Home extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
      };
      render() {
        const { navigate } = this.props.navigation;
        return (
<<<<<<< HEAD
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.word}</Text>
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
=======
          <Button
            title="Go to Jane's profile"
            onPress={() =>
              navigate('Profile', { name: 'Jane' })
            }
          />
>>>>>>> bbdc5c00dac97bd9ada6cfdf35d75b252032a965
        );
      }
}

<<<<<<< HEAD
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        // paddingLeft: '5'
    },
    buttons: {
        flexDirection: 'row',
        // alignItems: 'center', justifyContent: 'space-around'
    },
    leftColumn: {
        flexDirection: 'column',
        margin: 20
    },
    rightColumn: {
        flexDirection: 'column',
        margin: 20
    },
    btn: {
        margin: 40,
    }
});
=======
const App = StackNavigator({
    Home: { screen: Home },
    Profile: { screen: Word },
  });


export default App;
>>>>>>> bbdc5c00dac97bd9ada6cfdf35d75b252032a965
