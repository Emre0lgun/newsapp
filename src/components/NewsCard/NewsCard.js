import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './NewsCard.style'


const NewsCard = ({news}) => {

    var stoktxt = "";

    console.log(news.inStock);

    if (news.inStock == false) {
        stoktxt = "STOKTA YOK"
    } 

    return (
        <View style = {styles.container}>
            <Image style = {styles.image} 
            source = {{uri: news.imgURL}}/>
            <View style = {styles.innercontainer}></View>
            <Text style = {styles.title}>{news.title}</Text>
            <Text style = {styles.description}>{news.price}</Text>
            <Text style = {styles.stock}>{stoktxt}</Text>
        </View>
    )
};

export default NewsCard;