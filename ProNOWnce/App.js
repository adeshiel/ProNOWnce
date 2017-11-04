import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const ENDPOINT = "http://72.19.107.126:5000/word";

export default class App extends React.Component {

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

            this.setState({word: resJSON.word});
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
                <Text style={styles.title}>{this.state.word}</Text>
                <View style={styles.buttons}>
                    <View style={styles.leftColumn}>
                        <Button
                            onPress={() => { Alert.alert('Right Answer.') }} //
                            title="Option 1"
                        />
                        <Button
                            onPress={() => { Alert.alert('Wrong Answer.') }}
                            title="Option 2"
                        />
                        {/* </View> */}
                        <View style={styles.rightColumn}>
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
