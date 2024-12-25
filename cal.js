import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

const CalculatorApp = () => {
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{input}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {['7', '8', '9', '/'].map((item) => (
          <Button key={item} title={item} onPress={() => handlePress(item)} />
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <Button key={item} title={item} onPress={() => handlePress(item)} />
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <Button key={item} title={item} onPress={() => handlePress(item)} />
        ))}
        {['0', 'C', '=', '+'].map((item) => (
          <Button
            key={item}
            title={item}
            onPress={() => handlePress(item)}
            buttonStyle={item === '=' ? styles.equalsButton : {}}
          />
        ))}
      </View>
      <Text style={styles.footer}>Calc by Ronan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  display: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  displayText: {
    fontSize: 36,
    textAlign: 'right',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  equalsButton: {
    backgroundColor: 'green',
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default CalculatorApp;
