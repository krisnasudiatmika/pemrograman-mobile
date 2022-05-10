import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts';
import { useState } from 'react';
const AlertModal = () => {
    const [showAlert, setShowAlert] = useState(false)
    return (
        <View>
            <TouchableOpacity style={styles.btn} onPress={() => setShowAlert(true)}>
                <Text>Show Alert</Text>
            </TouchableOpacity>

            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="AwesomeAlert"
                message="I have a message for you!"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="No, cancel"
                confirmText="Yes, delete it"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                    setShowAlert(false)
                }}
                onConfirmPressed={() => {
                    setShowAlert(false)
                }}
            />
        </View>
    )
}
export default AlertModal


const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'red',
        alignItems: 'center',
        padding: 10
    }
});