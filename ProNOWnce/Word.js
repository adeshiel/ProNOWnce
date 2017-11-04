import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import {default as Sound} from 'react-native-sound';


//Replace whoosh with the link from APi
// var whoosh = new Sound('http://72.19.107.126:5000/pron/arroyo-a', Sound.MAIN_BUNDLE, (error) => {
//   if (error) {
//     console.log('failed to load the sound', error);
//     return;
//   }
//   // loaded successfully
//   console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
// });

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
            correctChoice: "",
            streak: 0
        }
    
    }
    _onHideUnderlay(){
        this.setState({ pressStatus: false });
      }
    _onShowUnderlay(){
    this.setState({ pressStatus: true });
    }

    async getWords() {
        try {
            let res = await fetch(`${ENDPOINT}`);
            let resJSON = await res.json();
            let prons = resJSON
                .pron
                .map((value, index) => `${ENDPOINT_PRON}/${value}`);

            this.setState({word: resJSON.word, pron: prons, correctChoice: resJSON.correct + 1});

            console.log(this.state);

            return resJSON.word;
        } catch (error) {
            console.log(error);
        }
    }

    choose(ix) {
        console.log(ix);
        this.playSound(this.state.pron[ix-1]);
        this.setState(() => {
            return { currentChoice: ix };
        });
    }
    
    isCorrect(ix) {
        if (this.state.currentChoice === this.state.correctChoice) {
            this.setState(() => {
                return {streak: this.state.streak + 1};
            });
            this.getWords();
        }
        else {
            this.setState(() => {
                return {streak: this.state.streak - 1};
            });
            Alert.alert(`Right Answer is ${this.state.correctChoice}`);
            this.playSound(this.state.pron[this.state.correctChoice-1]);
            this.getWords();
        }
    }

    playSound(url) {
        // ReactNativeAudioStreaming.play("http://72.19.107.126:5000/pron/squander",
        // {showIniOSMediaCenter: true, showInAndroidNotifications: true}); Load the
        // sound file 'whoosh.mp3' from the app bundle See notes below about preloading
        // sounds within initialization code below.
        console.log(url);

        var whoosh = new Sound(url, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            // loaded successfully
            console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

            // Play the sound with an onEnd callback
            whoosh.play((success) => {
                if (success) {
                    console.log('successfully finished playing');
                } else {
                    console.log('playback failed due to audio decoding errors');
                    // reset the player to its uninitialized state (android only) this is the only
                    // option to recover after an error occured and use the player again
                    whoosh.reset();
                }
            });
        });

    }

    componentDidMount() {
        this.getWords();
    }

    // randomWord(){ //for when we have the words to pronounce   var words =
    // ["word", "curse", "jagged"]; //TODO: Change the list to format to [[word1,
    // sfx1,sfx2],[word2, sfx1,sfx2]] var chose =
    // words[Math.floor(Math.random()*words.length)]; return chose; }
    render() {
        function checkCorrect() {

        }
        var buttonColor = 'blue'
        return (
            <View style={styles.container}>
                <View style={{
                    top: -65
                }}>
                    <Text
                        style={{
                            fontSize: 20,
                            textAlign: 'center'
                        }}>Score: {this.state.streak}</Text>
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
                            this.isCorrect()
                        }} />
                </View>
            </View>
        );
    }
}
