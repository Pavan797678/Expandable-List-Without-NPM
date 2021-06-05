import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';


export default StyleSheet.create({
    container: {flex: 1, backgroundColor: colors.white},
    MainContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      margin: '50%',
    },
  
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    buyNowButtonView: {
      backgroundColor: colors.themeColor,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cartEmptyImage: {
      height: 200,
      width: 200,
      resizeMode: 'contain',
    },
    textStyle: {color: colors.white},
})
