import { View, Text, StyleSheet } from 'react-native'

const PasteTop = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textBold}>Paste Text</Text>
            <Text style={styles.textBold}>Input or Paster Your Text</Text>
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