import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Modal } from "react-native";
import { useState, useEffect } from 'react'
import fetchClient from './services/axios'
const GetContacts = () => {
  const url = "https://gorest.co.in/public/v2/users";
  const [status, setStatus] = useState('post');
  const [listUser, setListUser] = useState([])
  const [newUser, setNewUser] = useState({
    name: '',
    gender: '',
    email: '',
    status: '',
    id: ''
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

  const getUserDetail = async (id) => {
    try {
      const response = await fetchClient.get(url + `/${id}`);
      if (response) {
        const { email, gender, id, name, status } = response.data;
        setNewUser({
          name: name,
          gender: gender,
          email: email,
          status: status,
          id: id
        });
        setStatus('update')
      }
    } catch (error) {
      console.log('Data fetching cancelled');
    }
  }

  const deleteUser = async (id) => {
    try {
      const response = await fetchClient.delete(url + `/${id}`);
      if (response) {
        console.log(response)
        const { email, gender, id, name, status } = response.data;
        setNewUser({
          name: name,
          gender: gender,
          email: email,
          status: status,
          id: id
        });
        getUsers()
      }
    } catch (error) {
      console.log('Data fetching cancelled');
    }
  }



  //untuk menginput data
  const postUsers = async () => {
    try {
      const response = await fetchClient.post(url, newUser);
      if (response) {
        getUsers();
        setNewUser({
          name: '',
          gender: '',
          email: '',
          status: '',
          id: ''
        });
      }
    } catch (error) {
      console.log('Data fetching cancelled', error.response);
    }
  };

  const updateUser = async () => {
    try {
      const response = await fetchClient.put(url + `/${newUser.id}`, newUser);
      if (response) {
        getUsers();
      }
    } catch (error) {
      console.log('Data fetching cancelled', error.response);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  const clear = () => {
    setNewUser({
      name: '',
      gender: '',
      email: '',
      status: '',
      id: ''
    });
    setStatus('post')
  }



  return (
    <ScrollView style={styles.container}>

      {listUser.length > 0 && listUser.map(user => {
        return (
          <View style={styles.hapus}>
            <TouchableOpacity style={styles.listContainer} onPress={() => getUserDetail(user.id)}>
              <Text>{user.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteUser(user.id)}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>

        )
      })}

      <View style={styles.textInputContainer}>
        <TextInput placeholder="Name" style={styles.textInput} value={newUser.name} onChangeText={val => {
          setNewUser(prev => {
            return { ...prev, name: val };
          })
        }} />
        <TextInput placeholder="gender" style={styles.textInput} value={newUser.gender} onChangeText={val => {
          setNewUser(prev => {
            return { ...prev, gender: val };
          })
        }} />
        <TextInput placeholder="email" style={styles.textInput} value={newUser.email} onChangeText={val => {
          setNewUser(prev => {
            return { ...prev, email: val };
          })
        }} />
        <TextInput placeholder="status" style={styles.textInput} value={newUser.status} onChangeText={val => {
          setNewUser(prev => {
            return { ...prev, status: val };
          })
        }} />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => status == 'post' ? postUsers() : updateUser()}>
        <Text>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => clear()}>
        <Text>Cancel</Text>
      </TouchableOpacity>

    </ScrollView >
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
    marginBottom: 3,
    width: '90%'
  },
  button: {
    backgroundColor: 'red',
    padding: 20,
    marginTop: 20
  },
  hapus: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});