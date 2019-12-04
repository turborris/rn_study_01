import React, { Component } from 'react'
import { StyleSheet, Text, View, Animated, Button, Easing,  } from 'react-native';
import PropTypes from 'prop-types'

export default class ROAnimations extends Component {
    static navigationOptions = {
        title: 'ROAnim'
    }

    state = {
        isLoading: true
    }

    componentDidMount() {
        this.animate()
        setTimeout(() => this.setState({ isLoading: false }), 2000)
    }

    animatedRotated = new Animated.Value(0)

    animate = () => {
        Animated.loop(
            Animated.timing(
                this.animatedRotated,
                {
                    toValue: 1,
                    duration: 1800,
                    easing: Easing.linear
                }
            )
        ).start()
    }

    render() {
        const rotation = this.animatedRotated.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        const { isLoading } = this.state;

        return (
            <View style={styles.container}>
                {
                    isLoading ? (
                        <Animated.Image
                            source={require('../../assets/loading_icon.png')}
                            style={{ width: 40, height: 40, transform: [{ rotate: rotation }]}} />
                    ) : (
                        <Text>CommonYo</Text>
                    )
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: 'blue'
    }
})