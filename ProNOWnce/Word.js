import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const ENDPOINT_WORD = "http://72.19.107.126:5000/word";
const ENDPOINT_PRON = "http://72.19.107.126:5000/pron";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        flexDirection: 'row',
        top: -50
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
        margin: 30,
        width: 100
    },
    word: {
        fontSize: 40,
        margin: 10
    },
    choicebuttons: {
        marginLeft: 30,
        marginRight: 30
    }
});

export default class Word extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            word: "",
            prons: [],
            currentChoice: "",
            isCorrect: false,
            streak: 0,
        }
    }

    async getWords() {
        try {
            let res = await fetch(`${ENDPOINT_WORD}`);
            let resJSON = await res.json();

            return resJSON.word;
        } catch (error) {
            console.log(error);
        }
    }

    choose(ix) {
        console.log(ix);
        this.setState(() => {
            return { currentChoice: ix };
        });
    }

    checkCorrect(ix) {
        if (ix == 'correct') {
            
            this.setState(() => {
                return { isCorrect: true};
            });
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
                <View style={{
                    top: -65
                }}>
                    <Text
                        style={{
                            fontSize: 20,
                            textAlign: 'center'
                        }}>Score: 4</Text>
                </View>
                <View style={{
                    top: -65
                }}>
                    <Text style={styles.word}>{this.state.word}</Text>
                </View>
                <View style={{
                    top: -45
                }}>
                    <Text
                        style={{
                            fontStyle: 'italic'
                        }}>Choose the correct pronunciation.</Text>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.leftColumn}>
                        <View style={styles.btn}>
                            <Button
                                onPress={() => {
                                    this.choose(1);
                                }}
                                title="Choice 1" />
                        </View>
                        <View style={styles.btn}>
                            <Button
                                onPress={() => {
                                    this.choose(2);
                                }}
                                title="Choice 2" />
                        </View>
                    </View>
                    <View style={styles.rightColumn}>
                        <View style={styles.btn}>
                            <Button
                                onPress={() => {
                                    this.choose(3);
                                }}
                                title="Choice 3" />
                        </View>
                        <View style={styles.btn}>
                            <Button
                                onPress={() => {
                                    this.choose(4);
                                }}
                                title="Choice 4" />
                        </View>
                    </View>
                </View>
                <View>
                    <Text
                        style={{
                            fontSize: 20,
                            textAlign: 'center',
                            top: -20
                        }}>Current choice: {this.state.currentChoice}</Text>
                </View>
                <View
                    style={{
                        width: 100,
                        top: -10
                    }}>
                    <Button
                        title='Submit'
                        onPress={() => {
                            this.checkCorrect(this.state.currentChoice)
                        }} />
                </View>
            </View>
        );
    }
}
