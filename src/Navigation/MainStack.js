import React from 'react';

import navigationStrings from '../constants/navigationStrings';
import {PlaylistScreen } from '../Screens';

import DrawerRoutes from './DrawerRoutes';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.DRAWER_ROUTES}
        options={{
          headerShown: false,
        }}
        component={DrawerRoutes}
      />
      <Stack.Screen
        name={navigationStrings.PLAYLIST_SCREEN}
        options={{
          headerShown: false,
        }}
        component={PlaylistScreen}
      />
    </>
  );
}
