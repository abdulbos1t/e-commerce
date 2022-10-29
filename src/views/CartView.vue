<template>
  <div class="cart-page">
    <div class="container">
      <h1 class="cart-inner">Моя корзина</h1>
      <p class="amount-product">{{cart.length}} товара</p>
      <div class="carts" v-if="quantityCart">
        <div class="carts-title">
          <div class="carts-title__item product">Товар</div>
          <div class="carts-title__item quantity">Количество</div>
          <div class="carts-title__item price">Сумма</div>
          <div class="carts-title__item remove">Удалить</div>
        </div>
        <div class="cart-products" v-for="cartItem in cart" :key="cartItem.id">
          <div class="cart-products__details">
            <div class="cart-products__details_img">
              <img :src="cartItem.image" alt="" />
            </div>
            <div class="cart-products__details_text">
              <h3 class="title">{{cartItem.name}}</h3>
              <p>В Складе: {{cartItem.amount}} шт</p>
            </div>
          </div>

          <div class="cart-products__quantity">
            <button class="inc">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.57626 5H10.4079C11.0094 5 11.5 5.49065 11.5 6.07626C11.5 6.6777 11.0094 7.16834 10.4079 7.16834H1.57626C0.990647 7.16834 0.5 6.6777 0.5 6.07626C0.5 5.49065 0.990647 5 1.57626 5Z" fill="#333333"></path></svg>
            </button>
            <h3>{{cartItem.quantity}}</h3>
            <button class="dec">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10.3561 4.84473H7.14391V1.63254C7.14391 1.00859 6.6355 0.488634 6 0.500189C5.37605 0.500189 4.86765 1.00859 4.85609 1.6441V4.85628H1.64391C1.01996 4.85628 0.5 5.36468 0.5 6.00019C0.5 6.31216 0.627101 6.60103 0.835084 6.80901C1.04307 7.017 1.32038 7.1441 1.64391 7.1441H4.85609V10.3563C4.85609 10.6683 4.98319 10.9571 5.19118 11.1651C5.39916 11.3731 5.67647 11.5002 6 11.5002C6.62395 11.5002 7.13235 10.9918 7.14391 10.3563V7.1441H10.3561C10.98 7.1441 11.5 6.63569 11.5 6.00019C11.4884 5.36468 10.98 4.85628 10.3561 4.84473Z" fill="#333333"></path></svg>
            </button>
          </div>

          <div class="cart-products__price">
            <p>{{cartItem.productPrice.disPrice}} $</p>
          </div>
          {{cartItem.id}}
          <div class="cart-products__remove">
            <button class="remove-btn" @click.prevent="deleteProducti(cartItem.id)">
                <svg data-v-11f97b12="" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-11f97b12="" d="M7.73438 3.95312H7.5625C7.65703 3.95312 7.73438 3.87578 7.73438 3.78125V3.95312H14.2656V3.78125C14.2656 3.87578 14.343 3.95312 14.4375 3.95312H14.2656V5.5H15.8125V3.78125C15.8125 3.02285 15.1959 2.40625 14.4375 2.40625H7.5625C6.8041 2.40625 6.1875 3.02285 6.1875 3.78125V5.5H7.73438V3.95312ZM18.5625 5.5H3.4375C3.05723 5.5 2.75 5.80723 2.75 6.1875V6.875C2.75 6.96953 2.82734 7.04688 2.92188 7.04688H4.21953L4.7502 18.2832C4.78457 19.0158 5.39043 19.5938 6.12305 19.5938H15.877C16.6117 19.5938 17.2154 19.018 17.2498 18.2832L17.7805 7.04688H19.0781C19.1727 7.04688 19.25 6.96953 19.25 6.875V6.1875C19.25 5.80723 18.9428 5.5 18.5625 5.5ZM15.7115 18.0469H6.28848L5.76855 7.04688H16.2314L15.7115 18.0469Z" fill="#5D6C7B"></path></svg>
            </button>
          </div>

        </div>
      </div>
      <div v-else class="empty__cart">
        <svg   data-v-e0853b6a="" width="134" height="85" viewBox="0 0 134 85" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-e0853b6a="" d="M67 85C104.003 85 134 78.5026 134 70.4878C134 62.4729 104.003 55.9756 67 55.9756C29.9969 55.9756 0 62.4729 0 70.4878C0 78.5026 29.9969 85 67 85Z" fill="white"></path><path data-v-e0853b6a="" d="M115.156 28.5269L93.9131 4.68129C92.8934 3.05593 91.4048 2.07324 89.8365 2.07324H44.1635C42.5953 2.07324 41.1066 3.05593 40.0869 4.67922L18.8438 28.529V47.683H115.156V28.5269Z" stroke="#EAEBED"></path><path data-v-e0853b6a="" d="M87.1272 35.1009C87.1272 31.7734 89.2084 29.0265 91.79 29.0244H115.156V66.6255C115.156 71.0268 112.393 74.6342 108.98 74.6342H25.0203C21.6075 74.6342 18.8438 71.0248 18.8438 66.6255V29.0244H42.21C44.7916 29.0244 46.8728 31.7672 46.8728 35.0947V35.1403C46.8728 38.4677 48.977 41.1545 51.5565 41.1545H82.4435C85.023 41.1545 87.1272 38.4428 87.1272 35.1154V35.1009Z" fill="white" stroke="#EAEBED"></path></svg>
        <h1>Ваша корзина пуста</h1>
        <p>Добавьте в нее товары из каталога</p>
        <router-link to="/">Перейти в каталог</router-link>
      </div>
    </div>
    

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch("fetchProductItems");
    this.$store.dispatch("fetchCartItems");
  },
  methods: {
    // addProduct(pr) {
    //   this.$store.dispatch("addToCart", pr);
    //   this.$store.dispatch("fetchCartItems");
    // },
    methods: {
		
	},
    deleteProducti(id) {
      this.$store.dispatch("deleteProducts", id);
      this.$store.dispatch("fetchProductItems");
      this.$store.dispatch("fetchCartItems");
    },
  },
  computed: {
    ...mapState(["productItems", "cart", "cartItems"]),
    quantityCart(){
      let all = 0;
      this.cart.forEach(element => {
        all += element.quantity;
      });
      return all;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>