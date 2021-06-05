import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import Header from '../../../Components/Header';
import ProductList from '../../../Components/ProductList';
import navigationStrings from '../../../constants/navigationStrings';
import actions from '../../../redux/actions';
import colors from '../../../styles/colors';
import styles from './styles';

class Order extends Component {
  state = {
    brandedItems: [
      {
        id: 0,
        name: 'Gajar ka Halwa',
        price: 100,
        quantity: 0,
        rating: '5.0*',
        image:
          'https://t3.ftcdn.net/jpg/02/38/99/04/360_F_238990469_F7WsAui3NSRdLrx0rZ5pAYv3WHowwF02.jpg',
      },
      {
        id: 1,
        name: 'GulabJamun',
        price: 100,
        quantity: 0,
        rating: '3.0*',
        image: 'https://wallpapercave.com/wp/wp2157160.jpg',
      },
      {
        id: 2,
        name: 'Rasmalai',
        price: 100,
        quantity: 0,
        rating: '4.5*',
        image:
          'https://i2.wp.com/www.rasoimenu.com/wp-content/uploads/2015/07/Dates-Rasmalai-Recipe.jpg?fit=1920%2C1080&ssl=1',
      },
      {
        id: 3,
        name: 'Pizza',
        price: 100,
        quantity: 0,
        rating: '3.9*',
        image: 'https://wallpaperaccess.com/full/866645.jpg',
      },
      {
        id: 4,
        name: 'Hamburger',
        price: 100,
        quantity: 0,
        rating: '4.6*',
        image:
          'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFtYnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      },
      {
        id: 5,
        name: 'Chowmein',
        price: 100,
        quantity: 0,
        rating: '2.3*',
        image:
          'https://5.imimg.com/data5/IG/FO/GLADMIN-24813994/chowmein-500x500.png',
      },
      {
        id: 6,
        name: 'MotiPak',
        price: 100,
        quantity: 0,
        rating: '1.2*',
        image:
          'https://5.imimg.com/data5/UO/PW/MY-29970631/motipak-sweet-500x500.png',
      },
      {
        id: 7,
        name: 'Rasgulla',
        price: 100,
        quantity: 0,
        rating: '2.1*',
        image:
          'https://media.istockphoto.com/photos/indian-rasgulla-or-dry-rosogulla-dessertsweet-served-in-a-bowl-focus-picture-id1048747098?k=6&m=1048747098&s=612x612&w=0&h=0WuX0C7biQof2tVxH1pdg_M-CL30HDNl9_lhd4YDrso=',
      },
      {
        id: 8,
        name: 'Kaju Pista Barfi',
        price: 100,
        quantity: 0,
        rating: '2.5*',
        image:
          'https://www.teahub.io/photos/full/187-1874717_kaju-pista-barfi.jpg',
      },
      {
        id: 9,
        name: 'Dahi Vada with Chutney',
        price: 100,
        quantity: 0,
        rating: '3.4*',
        image: 'https://www.bawarchi.com/uploads/oetthyfhidfdd_bigger.jpg',
      },
    ],
  };

  _addYourOrderItem = orderItemData => {
    actions.add(orderItemData);
  };
  _goToCartScreen = () => {
    const {navigation} = this.props;
    navigation.navigate(navigationStrings.CART_SCREEN);
  };

  spaceView = () => {
    return <View style={{height: 10, backgroundColor: colors.white}}></View>;
  };

  render() {
    const {brandedItems} = this.state;

    return (
      <View style={{flex: 1}}>
        <Header
          title={'Order'}
          searchVisible={true}
          goToCartScreen={this._goToCartScreen}
        />

        <FlatList
          data={brandedItems}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={this.spaceView}
          renderItem={({item, index}) => {
            return (
              <ProductList
                data={item}
                addItemForOrder={this._addYourOrderItem}
              />
            );
          }}
        />
      </View>
    );
  }
}

export default Order;
