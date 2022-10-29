import { createStore } from 'vuex'
import Service from '@/Services/Service'


export default createStore({
  state: {
    productItems: [],
    cart: [],
    cartItems: [],
    filteredCartItems: []
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
    addToCart({state}, pr){
      let item = state.cart.find(elem => elem.id === pr.id);
      if(item === undefined) {
        Service.postCart({
          ...pr,
          quantity: 1
        })
      } else{
        if(pr.quantity < pr.amount){
          Service.putCartItems( pr.id, {
            ...pr,
            quantity: pr.quantity += 1
          })
        } else{
          alert('tugadi')
        }
      }
    },
    fetchCartItems({commit},){
      Service.getCartItems().then( res => {
        commit("SET_CART_ITEMS", res.data)
      })
    },
    deleteProducts({}, id){
      Service.deleteProducts(id)
    }
  },
})
