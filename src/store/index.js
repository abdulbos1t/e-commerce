import { createStore } from 'vuex'
import Service from '@/Services/Service'


export default createStore({
  state: {
    productItems: [],
    cart: [],
    cartItems: []
  },
 
  mutations: {
    SET_PRODUCT_ITEMS(state, data) {
      state.productItems = data
    },
    SET_CART_ITEMS(state, data) {
      state.cart = data;
    },
    UPDATE_CART(state, data){
      state.cart = data
    }
  },
  actions: {
    fetchProductItems({commit}){
      Service.getProductItems().then(({data}) => {
        commit("SET_PRODUCT_ITEMS", data)
      })
    },
    addToCart({commit}, pr){
      Service.postCartItems(pr).then( res => {
        commit("UPDATE_CART", res.data)
      })
    },
    fetchCartItems({commit},){
      Service.getCartItems().then( res => {
        commit("SET_CART_ITEMS", res.data)
      })
    }
  },
})
