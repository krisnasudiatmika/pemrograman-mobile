import { View, Text, StyleSheet } from 'react-native'

const PasteTop = ({ getText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textBold}>{getText}</Text>
        </View>
    )
}

export default PasteTop;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        width: '100%',
        paddingVertical: 100,
        alignItems: 'center'
    },
    textBold: {
        fontWeight: 'bold',
        color: '#FFFF'
    }
});