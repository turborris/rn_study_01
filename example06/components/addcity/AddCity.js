import React, { Component } from 'react'
import { StyleSheet, Text, View, Platform, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'
import uuidV4 from 'uuid/v4'

import { colors } from '../../theme'

class AddCity extends Component {
    state = {
        city: '',
        country: ''
    }
    
    static propTypes = {
    }

    onChangeText = (key, value) => {
        this.setState({[key] : value})
    }

    submit = () => {
        if(this.state.city === '' || this.state.country === '') {
            alert('city 및 country를 꼭 입력해주세요.');
            return;
        }

        const city = {
            city: this.state.city,
            country: this.state.country,
            id: uuidV4(),
            locations: []
        }

        this.props.screenProps.addCity(city);

        this.setState({
            city: '',
            country: ''
        },() => {
            this.props.navigation.navigate('Cities');
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Cities</Text>
                <TextInput
                    placeholder='City Name'
                    onChangeText={val => this.onChangeText('city', val)}
                    style={styles.input}
                    value={this.state.city}
                ></TextInput>
                <TextInput
                    placeholder='Country Name'
                    onChangeText={val => this.onChangeText('country', val)}
                    style={styles.input}
                    value={this.state.country}
                ></TextInput>
                <TouchableOpacity onPress={this.submit}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add City</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1
    },
    button: {
        height: 50,
        backgroundColor: '#666',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
    heading: {
        color: 'white',
        fontSize: 40,
        marginBottom: 10,
        alignSelf: 'center'
    },
    input: {
        margin: 10,
        backgroundColor: 'white',
        paddingHorizontal: 8,
        height: 50
    }
    
});

export default AddCity
