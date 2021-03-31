import React, { useEffect, useState } from 'react';
import{ Button, FlatList, View, Text, StatusBar, StyleSheet} from 'react-native';
import MapView, { Marker} from 'react-native-maps';

export default function Maps({ route, navigation }) {
    const data = route.params;
    const [address, setAddress] = useState('');
    const [title, setTitle] = useState('Haaga-Helia');
    const [lat, setLat] = useState(60.200692);
    const [lng, setLng] = useState(24.934302);
    //console.log(data)
    useEffect (() => {
        setAddress(data)
        console.log(address)
    })

    async function getGeo () {
        const url = 'https://www.mapquestapi.com/geocoding/v1/address?key=sktxN6Y2N6YQm33QCP1JFWxnENA5Q5Op&inFormat=kvp&outFormat=json&location=';
        
        try{
          const response = await fetch(url+address);
          const data = await response.json();
          setTitle(data.results[0].providedLocation.location);
          setLat(data.results[0].locations[0].displayLatLng.lat);
          setLng(data.results[0].locations[0].displayLatLng.lng)
         
        }
        catch (error) {
        setGeo('Error', error);
        };
        
    }
    
    return(
    <View style={styles.container}>
        <StatusBar hidden={true}/>
        <MapView style={styles.map}
        region={{
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.0322,
        longitudeDelta:0.0221,}} >
        <Marker 
        coordinate={{
        latitude: lat, 
        longitude: lng}}
        title={title}/></MapView>
        <View>
            <Button style={styles.button} title="SHOW" onPress={getGeo}></Button>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',    
    },
    map: {
        width: 400,
        height: 550,
        marginTop: -100
      },
    button: {
        alignSelf: 'stretch'
    }
})