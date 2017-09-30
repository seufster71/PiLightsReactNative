import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class PiLights extends Component {

  onPress(param){
    console.log('Clicked' + param);
    this.props.onClick(param)
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
            onPress={this.onPress.bind(this,"blink")}
            style={styles.button}>
            <Text style={styles.buttonText}>Blink</Text>
        </TouchableHighlight>
        <TouchableHighlight
            onPress={this.onPress.bind(this,"on")}
            style={styles.button}>
            <Text style={styles.buttonText}>On</Text>
        </TouchableHighlight>
        <TouchableHighlight
            onPress={this.onPress.bind(this,"off")}
            style={styles.button}>
            <Text style={styles.buttonText}>Off</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
      height: 50,
      backgroundColor: '#48BBEC',
      borderColor: '#48BBEC',
      alignSelf: 'stretch',
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5
  },
  buttonText: {
      color: '#fff',
      fontSize: 24
  }
});

module.exports = PiLights;
