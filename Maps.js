import React from 'react';
import{ Button, FlatList, View, Text, StatusBar, StyleSheet} from 'react-native';

export default function Maps({ route, navigation }) {
    
    return(
    <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Text>History</Text>
        <Button title="Menu" onPress={() => navigation.navigate('Menu')}/>
        </View >
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30
    }
})