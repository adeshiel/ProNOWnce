import React from 'react';
import { AppRegistry,StyleSheet, Text, View } from 'react-native';


// function randoWord {
//   var words = ["word", "curse", "jagged"];
//   var chose = words[Math.floor(Math.random()*words.length)];
//   return chose;
//   }

export default class App extends React.Component {

  randoWord(){ //for when we have the words to pronounce
    var words = ["word", "curse", "jagged"]; //TODO: Change the list to format to [[word1, sfx1,sfx2],[word2, sfx1,sfx2]]
    var chose = words[Math.floor(Math.random()*words.length)];
    return chose;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.randoWord()}</Text>
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
