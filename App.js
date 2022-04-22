import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PasteTop from './Components/PasteTop'
import PasteBottom from './Components/PasteBottom';

export default function App() {
  return (
    <View>
      <PasteTop/>
      <PasteBottom/>
    </View>
  );
}


