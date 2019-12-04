import React, { Component } from 'react'
import { StyleSheet, Text, View, Animated, Button, Easing,  } from 'react-native';
import PropTypes from 'prop-types'
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class ParAnimations extends Component {
    static navigationOptions = {
        title: 'ROAnim'
    }

    animatedTitle = new Animated.Value(-200);
    animatedSubtitle = new Animated.Value(600);
    animatedButton = new Animated.Value(800);

    componentDidMount() {
        this.animate()
    }

    animate = () => {
        Animated.parallel([
            Animated.timing(
                this.animatedTitle,
                {
                    toValue: 200,
                    duration: 800
                }
            ),
            Animated.timing(
                this.animatedSubtitle,
                {
                    toValue: 0,
                    duration: 1400,
                    delay: 800
                }
            ),
            Animated.timing(
                this.animatedButton,
                {
                    toValue: 0,
                    duration: 1000,
                    delay: 2200
                }
            )
        ]).start()
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.Text style={[styles.title, { marginTop: this.animatedTitle}]}>Snow</Animated.Text>
                <Animated.Text style={[styles.subTitle, { marginLeft: this.animatedSubtitle}]}>Man</Animated.Text>
                <Animated.View style={{ marginTop: this.animatedButton }}>
                    <TouchableHighlight style={styles.button}>
                        <Text>Winter</Text>
                    </TouchableHighlight>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 12
    },
    subTitle: {
        width: '100%',
        textAlign: 'center',
        fontSize: 18,
        opacity: .8
    },
    button: {
        marginTop: 25,
        backgroundColor: '#ddd',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    }
})