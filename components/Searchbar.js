import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Searchbar() {
    const [activeTab, setActiveTab] = useState("Delivery");

    return (
        <View style={{flexDirection: "row", marginTop: 15}}>
          <GooglePlacesAutocomplete
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
                alignContent: "center",
                marginRight: 10
              }
            }} 
            placeholder="Buscar"
            renderLeftButton={() => (
            <View style={{ marginLeft: 10, alignSelf: "center" }}>
                <Ionicons name="location-sharp" size={34} />
              </View>
            )}
            renderRightButton={() => (
              <View></View>
            )}
          />
        </View>
    );
}
