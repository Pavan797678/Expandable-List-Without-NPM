import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import {moderateVerticalScale} from '../../styles/responsiveSize';

export default StyleSheet.create({
  userInfoContainer: {
    paddingHorizontal: moderateVerticalScale(10),
  },
  userInfoInnerContainer: {
    width: '100%',
    height: moderateVerticalScale(200),
    backgroundColor: colors.white,
    marginTop: moderateVerticalScale(10),
    borderTopLeftRadius:8,
    borderTopRightRadius:8,
    paddingHorizontal: moderateVerticalScale(10),
    
   
    elevation: 3,
  },
  userInfoEndContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  billNumerText: {
    ...commonStyles.futuraBtHeavyFont14,
    marginVertical: moderateVerticalScale(14),
  },
  userNameContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },additionalUserInfoContainer:{
      flexDirection:'row',
      alignItems:'center'
  },
  iconStyles:{
      width:moderateVerticalScale(30),
      height:moderateVerticalScale(30),
      resizeMode:'contain',
      tintColor:colors.black,
      marginHorizontal:5
      
  },
  additionalInfoViewContainer:{
      height:moderateVerticalScale(100),
      elevation: 3,
      backgroundColor: colors.white,
      borderBottomLeftRadius:8,
      borderBottomEndRadius:8
  },additionalInfoViewInnerContainer:{
    paddingHorizontal: moderateVerticalScale(10),
  }, itemContainer: {
    width: '100%',
    height: moderateVerticalScale(280),
    backgroundColor: colors.white,
    marginTop: moderateVerticalScale(10),
    borderTopLeftRadius:8,
    borderTopRightRadius:8,
    paddingHorizontal: moderateVerticalScale(10),
    paddingVertical:5,
    marginVertical:5,
    elevation: 3,
  },userBillPriceContainer:{

  },
  priceContainer:{
    width: '100%',
    height: moderateVerticalScale(80),
    backgroundColor: colors.white,
    marginTop: moderateVerticalScale(10),
    borderTopLeftRadius:8,
    borderTopRightRadius:8,
    paddingVertical:5,
    marginVertical:5,
    elevation: 3,
  },totalBillPrice:{
    ...commonStyles.futuraBtHeavyFont16,
    marginVertical:5,
    marginHorizontal:10,
    
    
  }
});
