import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet, Platform} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import * as Pickers from './src/components/pickers';
import Test from './src/components/test';

export default function App() {
  return (
    <View>
      <ScrollView>
        <Text style={styles.heading}>Phasmo Helper</Text>
        {Pickers.examples.map((element) => (
          <View style={styles.elementContainer} key={element.title}>
            <Text style={styles.title}>{element.title}</Text>
            {element.render()}
          </View>
        ))}
      </ScrollView>
      <Test/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        paddingTop: 30,
      },
    }),
    backgroundColor: '#F5FCFF',
    margin: 16,
  },
  title: {
    fontSize: 18,
  },
  elementContainer: {
    marginTop: 8,
  },
  heading: {
    fontSize: 22,
    color: 'black',
  },
});
