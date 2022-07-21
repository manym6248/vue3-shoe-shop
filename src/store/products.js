import axios from "../../axios.congfig";
const state = {
    Product:[],
    StoreProducts:[],
    cart:[],
};
 const getters = {
    // sbad kharid

    cartItem(state){
      let itemcart = state.cart.map((itemid) => {
       let item =  state.Product.find(product => product.id ===itemid)
       item.count=+1
       item.Discount = (item.id*6)/2
       let  x = (item.price) * (((item.id*6)/2)/100)
       item.price = item.price - x.toFixed(2)
       return item;
    })
      return Array.from(new Set(itemcart));
    },



    totalprice(state){
      let totalprice = state.cart.map((itemid) => {
       let item =  state.Product.find(product => product.id ===itemid)
     
       return item.price;
    })
   
      return Array.from(new Set(totalprice));
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
