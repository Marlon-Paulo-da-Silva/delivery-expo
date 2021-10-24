import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function RestaurantItem() {

    return (
        <View style={{flexDirection: "row", marginTop: 15 }}>
          <RestaurantImage />
        </View>
    );
}

const RestaurantImage = () => (
    <>
    <Image
        source={{uri: "https://media-cdn.tripadvisor.com/media/photo-s/17/75/3f/d1/restaurant-in-valkenswaard.jpg"}}
        style={{ width: "100%", height: 180}}
    />
    <TouchableOpacity></TouchableOpacity>
    </>
)