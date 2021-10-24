import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "A Retirar",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Bebidas",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Mercado",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Promoções",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Café",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Doces",
  },
];

export default function Categories() {

    return (
      <View style={{
        marginTop: 5,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingLeft: 20  
      }}>    
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30}}>
            <Image source={item.image} style={{
              width: 50,
              height: 40,
              resizeMode: "contain"
            }}/>
            <Text style={{fontSize: 13, fontWeight: "bold"}}>{item.text}</Text>
          </View>
          ))}
        </ScrollView>
      </View>
    );
}
