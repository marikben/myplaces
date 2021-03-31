import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Button, Header, Icon, Input, ListItem } from 'react-native-elements';

export default function Menu( { navigation }) {
    const [address, setAddress] = useState('');
    const [data, setData] = useState([]);

    const saveList = () => {
        data.push({value: address})
        //setItems([...items, {item}])
        console.log(data)
        setAddress('');
      };

      const renderItem = ({ item }) => (
        <View>
        <ListItem bottomDivider >
          <ListItem.Content>
            <ListItem.Title style={{fontSize: 18}}>{item.value}</ListItem.Title>
            <Text style={{marginLeft: 320, marginTop: -40}} onPress={() => navigation.navigate('Maps')}>
          <Icon name="delete" size={30} color="grey" />
        </Text>
          </ListItem.Content>
        </ListItem>
        </View>
      )
    
    return(
        <View style={styles.container}>
            <Text>Moi</Text>
            <Input placeholder='Type in address' label='PLACEFINDER' onChangeText={address => setAddress(address)} 
            value={address}/>
        <View style={styles.button}>
            <Button raised icon={{name: 'save', color: '#fff'}} onPress={saveList} title="SAVE" />
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
    height: 100, 
    width: 150,
    marginLeft: 110,
    marginRight: 110
  },
  note:{
    color: 'grey',
    marginTop: -50,
    marginLeft: 10
  }
});

