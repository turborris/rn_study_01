import React, { Component } from 'react'
import { StyleSheet, Text, View, Animated, Button, TextInput } from 'react-native';
import PropTypes from 'prop-types'

export default class FIAnimations extends Component {
    static navigationOptions = {
        title: 'FIAnim'
    }

    animatedWidth = new Animated.Value(200)

    animate = (val) => {
        Animated.timing(
            this.animatedWidth,
            {
                toValue: val,
                duration: 750
            }
        ).start();
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={{ width: this.animatedWidth }}>
                    <TextInput
                        style={[styles.input]}
                        onBlur={() => this.animate(200)}
                        onFocus={() => this.animate(325)}
                        ref={input => this.input = input}
                        ></TextInput>
                </Animated.View>
                <Button title="Go"
                    onPress={() => this.input.blur()}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 50
    },
    input: {
        height: 50,
        marginHorizontal: 15,
        backgroundColor: '#ededed',
        marginTop: 10,
        paddingHorizontal: 9
    }
})