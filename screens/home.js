import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import Categories from '../components/Categories';
import RestaurantItems, {
    localRestaurants
}from '../components/RestaurantItems';
import HeaderTabs from '../components/HeaderTabs';
import Searchbar from '../components/Searchbar';

const YELP_API_KEY = "lJR3badoEglVFWrT2heKnqSma-OaxKViosds8fU2VguNEUbzohINQpp_tFhKtTd5GUIRFrfAE5BghU1ECYzSWKW2niBtggsyMaGMSr33-zZVmYIwZp2AfsktE3t3YXYx";

export default function Home() {

    const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
    const [city, setCity] = useState("Sao Paulo");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
          headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
          },
        };

        return fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) =>
            setRestaurantData(
            json.businesses));
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    });

    return (
        <SafeAreaView style={styles.container} >
            <View style={{backgroundColor: 'white', padding: 15}}>
                <HeaderTabs />
                <Searchbar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData}/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 30,
      backgroundColor: "#eee",
      flex: 1
    },
  });
  