import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage} source={require('./user.png')}></Image>
          </View>
          <View>
            <Text style={styles.cardName}>
              Henry John
            </Text>
          </View>
          <View style={styles.cardOccupationContainer}>
            <Text style={styles.cardOccupation}>
              singer-songwriter
            </Text>
          </View>
          <View>
            <Text style={styles.cardDescription}>
            Henry John Deutschendorf Jr. (December 31, 1943 – October 12, 1997), known professionally as John Denver, was an American singer-songwriter.
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: 'dodgerblue',
    width: 300,
    height: 400
  },
  cardImageContainer: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  cardImage: {
    width: 60,
    height: 60
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
    textShadowColor: 'black',
    textShadowOffset: {
      height: 2,
      width: 2
    },
    textShadowRadius: 1
  },
  cardOccupationContainer: {
    borderColor: 'black',
  },
  cardOccupation: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontStyle: 'italic',
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10
  }
  
})
