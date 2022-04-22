import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {PasteTop, PasteBottom} from './Components'

export default function App() {
  return (
    <View>
      <PasteTop/>
      <PasteBottom/>
    </View>
  );
}


