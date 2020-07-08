import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function List() {
    return (
        <View style={styles.header}>
            <FlatList />
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