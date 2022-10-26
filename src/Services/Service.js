import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export default {
    getProductItems(){
        return api.get('/products')
    },
    getCartItems(){
        return api.get('/cart')
    },
    postCartItems(pr){
        return api.post('/cart', pr)
    },
}