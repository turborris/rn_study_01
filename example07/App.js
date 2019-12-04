import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GlobalNav from './component/index'

export default class App extends Component {
  render() {
    return (
      <GlobalNav></GlobalNav>
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
