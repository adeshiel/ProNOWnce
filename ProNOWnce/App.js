import React from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    Button,
    Alert
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Word from './Word';
import Directions from './app/components/Buttons/Directions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'blue',
        fontSize: 50,
        bottom: '20%',
        fontStyle: 'italic',
        fontWeight: 'bold',
        // textDecorationLine: 'underline',
        fontFamily: 'Roboto'
    },

    buttons: {
        flexDirection: 'column',
        width: 200,
        // alignItems: 'center', justifyContent: 'space-around'
    },

    btn: {
        marginBottom: 40
    },
    img: {
        flex: 1,
        width: null,
        height: null,
        position: 'absolute',
        width: '100%',
        justifyContent: 'center',
        height: '100%',
        alignItems: 'center'
    },

    whiteBackground: {
        position: 'relative',
        bottom: '20%',
        backgroundColor: '#FFFFFF',
        padding: 0.5
    }
});

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome'
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image source={require('./img/speech.png')} style={styles.img}>
                    {this.props.children}
                </Image>
                <View style={styles.whiteBackground}>
                    <Text style={styles.title}>proNOWnce</Text>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.btn}>
                        <Button onPress={() => navigate('Word')} title="Begin"/>
                    </View>
                    <View style={styles.btn}>
                        <Button onPress={() => navigate('About')} title="What's this?"/>
                    </View>

                </View>

            </View>
        );
    }
}

const App = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    Word: {
        screen: Word
    }, About: {
        screen: Directions
    }
})

export default App;
