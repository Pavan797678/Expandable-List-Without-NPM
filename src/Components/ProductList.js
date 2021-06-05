import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {height, moderateVerticalScale, width} from '../styles/responsiveSize';

export default function ProductList({data,addItemForOrder}) {
  return (
    <View style={styles.continer}>
      <View style={styles.innerContainer}>
        <Image style={styles.productImage} source={{uri: data.image}} />
        <View style={styles.productDetailsContainer}>
          <Text style={styles.prductName}>{data.name}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.produtRating}>{data.rating}</Text>
          </View>
        </View>
        <View style={styles.prcieTextContainer}>
            <TouchableOpacity onPress={()=>addItemForOrder(data)}>
            <View style={styles.orderButtonContainer}>
            <Text style={styles.orederNowButtonText}>Order Now</Text>
          </View>
            </TouchableOpacity>
         
          <Text style={styles.priceText}>₹{data.price}</Text>
        </View>

        <View style={styles.bookmarkContainer}>
          <Image style={styles.bookmarkIcon} source={imagePath.bookmark_icon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {
    height: moderateVerticalScale(300),
    width: width,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  innerContainer: {
    borderRadius: 15,
    height: moderateVerticalScale(290),
    width: width / 1.05,
    backgroundColor: colors.white,
    elevation: 10,
    overflow: 'hidden',
  },

  productImage: {
    height: moderateVerticalScale(200),
    width: '100%',
    resizeMode: 'cover',
  },
  productDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  prductName: {
    ...commonStyles.futuraBtHeavyFont16,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  produtRating: {
    ...commonStyles.futuraBtHeavyFont16,
    color: colors.white,
  },
  ratingContainer: {
    backgroundColor: colors.green,
    paddingLeft: 10,
    paddingRight: 6,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
  },
  bookmarkContainer: {
    position: 'absolute',
    height: moderateVerticalScale(40),
    width: moderateVerticalScale(40),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateVerticalScale(100),
    end: 10,
    top: 10,
  },
  bookmarkIcon: {
    height: moderateVerticalScale(30),
    width: moderateVerticalScale(30),
  },
  orderButtonContainer: {
    height: moderateVerticalScale(30),
    width: moderateVerticalScale(100),
    backgroundColor: colors.textBlue,
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 8,
    borderRadius: 5,
  },
  orederNowButtonText: {
    ...commonStyles.futuraBtHeavyFont16,
    color: colors.white,
  },
  prcieTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  priceText: {
    ...commonStyles.futuraBtHeavyFont16,
    marginHorizontal: 20,
  },
});
