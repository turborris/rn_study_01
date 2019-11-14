import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import Heading from './component/Heading'
import Input from './component/Input'
import Button from './component/Button'

let todoIndex = 0;

export default class App extends Component {
  state = {
    inputValues: '',
    todos: [],
    type: 'All'
  }

  inputChange(inputValue) {
    console.log(' Input Value: ', inputValue);
    this.setState({ inputValues: inputValue });
  }

  submitTodo() {
    console.log(this.state);
    if(this.state.inputValues.match(/^\s*$/)) {
      return;
    }

    const todo = {
      title: this.state.inputValues,
      todoIndex,
      complete: false
    }

    todoIndex++;
    const todos = [...this.state.todos, todo];
    this.setState({todos: todos}, () => {
      console.log('State: ', this.state);
    });
  }

  render() {
    const { inputValue } = this.state;

    return (
      <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps='always'
        style={styles.content}>
        <Heading></Heading>
        <Input 
          inputValue={ inputValue }
          inputChange={ (text) => this.inputChange(text) }
        ></Input>
        <Button submitTodo={() => this.submitTodo()}></Button>
      </ScrollView>
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
  content: {
    flex: 1,
    paddingTop: 60
  }
});
