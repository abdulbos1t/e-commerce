import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/abdulbos1t/db.json'
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
    postCart(pr){
        return api.post('/cart/',  pr)
    },
    putCartItems(id, pr){
        return api.put('/cart/' + id, pr)
    },
    deleteProducts(id){
        return api.delete('/cart/' + id)
    }
}