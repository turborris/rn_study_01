import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class UsageStateComponent extends Component {
  state = {
    year: 2019,
    leapYear: true,
    topics: ['React', 'React Native', 'Flutter'],
    info: {
      paperback: true,
      length: '335 pages',
      type: 'programming'
    },
    name: 'Borris Cho',
    colors: ['Blue'],
    leapYear: true,
  }

  updateYear() {
    this.setState({
      year: this.state.year + 3
    })
  }

  render() {
    let leapyear = <Text>This is not a leapyear!</Text>
    if(this.state.leapYear) {
      leapyear = <Text>This is a leapYear!</Text>
    }

    return (
      <View style={styles.container}>
        <Text>My name is {this.state.name}</Text>
        <Text onPress={() => this.updateYear()}>My year is {this.state.year}</Text>
        <Text>My color is {this.state.colors[0]}</Text>
        <Text>{this.state.year}</Text>
        <Text>{this.state.info.length}</Text>
        <Text>{leapyear}</Text>
      </View>
    )
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

