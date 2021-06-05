import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ButtonWithImage from '../../Components/ButtonWithImage';
import RadioButton from '../../Components/RadioButton';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import styles from './styles';


import {showMessage, hideMessage} from 'react-native-flash-message';
import actions from '../../redux/actions';
import validator from '../../utils/validations';

export default class Register extends Component {
  state = {
    useremail: '',
    userpassword: '',
    userTypeValue:0,
    radioButtonGroupCollection: [
      {
        key: 0,
        text: 'Customer',
      },
      {
        key: 1,
        text: 'Provider',
      },
      {
        key: 2,
        text: 'Delivery man',
      },
    ],
  };
  _onChangeText(key) {
    return value => {
      this.setState({
        [key]: value,
      });
    };
  }

  isValidData = () => {
    const {useremail,userpassword} = this.state;
    const error = validator({
      useremail: useremail,
      userpassword:userpassword
    });
    if (error) {
      showMessage({
        type: 'danger',
        message:error,
        icon: 'danger',
      });
      return false;
    }
    return true;
  };

  register = () => {
    const {useremail, userpassword,userTypeValue} = this.state;

    if (this.isValidData()) {
      actions
        .signUp({
         email: useremail,
         password: userpassword,
         userType:userTypeValue
        })
        .then(res => {
          console.log(res);
          showMessage({
            type: 'success',
            message: 'Account Created Successfully',
            icon: 'success',
          });
        })
        .catch(error => {
          console.log(error);
        });
    } 
  };


  _selectUserType = (value)=>{
this.setState({
  userTypeValue:value
})
  }

  render() {
    const {radioButtonGroupCollection,userTypeValue} = this.state;
    return (
      <WrapperContainer statusBarColor={colors.white}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <View style={styles.backArrowImageContainer}>
              <Image
                style={styles.backArrowImage}
                source={imagePath.back_arrow}
              />
            </View>

            <View style={styles.screenTitleText}>
              <Text style={styles.screenTitleText}>{strings.SIGN_UP}</Text>
            </View>
          </View>
          <View style={styles.loginContainer}>
            <TextInputWithLabel
              label={strings.EMAIL}
              placeholder={strings.ENTER_EMAIL}
              onChangeText={this._onChangeText('useremail')}
            />
            <TextInputWithLabel
              label={strings.PASSWORD}
              placeholder={strings.ENTER_PASSWORD}
              onChangeText={this._onChangeText('userpassword')}
            />
            <View style={styles.radioGroupContainer}>
              <RadioButton numberOfUserType={radioButtonGroupCollection} selectUserType={this._selectUserType} value={userTypeValue}/>
            </View>
            <View style={styles.loginButtonContainer}>
              <ButtonWithImage
                buttonText={strings.SIGN_UP}
                bgColor={colors.themeColor}
                isImageVisiable={false}
                width={300}
                btnTextColor={colors.white}
                onUserPress={this.register}
              />
            </View>
            <TouchableOpacity onPress={this._goToRegisterScreen}>
              <Text style={styles.alreadyHaveAnAccountText}>
                {strings.ALREADY_HAVE_AN_ACCOUNT}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </WrapperContainer>
    );
  }
}
