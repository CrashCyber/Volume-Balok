import React, { Component } from 'react';
import {
  AppRegistry,
  //StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class VolumeBalok extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panjang: 0,
      tinggi: 0,
      volume: 0,
      lebar: 0,
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFEBEE' }}>
        <View style={{ backgroundColor: '#F44336' }}>
           <Text style={{ padding: 5, fontSize: 20, color: 'white', textAlign: 'center' }} >
           {'\n'}
            Menghitung Volume Balok
          </Text>
         </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: '#e3f2fd' }}>
            <TextInput
                style={{ height: 40 }}
              placeholder="Masukkan Panjang Balok "
              onChangeText={(panjang) => this.setState({ panjang })}
            />
            <TextInput
                  style={{ height: 40 }}
              placeholder="Masukkan Lebar Balok"
              onChangeText={(lebar) => this.setState({ lebar })}
            />
            <TextInput
                style={{ height: 40 }}
              placeholder="Masukkan Tinggi Balok"
              onChangeText={(tinggi) => this.setState({ tinggi })}
            />

            <Button
              onPress={() => this.setState({
                volume: (this.state.panjang * this.state.panjang * this.state.tinggi)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{ margin: 20, backgroundColor: '#EF5350' }}>
          <Text style={{ padding: 10, fontSize: 20 }} >
              Panjang = { this.state.panjang} {'\n'}{'\n'}
              Lebar = { this.state.lebar} {'\n'}{'\n'}
              Tinggi = { this.state.tinggi} {'\n'}{'\n'}
              Volume = {this.state.volume}
          </Text>
         </View>
          <View style={{ padding: 5, margin: 20, backgroundColor: '#F44336', alignItems: 'center' }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>
                Modified by Eric Widhi Antara
              </Text>
          </View>
         </View>

    ); //tutup return
  } //tutup render
} //tutup class

AppRegistry.registerComponent('AppForm2', () => VolumeBalok);
