import React from 'react'
import { StyleSheet, View } from 'react-native'
import { WebView } from 'react-native-webview'

export default class PdfView extends React.Component {
  async componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <WebView source={this.props.source} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  receiptPdf: {
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    paddingTop: 15,
  },
})
