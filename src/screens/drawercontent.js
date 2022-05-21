import React from 'react';
import {View} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import {Divider} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
const DrawerContent = props => {
  return (
    <View>
      <View style={{backgroundColor: 'black', height: '100%'}}>
        <DrawerItem
          onPress={() => props.navigation.navigate('Home')}
          icon={() => (
            <AntDesign name="home" size={20} style={{color: '#fff'}} />
          )}
          label="Home"
          labelStyle={{color: '#fff'}}
        />
        <Divider style={{width: 250, backgroundColor: 'white'}} />
        <DrawerItem
          onPress={() => props.navigation.navigate('Search')}
          icon={({color, size}) => (
            <AntDesign name="search1" size={20} style={{color: '#fff'}} />
          )}
          label="Advance Search"
          labelStyle={{color: '#fff'}}
        />
      </View>
    </View>
  );
};
export default DrawerContent;
