import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ButtonWithImage from '../../Components/ButtonWithImage';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import styles from './styles';
import {showMessage, hideMessage} from 'react-native-flash-message';
import actions from '../../redux/actions';
import validator from '../../utils/validations';

export default class Login extends Component {
  state = {
    useremail: '',
    userpassword: '',
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

  login= () => {
    const {useremail, userpassword} = this.state;

    if (this.isValidData()) {
      actions
        .login({
         email: useremail,
         password: userpassword,
        })
        .then(res => {
          console.log(res);
          showMessage({
            type: 'success',
            message: 'login successfully',
            icon: 'success',
          });
        })
        .catch(error => {
          console.log(error);
        });
    } 
  };


  _goToRegisterScreen = () => {
    const {navigation} = this.props;

    navigation.navigate(navigationStrings.REGISTER);
  };

  render() {
    return (
      <WrapperContainer statusBarColor={colors.white}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logoImage} source={imagePath.LOGO}></Image>
          </View>
          <View style={styles.loginContainer}>
            <View style={styles.screenTitleContainer}>
              <Text style={styles.screenTitleText}>{strings.SIGN_IN}</Text>
            </View>
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
            <View style={styles.loginButtonContainer}>
              <ButtonWithImage
                buttonText={strings.SIGN_IN}
                bgColor={colors.themeColor}
                isImageVisiable={false}
                width={300}
                btnTextColor={colors.white}
                onUserPress={this.login}
              />
            </View>
            <TouchableOpacity onPress={this._goToRegisterScreen}>
              <Text style={styles.alreadyHaveAnAccountText}>
                {strings.DID_NOT_HAVE_AN_ACCOUNT}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </WrapperContainer>
    );
  }
}
