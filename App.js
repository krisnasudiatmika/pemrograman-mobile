import { StyleSheet, View } from 'react-native';
import { GetContacts} from './Components'

export default function App() {

  return (
    <View>
        <GetContacts/>
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

