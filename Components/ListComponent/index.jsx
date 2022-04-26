import { View, Text, StyleSheet } from 'react-native'

const ListComponent = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.imageContainer}>
                <Text>m</Text>
            </View>
            <View>
                <Text>Title</Text>
                <Text>Sub title</Text>
            </View>
        </View>
    )
}


export default ListComponent

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopRightRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
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