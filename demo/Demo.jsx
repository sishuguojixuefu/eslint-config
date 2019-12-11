import React, { Component } from 'react'
import { Text, View } from 'react-native'
import moduleName from './getDemo'

export class Demo extends Component {
  componentDidMount() {
    console.log('')
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default Demo
