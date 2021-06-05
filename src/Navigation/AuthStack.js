import React from 'react';

import navigationStrings from '../constants/navigationStrings';
import { Login, Register } from '../Screens';






export default function (Stack) {
  return (
    <>
      <Stack.Screen
          name={navigationStrings.LOGIN}
          component={Login}
          options={{headerShown: false}}
      />
       <Stack.Screen
          name={navigationStrings.REGISTER}
          component={Register}
          options={{headerShown: false}}
      />
      
    </>
  );
}
