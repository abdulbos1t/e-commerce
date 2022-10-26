<template>
  
  <div class="home">
    <div class="carousel">
      <swiper
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :mousewheel="true"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <img src="/png/iphone.webp" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="/png/s21.webp" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="dostavka" src="/png/dostavka.png" alt="">
      </swiper-slide>
    </swiper>
    </div>
    {{cart}}
    {{cartItems}}
    <div class="container products-container">
        <div class="products">
          <h1 class="title">Все Продукты</h1>
          <swiper class="products-swiper"
          :slidesPerView="4"
          :spaceBetween="30"
          :loop="true"
          :mousewheel="true"
          :navigation="true"
          :breakpoints="{
             '0': {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            '370': {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
             '432': {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
             '568': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
             '695': {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
             '748': {
              slidesPerView: 2.7,
              spaceBetween: 20,
            },
            '825': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '975': {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
            '1130': {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }"
          :modules="modules"
          >
            <swiper-slide v-for="product in productItems" :key="product.id">
              <div class="swiper-slide__img">
                <span class="ind xit" v-if="product.isXit">ХИТ</span>
                <span class="ind new" v-if="product.isNew">Новинка</span>
                <button class="comparise-btn">
                  <svg data-v-22f52f21="" version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g data-v-22f52f21="" transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path data-v-22f52f21="" d="M2495 4786 c-37 -17 -70 -52 -84 -89 -6 -16 -11 -103 -11 -203 l0
                -174 -732 0 c-693 0 -735 -1 -774 -19 -23 -10 -52 -34 -65 -52 l-24 -34 -3
                -362 -3 -363 -27 -6 c-15 -4 -63 -25 -107 -48 -114 -58 -217 -162 -272 -276
                -54 -111 -68 -173 -67 -295 1 -84 5 -114 30 -185 67 -193 210 -336 404 -404
                76 -27 97 -30 200 -30 99 0 126 4 194 27 132 46 218 106 303 212 267 334 128
                833 -274 986 l-63 24 0 253 0 252 640 0 640 0 0 -1324 0 -1324 -230 -398
                c-127 -220 -235 -415 -242 -436 -23 -76 25 -167 100 -188 25 -8 209 -10 554
                -8 504 3 517 4 544 24 44 32 66 68 71 116 6 55 13 43 -261 517 l-216 373 0
                1324 0 1324 640 0 640 0 0 -255 c0 -212 -2 -255 -14 -255 -8 0 -56 -21 -107
                -46 -420 -211 -478 -769 -110 -1064 118 -95 236 -135 396 -134 93 0 122 4 190
                28 198 68 340 210 409 406 25 71 29 101 30 185 1 121 -13 184 -65 291 -69 141
                -198 259 -346 315 l-62 24 -3 360 -3 360 -24 34 c-13 18 -42 42 -65 52 -39 18
                -81 19 -773 19 l-732 0 -3 189 c-3 207 -6 216 -70 264 -34 25 -113 32 -153 13z
                m-1420 -1613 c70 -23 155 -109 181 -183 55 -162 -14 -328 -165 -398 -79 -37
                -183 -37 -262 0 -117 54 -183 158 -183 288 0 90 22 147 84 214 88 95 206 122
                345 79z m3197 0 c64 -20 140 -90 175 -161 56 -114 29 -265 -62 -357 -121 -120
                -329 -120 -450 0 -115 116 -120 311 -9 434 89 99 207 128 346 84z m-1607
                -2363 l95 -165 -100 -3 c-55 -1 -145 -1 -200 0 l-100 3 97 168 c54 92 101 166
                105 165 5 -2 51 -77 103 -168z"></path></g></svg>
                </button>
                <img :src="product.image" alt="">
                <div class="in-stock">
                  <p>В Складе: {{product.amount}}</p>
                </div>
              </div>
              <div class="swiper-slide__wrapper">
                <h1 class="title">{{product.name}}</h1>
                <div class="swiper-slide__wrapper__options" v-for="productDetails in product.productDetails" :key="productDetails.id">
                  <div class="item">
                    <img src="/svg/accumulator.svg" alt="">
                    <span>{{productDetails.battery}}</span>
                  </div>
                  
                  <div class="item">
                    <img src="/svg/power.svg" alt="">
                    <span>{{productDetails.power}}</span>
                  </div>

                  <div class="item">
                    <img src="/svg/speedometer.svg" alt="">
                    <span>{{productDetails.speed}}</span>
                  </div>

                  <div class="item">
                    <img src="/svg/timer.svg" alt="">
                    <span>{{productDetails.hour}}</span>
                  </div>
                </div>
              </div>

              <div class="swiper-slide__price__options" >
                  <div class="prices" >
                    <span class="price">{{product.productPrice.price}} $</span>
                    <span class="discount-price">{{product.productPrice.disPrice}}</span>
                  </div>
                  <div class="options">
                    <button class="add-to-favorite">
                      <svg data-v-22f52f21="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-22f52f21="" d="M17.9951 5.51484C17.7344 4.90528 17.3586 4.35291 16.8886 3.88864C16.4182 3.42298 15.8637 3.05293 15.2551 2.79861C14.624 2.53385 13.9471 2.39833 13.2637 2.39992C12.305 2.39992 11.3696 2.66506 10.5568 3.16588C10.3623 3.28569 10.1775 3.41727 10.0025 3.56065C9.8275 3.41727 9.64276 3.28569 9.44829 3.16588C8.63542 2.66506 7.70004 2.39992 6.74132 2.39992C6.05096 2.39992 5.382 2.53347 4.74998 2.79861C4.13935 3.05393 3.58901 3.4212 3.11646 3.88864C2.64584 4.35239 2.2699 4.90489 2.00994 5.51484C1.73963 6.14922 1.60156 6.82287 1.60156 7.51617C1.60156 8.17019 1.7338 8.8517 1.99633 9.54499C2.21608 10.1244 2.53111 10.7254 2.93366 11.3322C3.57151 12.2926 4.44855 13.2943 5.53757 14.3097C7.34222 15.9929 9.12937 17.1555 9.20521 17.2027L9.6661 17.5012C9.87029 17.6328 10.1328 17.6328 10.337 17.5012L10.7979 17.2027C10.8737 17.1536 12.6589 15.9929 14.4655 14.3097C15.5545 13.2943 16.4316 12.2926 17.0694 11.3322C17.472 10.7254 17.789 10.1244 18.0068 9.54499C18.2693 8.8517 18.4015 8.17019 18.4015 7.51617C18.4035 6.82287 18.2654 6.14922 17.9951 5.51484ZM10.0025 15.9477C10.0025 15.9477 3.07951 11.4678 3.07951 7.51617C3.07951 5.51484 4.71886 3.89257 6.74132 3.89257C8.16287 3.89257 9.39579 4.69388 10.0025 5.86443C10.6093 4.69388 11.8422 3.89257 13.2637 3.89257C15.2862 3.89257 16.9255 5.51484 16.9255 7.51617C16.9255 11.4678 10.0025 15.9477 10.0025 15.9477Z" fill="#6F73EE"></path></svg>
                    </button>
                    <button class="add-to-card" @click.prevent="addProduct(product)">
                    <svg data-v-22f52f21="" version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g data-v-22f52f21="" transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path data-v-22f52f21="" d="M2393 4945 c-201 -36 -383 -134 -524 -283 -178 -185 -269 -417 -269
                    -683 l0 -99 -198 0 c-217 0 -276 -9 -366 -58 -104 -55 -201 -178 -235 -297
                    -12 -40 -141 -2667 -141 -2860 0 -55 6 -123 14 -151 44 -167 193 -307 364
                    -343 75 -16 2969 -16 3044 0 172 36 319 174 364 343 8 28 14 96 14 151 0 193
                    -129 2820 -141 2860 -34 119 -131 242 -235 297 -90 49 -150 58 -365 58 l-196
                    0 -6 138 c-8 208 -54 356 -162 517 -206 310 -596 476 -962 410z m302 -320
                    c181 -38 349 -168 433 -335 51 -102 72 -193 72 -317 l0 -93 -640 0 -640 0 0
                    93 c1 197 61 349 189 478 156 155 370 219 586 174z m1208 -1069 c46 -17 74
                    -40 94 -80 12 -24 28 -287 80 -1380 35 -743 62 -1389 61 -1436 -3 -99 -19
                    -128 -84 -160 -40 -20 -57 -20 -1494 -20 -1437 0 -1454 0 -1494 20 -66 33 -81
                    61 -84 165 -1 50 26 693 61 1431 71 1481 63 1391 136 1436 l36 23 1040 5 c572
                    3 1168 6 1325 7 219 2 294 -1 323 -11z"></path><path data-v-22f52f21="" d="M1692 3200 c-78 -48 -90 -124 -42 -272 48 -149 109 -247 230 -369
                    141 -142 262 -212 455 -264 95 -25 293 -31 398 -11 309 59 558 245 696 522 50
                    100 85 224 78 280 -9 80 -72 134 -157 134 -83 0 -138 -46 -160 -135 -45 -178
                    -163 -336 -313 -419 -197 -109 -441 -108 -635 4 -75 44 -181 148 -225 221 -21
                    35 -51 107 -68 160 -30 96 -53 131 -106 158 -35 18 -114 13 -151 -9z"></path></g></svg>
                    </button>
                  </div>
              </div>
            </swiper-slide>
          </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState} from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Mousewheel, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

  export default {
    name: 'home',
    components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [ Navigation, Mousewheel, Autoplay],
    };
  },
  created() {
    this.$store.dispatch("fetchProductItems");
    this.$store.dispatch("fetchCartItems");
  },
  methods: {
    addProduct(pr) {
      this.$store.dispatch("addToCart", pr);
    },
  },
  computed: {
      ...mapState([
        "productItems",
        "cart",
        "cartItems"
      ]),
  },
  }
</script>

<style lang="scss" scoped>

</style>