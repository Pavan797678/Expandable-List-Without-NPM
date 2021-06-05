import {apiPost, setUserData} from '../../utils/utils';

import ActionType from '../types';
import store from '../store';
import { SIGNUP,LOGIN } from '../../config/urls';



const {dispatch} = store;


export function signUp(data={}) {
  return new Promise((resolve, reject) => {
    apiPost(SIGNUP, data)
    .then(res => {
      resolve(res);
    })
    .catch(error => {
      reject(error);
    });

  });
  
}

export function login(data = {}) {
  return new Promise((resolve, reject) => {
    apiPost(LOGIN, data)
      .then(res => {
        setUserData(res).then(suc => {
          dispatch({
            type: ActionType.LOGIN,
            payload:res,
          });
         
        });
        resolve(res);
       
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function verifyOtp(data = {}) {
  return new Promise((resolve, reject) => {
    apiPost(VERIFYOTP, data)
      .then(res => {
        setUserData(res.data).then(suc => {
          store.dispatch({
            type: ActionType.LOGIN,
            payload: res.data,
          });
        });

        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export const onLogout = () =>
  store.dispatch({
    type: ActionType.LOGOUT,
    payload: {},
  });
