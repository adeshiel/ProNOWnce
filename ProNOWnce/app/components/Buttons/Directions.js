import React from 'react';
import {Image, Linking, Dimensions, AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class Directions extends React.Component {
    render() {
        return (
             <View style={styles.container}>
        <Image source={
          require('../../../img/directions.png')}
            style={styles.img}
            >
          {this.props.children}
          <View
            style={styles.borderedText}>
          <Text 
            onPress={() => {
                Linking.openURL('https://github.com/adeshiel/ProNOWnce/blob/master/README.md')
                }}
            style={styles.directiontxt}
          >
              Click here for Directions!
            </Text>
        </View>
        </Image> 
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
    img:{
        flex: 1,
        width: null,
        height: null,
        position:'absolute',
        width:'100%',
        justifyContent: 'center',
        height:'100%',
        alignItems:'center',
    },
    directiontxt:{
        fontWeight:'bold',
        color:'#000000',
        fontSize:30,
    },
    borderedText:{
        padding:20,
        borderWidth:3,
        borderColor:'#000000'
    },
});
