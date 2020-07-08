import React from 'react';
import { View, StyleSheet, Text, SafeAreaView , Image } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={{ width: 27 }} />
            <Image
                source={{
                    uri:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
                }}
                style={{
                    flex: 1,
                    width: null,
                    height: 40
                }}
                resizeMode="contain"
            />
            <Feather name='inbox' size={27} color='black' />
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#f3f6fa',
        alignItems: 'center',
        justifyContent: 'space-between',
}
});