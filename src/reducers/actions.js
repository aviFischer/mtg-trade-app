const actions = {
  addCardToWishlist: (card) => ({
    type: 'ADD_CARD_TO_WISHLIST',
    payload: { card },
  }),

  removeCardFromWishlist: (index) => ({
    type: 'REMOVE_CARD_FROM_WISHLIST',
    payload: { index },
  }),

  decrementCardOnWishlist: (index) => ({
    type: 'DECREMENT_CARD_ON_WISHLIST',
    payload: { index },
  }),

  incrementCardOnWishlist: (index) => ({
    type: 'IMCREMENT_CARD_ON_WISHLIST',
    payload: { index },
  }),

  clearWishlist: () => ({
    type: 'CLEAR_WISHLIST',
    payload: {},
  }),
}

export default actions