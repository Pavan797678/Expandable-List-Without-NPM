import React from 'react';

import navigationStrings from '../constants/navigationStrings';


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
    </>
  );
}
