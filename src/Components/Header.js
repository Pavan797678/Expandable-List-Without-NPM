import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';

import {useNavigation} from '@react-navigation/native';
import colors from '../styles/colors';
import {connect} from 'react-redux';
import {moderateVerticalScale} from '../styles/responsiveSize';
import commonStyles from '../styles/commonStyles';
// import CircularLoader from './Loaders/CircularLoader';

function Header(props) {
  const {searchVisible, _onChangeText, isLoading,numberOfItemOrderd,goToCartScreen} = props;

   const orderItems = numberOfItemOrderd.length; 
   const navigation = useNavigation();

  if (searchVisible) {
    return (
      <View>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.themeColor}
        />
        <View style={styles.headerBar}>
          <View style={styles.logoView}>
            <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.FITNESS_SCREEN)}>
              <Image
                source={imagePath.location_marker}
                style={styles.drawerIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <Text style={styles.amazonIcon}>Home - Sector 21</Text>

            <View style={styles.miceCartIconView}>
              <TouchableOpacity onPress={()=>goToCartScreen()}>
                <View>            
                  <Image
                    source={imagePath.food_plat}
                    style={styles.cartIcon}
                    resizeMode="contain"
                  />
                   <Text style={styles.cartCount}>{orderItems}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.searchBarView}>
            <Image
              source={imagePath.search_icon}
              style={styles.searchIcon}
              resizeMode="contain"
            />
            <TextInput
              style={styles.searcTextInput}
              placeholder="Resturant name, cuisine,or a dish..."
              onChangeText={_onChangeText}></TextInput>
            {/* <CircularLoader isLoading={isLoading} /> */}
            <Image
              source={imagePath.microphone_icon}
              style={styles.cameraIcon}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerBar: {
    height: 110,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  headerBar1: {
    height: 60,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  logoView: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  searchBarView: {
    width: '95%',
    height: '40%',
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 'auto',
  },
  searchIcon: {
    height: 20,
    width: '7%',
    tintColor: colors.red,
  },
  cameraIcon: {
    height: 25,
    width: '7%',
  },
  searcTextInput: {
    width: '86%',
    height: 40,
    fontSize: 18,
    paddingVertical: 5,
  },
  drawerIcon: {
    height: moderateVerticalScale(40),
    width: moderateVerticalScale(40),
  },
  amazonIcon: {
    ...commonStyles.futuraBtHeavyFont16,
  },
  miceCartIconView: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
 
  },
  microphoneIcon: {
    height: 25,
    width: 25,
    marginHorizontal: 20,
  },
  cartIcon: {
    height: 50,
    width: 50,
    position: 'relative',


  },
  notificationIcon: {
    height: 20,
    width: 20,
    right: '15%',
    position: 'relative',
    tintColor: colors.themeColor,
  },
  qrcodeImage: {
    height: 20,
    width: 20,
  },
  qrcodeView: {
    right: '50%',
    position: 'relative',
  },

  cartCount: {
  ...commonStyles.futuraBoldFont18,
    position: 'absolute',
    left: '42%',
    top: '22%',
    color: colors.themeColor,
   
  },
});

const mapStateToProps = state =>{
  return {
    numberOfItemOrderd:state.cart.todo
  }
}

export default connect(mapStateToProps) (Header);
