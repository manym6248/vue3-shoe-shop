import axios from "../../axios.congfig";
const state = {
    Product:[],
    StoreProducts:[],
    cart:[],
};
 const getters = {
    // sbad kharid

    cartItem(state){
      let itemcart = state.cart.map(itemid => state.Product.find(product => product.id ===itemid))
      console.log(itemcart);
      return Array.from(new Set(itemcart));
    },









    product(state){
        const product = state.StoreProducts;
        return product;

    },
    MPrice(state){
        return state.StoreProducts.filter(item => item.price < 100 );
    },
    maxPrice(state){
        return state.StoreProducts.filter(item => item.price > 500 );
    }
 };
 const mutations = {
    'ALL_PRODUCTS'(state, payload){
        state.Product= [...payload]
    },
    'STORE_PRODUCTS'(state, payload){
        state.StoreProducts= [...payload]
    },
    'GATEGORY_PRODUCTS'(state, payload){
        state.StoreProducts= [...payload]
    },
    'ADD_TO_CART'(state,payload){
        state.cart.push(payload)
       
    }

 };
 const actions = {
    AllProducts({commit}){

        axios.get('/products').then(res => commit('ALL_PRODUCTS',res.data))
    },
    getStoreProduct({commit},payload){
        axios.get('/products?sort=desc').then(res => commit('STORE_PRODUCTS',res.data))
    },
    getGategoryProduct({commit},payload){
        axios.get(`/products/category/${payload}`).then(res => commit('GATEGORY_PRODUCTS',res.data))
    }
 };
 export default {
    state, getters ,mutations, actions
 }
