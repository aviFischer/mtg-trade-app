import initialState from './initialState'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_CARD_TO_WISHLIST':
      var newWishlist = Array.from(state.wishlist);
      newWishlist.push(payload.card);
      return {
        ...state,
        wishlist: newWishlist,
      };

    case 'REMOVE_CARD_FROM_WISHLIST':
      newWishlist = Array.from(state.wishlist);
      newWishlist.splice(payload.index, 1);
      return {
        ...state,
        wishlist: newWishlist,
      };

    case 'DECREMENT_CARD_ON_WISHLIST':
      newWishlist = Array.from(state.wishlist);
      if(newWishlist[payload.index].quantity === 1){
        newWishlist.splice(payload.index, 1);
      } else {
        newWishlist[payload.index].quantity --;
      }
      return {
        ...state,
        wishlist: newWishlist,
      };

    case 'IMCREMENT_CARD_ON_WISHLIST':
      newWishlist = Array.from(state.wishlist);
      newWishlist[payload.index].quantity ++;
      return {
        ...state,
        wishlist: newWishlist,
      }

    case 'CLEAR_WISHLIST':
      return {
        ...state,
        wishlist: [],
      }

    default:
      return state;
  }
}