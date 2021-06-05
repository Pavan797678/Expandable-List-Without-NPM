import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import {moderateVerticalScale} from '../../styles/responsiveSize';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  logoContainer: {
    alignItems: 'center',
    height: '30%',
    justifyContent: 'center',
  },

  logoImage: {
    height: 100,
    width: 100,
    tintColor: colors.white,
    resizeMode: 'contain',
  },
  loginContainer: {
    height: '70%',
    backgroundColor: colors.white,
    borderTopStartRadius: moderateVerticalScale(70),
    alignItems:'center'
  },
  screenTitleContainer:{
      height:moderateVerticalScale(100),
      width:"100%",
      alignItems:'center',
      justifyContent:'center'
  },
  screenTitleText:{
      ...commonStyles.futuraBoldFont24
  },loginButtonContainer:{
     marginVertical:moderateVerticalScale(35)  
  },alreadyHaveAnAccountText:{
      ...commonStyles.futuraBtHeavyFont16,
      marginVertical:moderateVerticalScale(30)
  }
});
