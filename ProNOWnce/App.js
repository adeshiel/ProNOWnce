import React from 'react';
import {StackNavigator} from 'react-navigation';
import {StyleSheet, Text, View, Button} from 'react-native';
import Word from './Word';




class Home extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
      };
      render() {
        const { navigate } = this.props.navigation;
        return (
          <Button
            title="Go to JoJo's profile"
            onPress={() =>
              navigate('Profile', { name: 'Jane' })
            }
          />
        );
      }
}

const App = StackNavigator({
    Home: { screen: Home },
    Profile: { screen: Word },
  });


export default App;