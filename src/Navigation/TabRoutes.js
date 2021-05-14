import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import navigationStrings from '../constants/navigationStrings';
import {Audio, Bookmark, Home, Library, Profile} from '../Screens';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor:colors.black,
    }}>
      <Tab.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={imagePath.Home}
              style={{
                width: size,
                height: size,
                tintColor: focused ? colors.black :"",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={navigationStrings.LIBRARY}
        component={Library}
        options={{
          tabBarLabel: 'LIBRARY',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={imagePath.Library}
              style={{
                width: size,
                height: size,
                tintColor: focused ? colors.black : '',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name={navigationStrings.AUDIO}
        component={Audio}
        options={{
          tabBarLabel: 'AUDIO',

          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={imagePath.Audio}
              style={{
                width: size,
                height: size,
                tintColor: focused ? colors.black : '',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name={navigationStrings.BOOKMARK}
        component={Bookmark}
        options={{
          tabBarLabel: 'BOOKMARK',

          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={imagePath.Bookmark}
              style={{
                width: size,
                height: size,
                tintColor: focused ? colors.black : '',
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
              source={imagePath.Profile}
              style={{
                width: size,
                height: size,
                tintColor: focused ? colors.black : '',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
