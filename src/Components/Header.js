import React from 'react'
import { View, Text,StyleSheet ,Image, TouchableOpacity} from 'react-native'
import imagePath from '../constants/imagePath'
import {useNavigation} from '@react-navigation/native';
import strings from '../constants/lang'



import colors from '../styles/colors'
import { moderateScale, moderateVerticalScale } from '../styles/responsiveSize'
import fontFamily from '../styles/fontFamily';
import commonStyles from '../styles/commonStyles';

export default function Header({
  title=strings.MYBOOK
}) {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.inerContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image style={styles.drawerIcon} source={imagePath.Drawer}/>
        </TouchableOpacity>
     
      <Text style={styles.titleText}>{title}</Text>
      <Image style={styles.searchIcon} source={imagePath.Search}/>
     
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   container:{
     height:moderateVerticalScale(65),
     backgroundColor:colors.white,
     justifyContent:'center'
   },inerContainer:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
     marginHorizontal:moderateScale(15)
   },drawerIcon:{
     height:moderateVerticalScale(35),
     width:moderateVerticalScale(35),
     tintColor:colors.black
   },titleText:{
    ...commonStyles.futuraBtHeavyFont25,
    fontFamily:fontFamily.bold,
   },searchIcon:{
    height:moderateVerticalScale(25),
    width:moderateVerticalScale(25),
    tintColor:colors.black
   }
})

