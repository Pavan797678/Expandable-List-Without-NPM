import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {moderateVerticalScale} from '../styles/responsiveSize';

export default function RadioButton({numberOfUserType, selectUserType, value}) {
  return (
    <View>
      {numberOfUserType.map(res => {
        return (
          <View key={res.key} style={styles.container}>
            <Text style={styles.radioText}>{res.text}</Text>
            <TouchableOpacity
              style={styles.radioCircle}
              onPress={() => {
                selectUserType(res.key);
              }}>
              {value === res.key && <View style={styles.selectedRb} />}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: moderateVerticalScale(10),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioText: {
    ...commonStyles.futuraBtHeavyFont16,
    marginRight: 35,
  },
  radioCircle: {
    height: moderateVerticalScale(20),
    width: moderateVerticalScale(20),
    borderRadius: moderateVerticalScale(100),
    borderWidth: 2,
    borderColor: colors.themeColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: moderateVerticalScale(12),
    height: moderateVerticalScale(12),
    borderRadius: moderateVerticalScale(50),
    backgroundColor: colors.themeColor,
  },
});
