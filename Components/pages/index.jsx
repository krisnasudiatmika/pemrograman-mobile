import { View, Text, StyleSheet } from 'react-native'
import ListComponent from '../ListComponent'

const IndexPage = () => {
    return (
        <View style={styles.container}>
            <ListComponent />
        </View>
    )
}

export default IndexPage

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        backgroundColor: '#4567',
        flex: 1
    }
})