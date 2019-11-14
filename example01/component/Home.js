import React, { Component } from 'react'
import { Text, View } from 'react-native';

class Home extends Component {
   
    render() {
        return <View>
            <Header />
            <Main />
            <Footer />
        </View>
    }

}

const Header = _ = (
    <View>
        <Text>
            HEADER
        </Text>
    </View>
)

const Main = _ = (
    <View>
        <Text>Main</Text>
    </View>
)

const Footer = _ = (
    <View>
        <Text>Footer</Text>
    </View>
)


export default Home