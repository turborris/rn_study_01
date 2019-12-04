import React, { Component } from 'react'
import { StyleSheet, Text, View, Animated, Button } from 'react-native';
import PropTypes from 'prop-types'

export default class RNAnimations extends Component {
    static navigationOptions = {
        title: 'RNAnima'
    }

    marginTop = new Animated.Value(20)

    animate = () => {
        this.marginTop.setValue(20)
        Animated.timing(
            this.marginTop,
            {
                toValue: 300,
                duration: 500
            }
        ).start();
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title='Go' onPress={ this.animate }></Button>
                <Animated.View style={[styles.box, { marginTop: this.marginTop }]} />
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
    box: {
        width: 150,
        height: 150,
        backgroundColor: 'blue'
    }
})