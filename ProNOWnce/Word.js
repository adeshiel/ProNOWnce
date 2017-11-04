import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Directions from './app/components/Buttons/Directions'

const ENDPOINT = "http://72.19.107.126:5000/word"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        flexDirection: 'row',
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
        margin: 40
    },
    word: {
        fontSize: 40,
        margin: 10
    },
    scoreBoard: {
        top: -175,
        width: 100,
        height: 30,
    }
});

export default class Word extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            word: ""
        }
    }

    async getWords() {
        try {
            let res = await fetch(`${ENDPOINT}`);
            let resJSON = await res.json();
            

            this.setState({ word: resJSON.word });
            return resJSON.word;
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getWords();
    }

    // randomWord(){ //for when we have the words to pronounce   var words =
    // ["word", "curse", "jagged"]; //TODO: Change the list to format to [[word1,
    // sfx1,sfx2],[word2, sfx1,sfx2]] var chose =
    // words[Math.floor(Math.random()*words.length)]; return chose; }

    render() {
        return (
            <View style={styles.container}>
                <View style={{top: -150}}>
                    <Text>Score: 4</Text>
                </View>
                <View style={{top: -100}}>
                    <Text style={styles.word}>{this.state.word}</Text>
                </View>
                <View>
                    <Text>Choose the correct pronunciation.</Text>
                </View>
                <View><Directions/></View>
                <View style={styles.buttons}>
                    <View style={styles.leftColumn}>
                        <View style={styles.btn}>
                            <Button
                                onPress={() => {
                                    Alert.alert('Right Answer.')
                                }}
                                title="Omae" />
                        </View>
                        <View style={styles.btn}>
                            <Button
                                onPress={() => {
                                    Alert.alert('Wrong Answer.')
                                }}
                                title="Wa" />
                        </View>
                    </View>
                    <View style={styles.rightColumn}>
                        <View style={styles.btn}>
                            <Button
                                onPress={() => {
                                    Alert.alert('Wrong Answer.')
                                }}
                                title="Mo" />
                        </View>
                        <View style={styles.btn}>
                            <Button
                                onPress={() => {
                                    Alert.alert('Wrong Answer.')
                                }}
                                title="Shin" />
                        </View>

                    </View>
                </View>
                <View>
                    <Button style={{width: 50}}
                        title='Submit'
                        onPress={() => {
                            Alert.alert('Please wait for submission functionality.')
                        }} />
                </View>
            </View>
        );
    }
}
