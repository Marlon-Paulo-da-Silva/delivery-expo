import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Searchbar() {
    const [activeTab, setActiveTab] = useState("Delivery");

    return (
        <View style={{flexDirection: "row", marginTop: 15 }}>
          <GooglePlacesAutocomplete
            query={{ key: "AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4" }}
            styles={{
              textInput: {
                backgroundColor: "#eee",
                borderRadius: 20,
                fontWeight: "700",
                marginTop: 7,
                
              },
              textInputContainer: {
                backgroundColor: "#eee",
                borderRadius: 50,
                flexDirection: "row",
                
                marginRight: 10,
              }
            }} 
            placeholder="Buscar"
            renderLeftButton={() => (
            <View style={{ marginLeft: 10, alignSelf: "center", }}>
                <Ionicons name="location-sharp" size={34} />
              </View>
            )}
            renderRightButton={() => (
              <View style={
                { 
                  alignSelf: "center",
                  flexDirection: "row",
                  marginRight: 8,
                  backgroundColor: 'white',
                  padding: 9,
                  borderRadius: 30,
                  alignItems: 'center'
                }}>
                  <AntDesign name="clockcircle" size={10} style={{marginRight: 6}} />
                  <Text>Search</Text></View>
            )}
          />
        </View>
    );
}
