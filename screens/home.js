import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

import HeaderTabs from '../components/HeaderTabs';

export default function Home() {
    return (
        <SafeAreaView style={styles.container} >
            <HeaderTabs />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 30
    },
  });
  