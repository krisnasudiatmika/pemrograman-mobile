import { View, ScrollView, StyleSheet } from 'react-native'
import ListComponent from '../ListComponent'
import { useState } from 'react'
const IndexPage = () => {

    const [changeColor, setChangeColor] = useState(null);


    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                {dummyData.map((val, index) => {
                    return (
                        <ListComponent key={index} identifyCheck={changeColor} index={index} title={val.title} subTitle={val.subtitle} onChange={() => setChangeColor(index)} />
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