import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Routes from './src/Navigation/Routes'
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { getUserData } from './src/utils/utils';
import types from './src/redux/types';





export default class App extends Component {
  
  
  componentDidMount(){
    getUserData()
      .then(res => {
        if (res) {
          store.dispatch({
            type: types.LOGIN,
            payload: res,
          });
        }
      })
      .catch(error => {
        alert(error);
      });
  }


  render() {
    return (
     <>
     <Provider store={store}>
     <Routes/>
     </Provider>
     
      <FlashMessage position="top" />
     </>
    )
  }
}
