import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

const Input = ({ inputValue, inputChange }) => (
    <View style={styles.inputContainer}>
        <TextInput style={styles.input}
            value={inputValue}
            placeholder='What needs to be done?'
            placeholderTextColor='#CACACA'
            selectionColor='#666666'
            onChangeText={inputChange}></TextInput>
    </View>
)

const styles = StyleSheet.create({
    inputContainer: {
        marginLeft: 20,
        marginRight: 20,
    },
    input: {
        height: 60,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10,
        elevation: 5
    }
})

export default Input;