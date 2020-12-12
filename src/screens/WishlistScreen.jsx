import React from 'react';
import { View, TouchableOpacity, Text, TextInput, ScrollView, Keyboard } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles/globalStyles';
import actions from '../reducers/actions';
import Card from '../components/card';
import cardList from '../card-list.json';

class WishlistScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      keyBoardOpen: false,
      autocompleteOptions: [],
    }
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.setState({ keyBoardOpen: true }));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.setState({ keyBoardOpen: false }));
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  findAutocompleteOptions(text) {
    return cardList.Cards.filter((currentValue, index, arr) => currentValue.startsWith(text))
  }

  renderCards() {
    var cardList = [];
    var i = 0;
    this.props.wishlist.forEach((card) => {
      cardList.push(<Card index={i} name={card.name} quantity={card.quantity} onPressIncrement={this.props.increment} onPressDecrement={this.props.decrement} onPressRemove={this.props.removeCard} key={i}/>)
      i ++;
    });
    return cardList;
  }

  onChangeText = (text) => {
    this.setState({ cardName: text });
    if (text.length > 2) console.log(this.findAutocompleteOptions(text));
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput placeholder='Card Name' placeholderTextColor={'#aaa'} textAlign={'center'}
          value={this.state.cardName} style={styles.textInput}
          onChangeText={(text) => this.onChangeText(text)}
        />
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}
            onPress={() => { if(this.state.cardName) this.props.addCard({name: this.state.cardName, quantity: 1}) }}>
            <Text style={styles.whiteText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.clear()}>
            <Text style={styles.whiteText}>Clear</Text>
          </TouchableOpacity>
        </View>
        <ScrollView 
          style={styles.box}
          scrollEnabled={true}
        >
          {this.renderCards()}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  wishlist: state.wishlist,
});

const mapDispatchToProps = (dispatch) => ({
  addCard: (card) => {
    dispatch(actions.addCardToWishlist(card));
  },
  removeCard: (index) => {
    dispatch(actions.removeCardFromWishlist(index));
  },
  increment: (index) => {
    dispatch(actions.incrementCardOnWishlist(index));
  },
  decrement: (index) => {
    dispatch(actions.decrementCardOnWishlist(index));
  },
  clear: () => {
    dispatch(actions.clearWishlist());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WishlistScreen);