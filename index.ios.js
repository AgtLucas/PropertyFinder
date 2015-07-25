/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text
} = React;

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

class ProperyFinder extends React.Component {
  render() {
    return(
      <Text style={styles.text}>Yooo! :D</Text>
    )
  }
}

AppRegistry.registerComponent('ProperyFinder', () => ProperyFinder );
