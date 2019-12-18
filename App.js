/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{borderWidth: 5, borderColor: 'yellow'}}>
        <Text style={{color: 'white'}}>These buttons are under the overlay</Text>
        <TouchableOpacity>
          <Text style={{fontSize: 30, color: 'white'}}>First Button</Text>
        </TouchableOpacity>
        <TouchableOpacity hasTVPreferredFocus={true}>
          <Text style={{fontSize: 30, color: 'white'}}>Second Button</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontSize: 30, color: 'white'}}>Third Button</Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: 'rgba(255,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <Text>This Text is on a full screen Overlay</Text>
      </View>
    </View>
  );
};

export default App;
