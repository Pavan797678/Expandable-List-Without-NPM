import React from 'react';

import navigationStrings from '../constants/navigationStrings';
import { Cart, FitnessScreen } from '../Screens';

import TabRoutes from './TabRoutes';




export default function (Stack) {
  return (
    <>
      <Stack.Screen
          name={navigationStrings.TAB_ROUTES}
          component={TabRoutes}
          options={{headerShown: false}}
      />
      <Stack.Screen
          name={navigationStrings.CART_SCREEN}
          component={Cart}
          options={{headerShown: false}}
      />
       <Stack.Screen
          name={navigationStrings.FITNESS_SCREEN}
          component={FitnessScreen}
          options={{headerShown: false}}
      />
      
    </>
  );
}
