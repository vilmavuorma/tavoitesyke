import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [age, setAge] = useState('')
  const [lower, setLower] = useState(0)
  const [upper, setUpper] = useState(0)

  function Calculate(){
    const resultLow = Math.floor((220 - age) * 0.65);
    const resultUp = Math.floor((220 - age) * 0.85);
    setLower(resultLow)
    setUpper(resultUp)
  }
  return (
    <View style={styles.container}>
    <Text style={styles.field}>Age</Text>
    <TextInput keyboardType='numeric'
     value={age}
     onChangeText={text => setAge(text)}
    />
    <Text style={styles.field}>Limits</Text>
    <Text style={styles.field}>{lower}-{upper}</Text>
    <Button onPress={Calculate}title="Calculate"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  field :{
    marginBottom: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
