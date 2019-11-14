import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MyComponent extends Component {
  state = {
    book: "Book is Great!",
    leapYear: true,
    info: {
      type: 'programing'
    }
  }

  updateBook() {
    console.log("D")
    this.setState({
      book: 'Flutter in Action!!'
    })
  }

  render() {
    const { book } = this.state;
    return (
      <BookDisplay 
        book={ book } 
        updateBook={ () => this.updateBook() } 
        leapYear={ this.state.leapYear }
        info={ this.state.info }
        topics={['React', 'React Native', 'Javascript']}
      />
    )
  }
}

const BookDisplay = (props) => {
  let { book, updateBook, leapYear, info, topics } = props;

  if(leapYear) {
    leapYear = <Text>This is a leafYear!</Text>
  }

  topics = topics.map((topic, i) => {
      return <Text key={i}>{ topic }</Text>
  });

  return(
    <View>
      { leapYear }
      <Text onPress={updateBook}>Book name : { book }</Text>
      <Text>Book type: { info.type }</Text>
      { topics }
    </View>
  )
}

// class BookDisplay extends Component {
//   render() {
//     const { updateBook, book } = this.props;
//     return(
//       <View>
//         <Text onPress={ this.props.updateBook }>{ this.props.book }</Text>
//       </View>
//     )
//   }
// }



