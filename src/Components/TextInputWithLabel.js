import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '../styles/colors';




const TextInputWithLabel = ({
  label,
  onChangeText,
  value,
  active = false,
  secureTextEntry = false,
  rightIcon,
  customTextStyle = {},
  placeholder="",
  onPress = () => {},
  onPressRightIcon = () => {},
  ...rest
}) => {
  let currentColor = active ? 'black' : '';
  return (
    <View style={{marginBottom:15}}>
      <Text
        style={{
          fontSize:14,
          color: currentColor,
          marginBottom: 7,
        }}>
        {label}
      </Text>
      <View>
        <TextInput
          {...rest}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          selectionColor={colors.black}
          // onFocus={onFocus}
          style={{
           width:300,
            ...styles.textInput,
            borderColor: currentColor,
            ...customTextStyle,
          }}
          onChangeText={onChangeText}
          value={value}
        />
        {!!rightIcon && (
          <TouchableOpacity
            
            onPress={onPressRightIcon}
            style={{alignItems: 'center', justifyContent: 'center',marginLeft:6}}>
            <Image source={rightIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextInputWithLabel;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    height: 49,
    fontSize: 17.5,
       paddingVertical: 0,
    paddingHorizontal: 16,
    textAlignVertical: 'center',
  },
});
