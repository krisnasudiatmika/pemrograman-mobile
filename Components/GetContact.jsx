import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { useState, useEffect } from 'react'
import fetchClient from './services/axios'
const GetContacts = () => {
  const url = "https://gorest.co.in/public/v2/users";

  const [listUser, setListUser] = useState([])
  const [newUser, setNewUser] = useState({
    name: '',
    gender: '',
    email: '',
    status: ''
  })

  //unntuk memanggil liset user
  const getUsers = async () => {
    try {
      const response = await fetchClient.get(url);
      setListUser(response.data.slice(0, 5))
    } catch (error) {
      console.log('Data fetching cancelled');
    }
  };

  //untuk menginput data
  const postUsers = async () => {
    try {
      const response = await fetchClient.post(url, newUser);
      if (response) {
        getUsers();
      }
    } catch (error) {
      console.log('Data fetching cancelled', error.response);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);




  return (
    <ScrollView style={styles.container}>

      {listUser.length > 0 && listUser.map(user => {
        return (
          <View style={styles.listContainer}>
            <Text>{user.name}</Text>
          </View>
        )
      })}

      <View style={styles.textInputContainer}>
        <TextInput placeholder="Name" style={styles.textInput} onChangeText={val => {
          setNewUser(prev => {
            return { ...prev, name: val };
          })
        }} />
        <TextInput placeholder="gender" style={styles.textInput} onChangeText={val => {
          setNewUser(prev => {
            return { ...prev, gender: val };
          })
        }} />
        <TextInput placeholder="email" style={styles.textInput} onChangeText={val => {
          setNewUser(prev => {
            return { ...prev, email: val };
          })
        }} />
        <TextInput placeholder="status" style={styles.textInput} onChangeText={val => {
          setNewUser(prev => {
            return { ...prev, status: val };
          })
        }} />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => postUsers()}>
        <Text>Tambah Data</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default GetContacts;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  textInputContainer: {
    marginTop: 20
  },
  textInput: {
    borderWidth: 2,
    marginBottom: 10
  },
  listContainer: {
    padding: 5,
    borderWidth: 1,
    marginBottom: 3
  },
  button: {
    backgroundColor: 'red',
    padding: 20,
    marginTop: 20
  }
});