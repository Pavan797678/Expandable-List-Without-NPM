import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  textScale,
} from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles, {hitSlopProp} from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';

const TextInputWithLabel = ({
  label,
  onChangeText,
  value,
  active = false,
  secureTextEntry = false,
  rightIcon,
  customTextStyle = {},
  placeholder = '',
  onPress = () => {},
  onPressRightIcon = () => {},
  ...rest
}) => {
  let currentColor = active ? colors.themeColor : colors.textGrey;
  return (
    <View style={styles.container}>
      <Text
        style={{
          ...commonStyles.fontSize14,
          color: currentColor,
          marginBottom: moderateVerticalScale(7),
        }}>
        {label}
      </Text>
      <View style={styles.textInputContainer}>
        <TextInput
        selectionColor={colors.themeColor}
          {...rest}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          // onFocus={onFocus}
          style={{
            width: '100%',
            ...styles.textInput,
            borderColor: currentColor,
            ...customTextStyle,
            borderRadius:5
          }}
          onChangeText={onChangeText}
          value={value}
        />
        {!!rightIcon && (
          <TouchableOpacity
            hitSlop={hitSlopProp}
            onPress={onPressRightIcon}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 6,
            }}>
            <Image source={rightIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextInputWithLabel;

const styles = StyleSheet.create({
  container: {
    marginBottom: moderateVerticalScale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.themeMain,
    height: moderateVerticalScale(39),
    fontSize: moderateVerticalScale(17.5),
    fontFamily: fontFamily.regular,
    paddingVertical: 0,
    paddingHorizontal: moderateVerticalScale(16),
    textAlignVertical: 'center',
  },
  textInputContainer: {width: '68%'},
});
