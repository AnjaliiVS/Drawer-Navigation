import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

import Home from '../screens/home';
import Search from '../screens/search';
import DrawerContent from '../screens/drawercontent';
const Drawer = createDrawerNavigator();
const Main = () => {
  return (
    <Drawer.Navigator
      initialRouteName=""
      headerMode={false}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Search" component={Search} />
    </Drawer.Navigator>
  );
};
export default Main;
