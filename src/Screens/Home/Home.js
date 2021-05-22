import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import Header from '../../Components/Header';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import ButtonWithImage from '../../Components/ButtonWithImage';
import {connect} from 'react-redux'
import navigationStrings from '../../constants/navigationStrings';


class Home extends Component {
  state = {
    placeholder: 'Customer Name(optional)',
    placeholder1: 'Mobile Number(optional)',
    placeholder2: 'Customer Address(optional)',
    placeholder3: 'Customer GST no(optional)',
    placeholder4: 'Product/Service Name',
    placeholder5: 'Enter Price',
    placeholder6: 'Units sold',
    placeholder7: 'S.No of Product',
    id:0,
    customerName: '',
    contactNumber: '',
    userAddress: '',
    gstNumber: '',
    itemName: '',
    itemPrice: 0,
    itemQuantity: '',
    imeiNumber: '',
    userAdditionalInfoView: false,
    date: new Date(),
    showDateModal: false,
  };
  currentDate =
    this.state.date.getDate() +
    '/' +
    (this.state.date.getMonth() + 1) +
    '/' +
    this.state.date.getFullYear();


    _onChangeText(key) {
      return value => {
        this.setState({
          [key]: value,
        });
      };
    }


  addItemInBill = () => {
    const {
      customerName,
      contactNumber,
      userAddress,
      gstNumber,
      itemName,
      itemPrice,
      itemQuantity,
      imeiNumber,
      date,
      id,
    } = this.state;

    const billDate =
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

    const billDetailsCollectionObject = {};
    billDetailsCollectionObject['id'] = id;
    billDetailsCollectionObject['customerName'] = customerName;
    billDetailsCollectionObject['contactNumber'] = contactNumber;
    billDetailsCollectionObject['userAddress'] = userAddress;
    billDetailsCollectionObject['gstNumber'] = gstNumber;
    billDetailsCollectionObject['itemName'] = itemName;
    billDetailsCollectionObject['itemPrice'] = itemPrice;
    billDetailsCollectionObject['itemQuantity'] = itemQuantity;
    billDetailsCollectionObject['imeiNumber'] = imeiNumber;
    billDetailsCollectionObject['date'] = billDate;
    this.setState({
      id: id + 1,
    });
    actions.moneyAdd(billDetailsCollectionObject);
  };

  userAdditionalInformation = () => {
    const {userAdditionalInfoView} = this.state;
    this.setState({
      userAdditionalInfoView: userAdditionalInfoView ? false : true,
    });
  };

  showDatepicker = () => {
   
    const {showDateModal} = this.state;
    
    this.setState({
      showDateModal: showDateModal ? false : true,
    });
   
  };
  onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    this.setState({
      date: currentDate,
    });
  };

  goToBillScreen =()=>{
    this.props.navigation.navigate(navigationStrings.BILLSCREEN)
  }
  

  render() {
    const {
      placeholder,
      placeholder1,
      placeholder2,
      placeholder3,
      placeholder4,
      placeholder5,
      placeholder6,
      placeholder7,
      userAdditionalInfoView,
      showDateModal,
      date,
    } = this.state;
    const {price} = this.props;
    return (
      <WrapperContainer statusBarColor={colors.white}>
        <Header />
        <ScrollView>
          <View>
            <View style={styles.userInfoContainer}>
              <View style={styles.userInfoInnerContainer}>
                <View style={styles.userInfoEndContainer}>
                  <View style={styles.additionalUserInfoContainer}>
                    <Text style={styles.billNumerText}>
                      {strings.BILLNUMBER}:1
                    </Text>
                    <Image style={styles.iconStyles} source={imagePath.edit} />
                  </View>
                  <TouchableOpacity onPress={this.showDatepicker}>
                    <View style={styles.additionalUserInfoContainer}>
                      <Text style={styles.billNumerText}>
                        {strings.BILLDATE}:{this.currentDate}
                      </Text>

                      <Image
                        style={styles.iconStyles}
                        source={imagePath.calender}
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <TextInputWithLabel
                  label={strings.CUSTOMER}
                  placeholder={placeholder}
                  onChangeText={this._onChangeText('customerName')}
                />
                <TextInputWithLabel
                  label={strings.CONTECT}
                  placeholder={placeholder1}
                  onChangeText={this._onChangeText('contactNumber')}
                />
                <TouchableOpacity onPress={this.userAdditionalInformation}>
                  <View style={styles.additionalUserInfoContainer}>
                    <Text>{strings.ADDITIONALINFORMATION}</Text>
                    {userAdditionalInfoView ? (
                      <Image
                        style={styles.iconStyles}
                        source={imagePath.remove}
                      />
                    ) : (
                      <Image style={styles.iconStyles} source={imagePath.add} />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
              {userAdditionalInfoView ? (
                <View style={styles.additionalInfoViewContainer}>
                  <View style={styles.additionalInfoViewInnerContainer}>
                    <TextInputWithLabel
                      label={strings.ADDRESS}
                      placeholder={placeholder2}
                      onChangeText={this._onChangeText('userAddress')}
                    />
                    <TextInputWithLabel
                      label={strings.GSTDETAILS}
                      placeholder={placeholder3}
                      onChangeText={this._onChangeText('gstNumber')}
                    />
                  </View>
                </View>
              ) : (
                <></>
              )}
            </View>
            <View style={styles.userInfoContainer}>
              <View style={styles.itemContainer}>
                <View style={styles.userInfoEndContainer}></View>

                <TextInputWithLabel
                  label={strings.ITEMNAME}
                  placeholder={placeholder4}
                  onChangeText={this._onChangeText('itemName')}
                />
                <TextInputWithLabel
                  label={strings.PRICE}
                  placeholder={placeholder5}
                  onChangeText={this._onChangeText('itemPrice')}
                />
                <TextInputWithLabel
                  label={strings.QUANTITY}
                  placeholder={placeholder6}
                  onChangeText={this._onChangeText('itemQuantity')}
                />
                <TextInputWithLabel
                  label={strings.IMEINUMBER}
                  placeholder={placeholder7}
                  onChangeText={this._onChangeText('imeiNumber')}
                />
                <ButtonWithImage
                  bgColor={colors.themeColor}
                  buttonText={'Add Item'}
                  btnTextColor={colors.white}
                  onUserPress={this.addItemInBill}
                />
              </View>
            </View>

            <View style={styles.priceContainer}>
              <View style={styles.userInfoEndContainer}></View>

              <Text style={styles.totalBillPrice}>Total(RS):{price}</Text>
              <ButtonWithImage
                bgColor={colors.themeColor}
                buttonText={'MAKE Bill'}
                btnTextColor={colors.white}
                onUserPress={this.goToBillScreen}
              />
            </View>

            {showDateModal ? (
              <DateTimePicker
                value={date}
                is24Hour={true}
                display="spinner"
                onChange={this.onDateChange}
              />
            ):(<></>)}
          </View>
        </ScrollView>
      </WrapperContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    price: state.bill.totalBillPrice,
  };
};

export default connect(mapStateToProps)(Home);
