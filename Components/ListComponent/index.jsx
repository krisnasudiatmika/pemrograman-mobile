import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ListComponent = ({ title, subTitle, onChange, index, identifyCheck }) => {
    return (
        <TouchableOpacity style={[styles.wrapper, identifyCheck === index ? { backgroundColor: '#fffF00' } : { backgroundColor: '#fff' }]} onPress={onChange}>
            <View style={styles.imageContainer}>
                <Text>m</Text>
            </View>
            <View>
                <Text>{title}</Text>
                <Text>{subTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default ListComponent

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',

        borderTopRightRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10
    },
    imageContainer: {
        height: 40,
        width: 40,
        backgroundColor: '#000',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    }
})