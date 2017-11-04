import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ENDPOINT = "http://72.19.107.126:5000/word";


// function randoWord {
//   var words = ["word", "curse", "jagged"];
//   var chose = words[Math.floor(Math.random()*words.length)];
//   return chose;
//   }

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

            this.setState({
                word: resJSON.word
            });
            return resJSON.word;
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getWords();
    }

    // randomWord(){ //for when we have the words to pronounce
    //   var words = ["word", "curse", "jagged"]; //TODO: Change the list to format to [[word1, sfx1,sfx2],[word2,
    // sfx1,sfx2]] var chose = words[Math.floor(Math.random()*words.length)]; return chose; }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.word}</Text>
                <Text>More work needed to be done here!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
