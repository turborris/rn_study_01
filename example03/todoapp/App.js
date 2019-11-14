import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import Heading from './component/Heading'
import Input from './component/Input'
import Button from './component/Button'
import TodoList from './component/TodoList'

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

  toggleComplete = (todoIndex) => {
     let todos = this.state.todos
     todos.forEach((todo) => {
       if(todo.todoIndex === todoIndex) {
         todo.complete = !todo.complete
       }
     })
     this.setState({todos})
  }
  
  deleteTodo = (todoIndex) => {
    console.log('delete:', todoIndex)
    let {todos} = this.state
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
    this.setState({todos})
  }

  render() {
    const { inputValue, todos } = this.state;

    return (
      <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps='always'
        style={styles.content}>
        <Heading></Heading>
        <Input 
          inputValue={ inputValue }
          inputChange={ (text) => this.inputChange(text) }
        ></Input>
        <TodoList 
          todos={todos}
          toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo}></TodoList>
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
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
});
