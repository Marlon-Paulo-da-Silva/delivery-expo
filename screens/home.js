import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

import HeaderTabs from '../components/HeaderTabs';
import Searchbar from '../components/Searchbar';

export default function Home() {
    return (
        <SafeAreaView style={styles.container} >
            <View style={{backgroundColor: 'white', padding: 15}}>
                <HeaderTabs />
                <Searchbar />
            </View>
            
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
  