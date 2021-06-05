import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,Image , PermissionsAndroid, Button} from 'react-native'
import Header from '../../../Components/Header'
import * as ImagePicker from 'react-native-image-picker';
import imagePath from '../../../constants/imagePath';
import auth from '@react-native-firebase/auth';

import TextInputWithLabel from '../../../Components/TextInputWithLabel';
import navigationStrings from '../../../constants/navigationStrings';




export default class Profile extends Component {

  state={
  }
 

  
  


    render() {
  


        return (
            <View style={{flex:1}}>
            <Header title={'Profile'} searchVisible={true} />
            </View>
        )
    }
}


