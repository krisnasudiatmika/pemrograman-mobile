import { StyleSheet, View, Text } from 'react-native'

const PasteBottom = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textBold}>
                test
            </Text>
        </View>
    )
}

export default PasteBottom

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        width: '100%',
        paddingVertical: 100,
        alignItems: 'center',
        marginTop: 50
    },
    textBold: {
        fontWeight: 'bold',
        color: '#FFFF'
    }
});