import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {useState} from 'react'
import AlertModal from './Components/AlertModal';

export default function App() {

  return (
    <View style={styles.container}>
      <AlertModal/>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    paddingTop: 100
  }
});

