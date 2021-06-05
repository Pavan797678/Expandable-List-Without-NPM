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
    height: '20%',

    flexDirection: 'row',
  },

  logoImage: {
    height: 100,
    width: 100,
    tintColor: colors.white,
    resizeMode: 'contain',
  },
  loginContainer: {
    height: '80%',
    backgroundColor: colors.white,
    borderTopStartRadius: moderateVerticalScale(70),
    alignItems: 'center',
    paddingVertical: moderateVerticalScale(20),
  },
  backArrowImageContainer: {
    height: moderateVerticalScale(100),
    width: '40%',
    justifyContent: 'center',
    paddingHorizontal: moderateVerticalScale(10),
  },
  backArrowImage: {
    height: moderateVerticalScale(35),
    width: moderateVerticalScale(35),
    tintColor: colors.white,
  },
  screenTitleText: {
    height: moderateVerticalScale(100),
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTitleText: {
    ...commonStyles.futuraBoldFont24,
    color: colors.white,
  },radioGroupContainer:{
   width:'80%',
   marginVertical:moderateVerticalScale(20)
  },
  loginButtonContainer: {
    marginVertical: moderateVerticalScale(35),
  },
  alreadyHaveAnAccountText: {
    ...commonStyles.futuraBtHeavyFont16,
    marginVertical: moderateVerticalScale(30),
  },
});
