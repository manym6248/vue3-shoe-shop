import axios from "../../axios.congfig";
const state = {
    Product:[],
    StoreProducts:[],
    cart:[],
    toast: false,
    toastText:"",
};
 const getters = {
    product(state){
        const product = state.StoreProducts;
        return product;

    },




    // sbad kharid

    totalprice(state){
    const priceItems = state.cart.map(item=>(item.price * item.quntity) - ((item.price * item.quntity) * (((item.id*6)/2)/100)));
    let sum = 0;
    for (const i in priceItems) {
    sum += priceItems[i];
  }
      return sum
    },
    totalcartitem(state){
    const totalcartitem = state.cart.map(item=> item.quntity) ;
    let sum = 0;
    for (const i in totalcartitem) {
    sum += totalcartitem[i];
  }
      return sum
    },


   

    // filters-products
    MPrice(state){
        return state.StoreProducts.filter(item => item.price < 100 );
    },
    maxPrice(state){
        return state.StoreProducts.filter(item => item.price > 500 );
    }
 };
 const mutations = {
    
    'TOAST_TRUE'(state, payload){
        state.toast = true
        state.toastText = payload
        setTimeout(() => {
            state.toast = false
        }, 1500);
       
    },
    'TOAST_FALSE'(state){state.toast = false},
    'ALL_PRODUCTS'(state, payload){
        state.Product= [...payload]
        state.StoreProducts= [...payload]
    },
    'STORE_PRODUCTS'(state, payload){
        state.StoreProducts= [...payload]
    },
    'GATEGORY_PRODUCTS'(state, payload){
        state.StoreProducts= [...payload]
    },
    'ADD_TO_CART'(state,payload){
      if(!state.cart.find(item =>item.id === payload.id)){
        payload.quntity = 1
        payload.Discount = (payload.id*6)/2
         
        state.cart.push(payload)
      }else{
        const i = state.cart.findIndex(item => item.id === payload.id);
        state.cart[i].quntity++;
      }
       
    },
    'MINUS_FROM_CART'(state,payload){
      
        const i = state.cart.findIndex(item => item.id === payload.id);
        state.cart[i].quntity--;
      
       
    },
    'REMOVE_FROM_CART'(state,payload){
       const items = state.cart.filter(item =>item.id !== payload.id)
       state.cart=[...items]
         
        },

        /////nazarat
        'ADD_TO_COMMENTS'(state,payload){
                    console.log(payload);
              const i = state.Product.findIndex(item => item.id === payload.item.id);
              state.Product[i].payload.Comment;
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
