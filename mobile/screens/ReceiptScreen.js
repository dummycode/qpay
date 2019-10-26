import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import PdfView from '../components/PdfView'

export default class ReceiptScreen extends React.Component {
  state = {
    source: {
      uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
      cache: false,
    },
  }
  async componentDidMount() {
    // Get receipt data
    console.log('Receipt screen loaded')

    const source = {
      uri: 'https://henryharr.is',
      cache: false,
    }

    this.setState({ source })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Receipt</Text>
        <PdfView source={this.state.source}></PdfView>
      </View>
    )
  }
}

ReceiptScreen.navigationOptions = {
  header: 'Receipt',
}

ReceiptScreen.navigationOptions = {
  title: 'Home',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
})
