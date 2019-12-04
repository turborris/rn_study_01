import React, { Component } from 'react'
import { StyleSheet, Text, View, Animated, Button, Easing } from 'react-native';
import PropTypes from 'prop-types'

export default class STGAnimations extends Component {
    static navigationOptions = {
        title: 'STGAnim'
    }

    constructor() {
        super()
        this.animatedValues = []
        for(let i = 0; i < 1000; i++) {
            this.animatedValues[i] = new Animated.Value(0)
        }

        this.animations = this.animatedValues.map(v => {
            return Animated.timing(
                v, {
                    toValue: 1,
                    duration: 6000
                }
            )
        })
    }
    
    componentDidMount() {
        this.animate()
    }

    animate = () => {
        Animated.stagger(15, this.animations).start()
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.animatedValues.map((v, idx) => (
                        <Animated.View key={idx} style={[{opacity: v}, styles.box]}></Animated.View>
                    ))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    box: {
        width: 15,
        height: 15,
        margin: .5,
        backgroundColor: 'red'
    }
})