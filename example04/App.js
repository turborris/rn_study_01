import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import getStyleSheet from './styles/styles';

const themes = ['dark', 'light', 'red'];

export default class App extends Component {
  state = {
    themeType: themes[0]
  }

  toggleTheme = () => {
    this.setState({
      themeType: themes[parseInt(Math.random() * 3)]
    });
  }

  render() {
    const styles = getStyleSheet(this.state.themeType);
    const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor;
    
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Button title={backgroundColor} onPress={this.toggleTheme}></Button>
        </View>
      </View>
    )
  }
}