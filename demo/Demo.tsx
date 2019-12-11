import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import getDemo from './demo'

interface Props {}

class Demo extends Component<Props, any> {
  static defaultProps = {}

  constructor(props: Props) {
    super(props)
    console.log(getDemo('🐂'))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Demo
