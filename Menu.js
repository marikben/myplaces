import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Button, Header, Icon, Input, ListItem } from 'react-native-elements';

export default function Menu( { navigation }) {
    const [address, setAddress] = useState('');
    const [data, setData] = useState([]);

    const saveList = () => {
        data.push({value: address})
        //console.log(data)
        setAddress('');
      };

      const renderItem = ({ item }) => (
        <View>
        <ListItem bottomDivider >
          <ListItem.Content>
            <ListItem.Title style={{fontSize: 18}}>{item.value.length < 20
                ? `${item.value}`
                : `${item.value.substring(0, 20)}...`}</ListItem.Title>
            <View style={styles.icon}>
            <Text onPress={() => navigation.navigate('Maps', item.value)} style={{
                    fontSize: 18,
                    color: "#9C9C9C"
                }}>show on map</Text>
            <Icon name="keyboard-arrow-right" size={25} iconStyle={{marginTop: 3, color: '#9C9C9C'}} />
        </View>
          </ListItem.Content>
        </ListItem>
        </View>
      )
    
    return(
        <View style={styles.container}>
            <Input placeholder='Type in address and city' label='PLACEFINDER' onChangeText={address => setAddress(address)} 
            value={address}/>
        <View>
            <Button buttonStyle={styles.button} raised icon={{name: 'save', color: '#fff'}} onPress={saveList} title="SAVE" />
        </ View>
        <FlatList
        keyExtractor={keyExtractor = (item, index) => index.toString()}
        data={data}
        renderItem={renderItem}
      />
        </ View>
    )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
   
  },
  button: { 
    width: 370,
    backgroundColor: '#AAAAAA',
    marginLeft: 10
  },
  icon: {
      paddingVertical: 15,
      paddingHorizontal: 10,
      marginLeft: 210,
      marginTop: -40,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"}
  ,

});

