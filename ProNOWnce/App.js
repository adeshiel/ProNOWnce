import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Word from './Word';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        bottom: '20%',
        fontStyle: 'italic',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontFamily: 'Roboto',
    },

    buttons: {
        flexDirection: 'column',
        width: 200,
        // alignItems: 'center', justifyContent: 'space-around'
    },

    btn: {
        marginBottom: 40
    },
});


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>proNOWnce</Text>
                  <View style={styles.buttons}>
                  <View style={styles.btn}>
                    <Button
                        onPress={() => navigate('Word')}
                        title="Begin"/>
                  </View>
                  <View style={styles.btn}>
                    <Button
                        onPress={() => navigate('About')}
                        title="What's this?"/>
                  </View>

                  </View>

            </View>
        );
    }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Word: { screen: Word },
})

export default App;
