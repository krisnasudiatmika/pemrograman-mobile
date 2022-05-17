import { View, Text, StyleSheet, Image } from "react-native";
import { useState, useEffect } from 'react'
import axios from 'axios';
const GetContacts = () => {
  const [listUsers, setListUser] = useState([])
  useEffect(() => {
    const baseUrl = "https://reqres.in";
    const source = axios.CancelToken.source();
    const url = `${baseUrl}/api/users`;
    const fetchUsers = async () => {
      try {
        const response = await axios.get(url, { cancelToken: source.token });
        if (response) {
          setListUser(response.data.data)
          return;
        } else {
          throw new Error("Failed to fetch users");
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Data fetching cancelled');
        }
      }
    };
    fetchUsers();
    return () => source.cancel("Data fetching cancelled");
  }, []);
  return (
    <View>
      {listUsers.map(val => {
        return (
          <View style={styles.container}>
            <View>
              <Image style={styles.tinyLogo} source={{
                uri: val.avatar,
              }} />
            </View>
            <View>
              <Text>{val.last_name}</Text>
              <Text>{val.first_name}</Text>
              <Text>{val.email}</Text>
            </View>
          </View>
        )
      })}

    </View>
  );
};

export default GetContacts;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginRight: 10
  }
});