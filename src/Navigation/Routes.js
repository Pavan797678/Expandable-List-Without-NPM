import * as React from 'react';
//import NavigationService from './navigation/NavigationService';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { connect } from 'react-redux';



const Stack = createStackNavigator();

 function Routes(props) {

  const{logedInUser}=props


  return (
    <NavigationContainer>
       <Stack.Navigator>
      {!!logedInUser.accessToken?<>{MainStack(Stack)}</>:<>{AuthStack(Stack)}
         </>}
         </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = function (state) {
  return {
    logedInUser:state.auth.userData
  };
};

export default connect(mapStateToProps)(Routes);