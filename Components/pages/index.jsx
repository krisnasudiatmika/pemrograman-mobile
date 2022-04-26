import { View, ScrollView, StyleSheet } from 'react-native'
import ListComponent from '../ListComponent'

const IndexPage = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                {dummyData.map((val, index) => {
                    return (
                        <ListComponent key={index} title={val.title} subTitle={val.subtitle} />
                    )
                })}

            </ScrollView>
        </View>

    )
}

export default IndexPage

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        backgroundColor: '#4567',
    }
})

const dummyData = [
    {
        title: 'Lorem Ipsum',
        subtitle: 'Lorem ipsum dolor Sit Amet'
    },
    {
        title: 'Lorem Ipsum',
        subtitle: 'ini di ganti'
    },
    {
        title: 'Lorem Ipsum',
        subtitle: 'Lorem ipsum dolor Sit Amet'
    },
    {
        title: 'Lorem Ipsum',
        subtitle: 'Lorem ipsum dolor Sit Amet'
    },
    {
        title: 'Lorem Ipsum',
        subtitle: 'Lorem ipsum dolor Sit Amet'
    },
    {
        title: 'Lorem Ipsum',
        subtitle: 'Lorem ipsum dolor Sit Amet'
    },
    {
        title: 'Lorem Ipsum',
        subtitle: 'Lorem ipsum dolor Sit Amet'
    },
    {
        title: 'Lorem Ipsum',
        subtitle: 'Lorem ipsum dolor Sit Amet'
    },
    {
        title: 'Lorem Ipsum',
        subtitle: 'Lorem ipsum dolor Sit Amet'
    },
    {
        title: 'Lorem Ipsum',
        subtitle: 'Lorem ipsum dolor Sit Amet'
    },
    {
        title: 'Lorem Ipsum',
        subtitle: 'Lorem ipsum dolor Sit Amet'
    },
    {
        title: 'Lorem Ipsum',
        subtitle: 'Lorem ipsum dolor Sit Amet'
    },
    {
        title: 'Lorem Ipsum',
        subtitle: 'Lorem ipsum dolor Sit Amet'
    }
]