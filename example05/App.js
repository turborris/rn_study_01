import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Platform, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'
import update from 'immutability-helper'

const userImage = require('./user.png');
const data = [{
  image: userImage,
  name: 'Henry John',
  occupation: 'singer-songwriter',
  description: 'Henry John Deutschendorf Jr. (December 31, 1943 – October 12, 1997), known professionally as John Denver, was an American singer-songwriter.',
  showThumbnail: true
}];

const ProfileCard = (props) => {
  const { image, name, occupation, description, onPress, showThumbnail } = props;
  let containerStyles = [styles.cardContainer];

  if(showThumbnail) {
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight onPress={onPress}>
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
      </TouchableHighlight>  
  )
}

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired, 
  occupation: PropTypes.string.isRequired, 
  description: PropTypes.string.isRequired, 
  onPress: PropTypes.func.isRequired, 
  showThumbnail: PropTypes.bool.isRequired
};

export default class App extends Component {
  state = {
    data: data
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {[index]: {showThumbnail: {$set: showThumbnail}}})
    });
  }

  render() {
    const list = this.state.data.map(function(item, index) {
      const { image, name, occupation, description, showThumbnail } = item;
      
      return <ProfileCard key={'card-' + index}
        image = {image}
        name = {name}
        occupation = {occupation}
        description = {description}
        onPress = {() => this.handleProfileCardPress(index)}
        showThumbnail = {showThumbnail}>
      </ProfileCard>
    }, this);

    return (
      <View style={styles.container}>
        {list}
      </View>
    )
  }
}

const 매장위치 = [
  {
    "이름": "홍길동",
    "나이": 25,
    "성별": "여",
    "주소": "서울특별시 양천구 목동",
    "특기": ["농구", "도술"],
    "가족관계": {"#": 2, "아버지": "홍판서", "어머니": "춘섬"},
    "회사": "경기 수원시 팔달구 우만동"
 },
 

]

const styles = StyleSheet.create({
  cardThumbnail: {
    transform: [{scale: 0.2}]
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: 'dodgerblue',
    width: 300,
    height: 400,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
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
    marginTop: 30,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
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
