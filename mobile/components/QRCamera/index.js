import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Camera } from 'expo-camera'

import * as Permissions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner'

export default class QRCamera extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    qrScanned: false,
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  _handleBarcodeScanned(event) {
    const { type, data } = event
    if (
      !this.state.qrScanned &&
      type === BarCodeScanner.Constants.BarCodeType.qr
    ) {
      this.setState({ qrScanned: true })
      this.props.onQrSuccess(data)
    }
  }

  render() {
    const { hasCameraPermission } = this.state

    if (hasCameraPermission === null) {
      return <View />
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>
    } else {
      return (
        <Camera
          style={styles.camera}
          type={this.state.type}
          onBarCodeScanned={(event) => this._handleBarcodeScanned(event)}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                this.setState({
                  type:
                    this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                })
              }}
            >
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                {' '}
                Flip{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      )
    }
  }
}

const styles = StyleSheet.create({
  camera: {
    alignItems: 'center',
    height: 300,
    width: 300,
  },
})
