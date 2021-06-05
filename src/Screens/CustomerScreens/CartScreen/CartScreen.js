import React, { Component } from 'react'
import { Text, View ,FlatList,Image,Alert ,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux';
import CartItem from '../../../Components/CartItem';
import actions from '../../../redux/actions';
import styles from './styles';



 class CartScreen extends Component {

state = {

}

ListEmptyView = () => {
    return (
      <View style={styles.MainContainer}>
        <Image
          style={styles.cartEmptyImage}
          source={{
            uri:
              'https://lh3.googleusercontent.com/proxy/tqRl5H91M5wDqvDFZu0f8TIwHM6A4418IqNz3WG9ngUs68bV66b3gbdhlTCmWjYo6QTsAU3eRvvjzWiXzc0',
          }}></Image>
      </View>
    );
  };

  componentDidMount() {
    actions.onInitialPrice(this.props.data);
  }

  productQuantityIncreament = id => {
    actions.onItemAdd(id);
  };

  productQuantityDecreament = id => {
    actions.onItemDecrement(id);
  };

  onDelete = id => {
    Alert.alert(
      'Alert Message',
      'are you sure you want to delete this product',
      [
        {
          text: 'Cancel',
          onPress: () => console.log(id),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            actions.ondelete(id);
          },
        },
      ],
      {cancelable: false},
    );
  };



    render() {
        return (
            <View style={styles.container}>
       
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.props.data}
          ListEmptyComponent={this.ListEmptyView}
          renderItem={({item, index}) => (
            <CartItem
              key={index}
              data={item}
              onDelete={this.onDelete}
              productQuantityDecreament={this.productQuantityDecreament}
              productQuantityIncreament={this.productQuantityIncreament}
            />
          )}
        />
        <TouchableOpacity>
          {this.state.isVisible ? (
            <View style={styles.buyNowButtonView}>
              <Text style={styles.textStyle}>
                Place Order:{this.props.price}
              </Text>
            </View>
          ) : null}
        </TouchableOpacity>
      </View>
        )
    }
}

const mapStateToProps = state => {
    return {
      data: state.cart.todo,
      price: state.cart.total,
    };
  };

  export default connect(mapStateToProps)(CartScreen);