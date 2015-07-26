/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');

var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS
} = React;

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class Yo extends React.Component {
  render() {
    return(
      <Text style={styles.text}>Yooo! :D</Text>
    )
  }
}

class ProperyFinder extends React.Component {
  render() {
    return(
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'PropFinder',
          component: SearchPage
        }} />
    );
  }
}

AppRegistry.registerComponent('ProperyFinder', () => ProperyFinder );
