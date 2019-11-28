import React, { Component } from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native';
import PropTypes from 'prop-types'
import { colors } from '../../theme';

class CenterMessage extends Component {
    static propTypes = {
        message: PropTypes.string.isRequired
    }

    render() {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.message}>
                    {this.props.message}
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    emptyContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary
    },
    message: {
        alignSelf: 'center',
        fontSize: 20
    }
})

export default CenterMessage
