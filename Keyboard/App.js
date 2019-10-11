import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {black} from 'ansi-colors';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>This is content</Text>
        </View>

        <View style={styles.button}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.number}>1</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.number}>2</Text>
              <Text style={styles.char}>ABC</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.number}>3</Text>
              <Text style={styles.char}>DEF</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.number}>4</Text>
              <Text style={styles.char}>GHI</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.number}>5</Text>
              <Text style={styles.char}>JKL</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.number}>6</Text>
              <Text style={styles.char}>MNO</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.number}>7</Text>
              <Text style={styles.char}>PQRS</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.number}>8</Text>
              <Text style={styles.char}>TUV</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.number}>9</Text>
              <Text style={styles.char}>WXYZ</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.number}>*</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.number}>0</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.number}>#</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
    marginTop: 10,
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    alignItems: 'center',
  },
  number: {
    fontSize: 40,
  },
  char: {
    fontSize: 15,
  },
});
