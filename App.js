import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {useState} from 'react'
import {PasteTop, PasteBottom} from './Components'

export default function App() {
  const [textAtas, setTextAtas] = useState('');
  const [textBawah, setTextBawah] = useState('')
  return (
    <View>
    <Text>Hello World</Text>
    </View>
  );
}


const styles = StyleSheet.create({
 textInput:{
   borderWidth: 5
 },
 textInputWrapper:{
   marginTop: 20
 }
});

