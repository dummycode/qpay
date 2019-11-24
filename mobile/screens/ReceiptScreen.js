import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
} from 'react-native'

import PdfView from '../components/PdfView'

export default class ReceiptScreen extends React.Component {
  state = {
    source: {
      uri: 'https://henryharr.is/projects/qpay/Receipt.pdf',
      cache: true,
    },
    tip: '',
  }
  async componentDidMount() {
    // Get receipt data
    console.log('Receipt screen loaded')
  }

  handleChange(text, data) {
    this.setState({ [text]: data })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Your Receipt</Text>
        <PdfView source={this.state.source}></PdfView>
        <View style={styles.paymentContainer}>
          <TextInput
            autoCapitalize="none"
            placeholder="Tip"
            placeholderColor="#c4c3cb"
            onChangeText={(text) => this.handleChange('tip', text)}
            value={this.state.tip}
            style={styles.tipInput}
            keyboardType="numeric"
          />
          <Button
            buttonStyle={styles.payButton}
            onPress={this.handleSubmit}
            title="Pay"
          />
        </View>
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
    textAlign: 'center',
  },
  paymentContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 24,
    textAlign: 'center',
  },
  tipInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  payButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    padding: '10',
  },
})
