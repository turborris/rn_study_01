import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Todo from './Todo'

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
    todos = todos.map((todo, i) => {
        return (
            <Todo 
                key={todo.todoIndex}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
                 />
        )
    })

    return (
        <View>
            {todos}
        </View>
    )
}

export default TodoList
