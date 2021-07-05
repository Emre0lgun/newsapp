import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create ({
    container: {
        backgroundColor: '#eceff1',
        margin: 10,
        borderRadius: 10,
        
        flex: 1,
    },
    image: {
        height: Dimensions.get('window').height / 4 ,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        margin: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 5
    },
    description: {
        margin: 5,
        fontSize: 16,
        color: 'gray',
        textAlign: 'left',
    },
    stock: {
        textAlign: 'left',
        margin: 5,
        color: 'red',
        fontWeight: 'bold',
    },
    innercontainer: {
        padding: 5
    },
})