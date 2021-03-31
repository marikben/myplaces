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
        <Text onPress={() => navigation.navigate('Maps', item.value)}>
          show on map <Icon name="keyboard-arrow-right"/></Text>
          
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
  list: {
    flex: 1,
    //justifyContent: 'center',
    //backgroundColor: '#ecf0f1',
    padding: 8,
    flexDirection:'row',
    //alignItems:'center'
  },
  button: { 
    width: 370,
    backgroundColor: '#AAAAAA',
    marginLeft: 10
  },
  note:{
    color: 'grey',
    marginTop: -50,
    marginLeft: 10
  },
  icon: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
    marginLeft: 245
  },
  icon: {
    color: '#bbbbbb',
    fontSize: 14,
    textAlign: 'center',
    marginLeft: 245,
  },
  arrow: {
    fontSize: 21,
  color: '#bbbbbb',
  textAlign: 'center',
  marginLeft: 3,
  marginTop: 5
  }
});

