import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import navigationStrings from '../constants/navigationStrings';
import {Order, Profile} from '../Screens';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor:'black',
    }}>
      <Tab.Screen
        name={navigationStrings.ORDER}
        component={Order}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={imagePath.ORDERBEG}
              style={{
                width: size,
                height: size,
                tintColor: focused ? "black":'',
              }}
            />
          ),
        }}
      />
          <Tab.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{
          tabBarLabel: 'PROFILE',

          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={imagePath.PROFILE}
              style={{
                width: size,
                height: size,
                tintColor: focused ? "black" : '',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
