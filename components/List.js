import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default function List() {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <Item item={item}/>}
            keyExtractor={item => item.id}
        />
    );
}

function Item({ item }) {
    return (
        <View style={styles.feedItem} key={item.id}>
            <View style={styles.avatarWrapper}>
                <Image
                    source={item.avatar}
                    style={styles.avatarImage}
                    resizeMode='cover'
                />
                <Text style={styles.posterName}>{item.name}</Text>
            </View>
            <View style={styles.imageWrapper}>
                <Image
                    source={item.image}
                    style={styles.imagePoster}
                    resizeMode='cover'
                />
            </View>
            <View style={styles.bottomWrapper}>
                <Feather
                    name='heart'
                    size={27}
                    color='black'
                    onPress={() => alert("Liked")}
                />
                <Feather
                    name='message-square'
                    size={27}
                    color='black'
                    onPress={() => alert("Messaged")}
                />
                <Feather
                    name='share'
                    size={27}
                    color='black'
                    onPress={() => alert("Shared")}
                />
            </View>
            <Text style={styles.likeCount}>
                {item.likeCount} likes
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    avatarWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 7,
        marginHorizontal: 12
    },
    avatarImage: {
        width: 46,
        height: 46,
        borderRadius: 23
    },
    posterName: {
        marginLeft: 12,
        fontSize: 15,
        fontWeight: '500'
    },
    imageWrapper: {
        height: 300
    },
    imagePoster: {
        flex: 1,
        width: null,
        height: null
    },
    bottomWrapper: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 5
    },
    likeCount: {
        flex: 1,
        fontSize: 18,
        flexDirection: 'row',
        marginHorizontal: 10
    }
});

const data = [
    {
        id: 1,
        name: 'User 1',
        image: require('../assets/pic1.jpg'),
        likeCount: 10,
        avatar: require('../assets/avt1.png')
    },
    {
        id: 2,
        name: 'User 2',
        image: require('../assets/pic2.jpg'),
        likeCount: 20,
        avatar: require('../assets/avt2.png')
    },
    {
        id: 3,
        name: 'User 3',
        image: require('../assets/pic3.jpg'),
        likeCount: 15,
        avatar: require('../assets/avt3.png')
    }
];