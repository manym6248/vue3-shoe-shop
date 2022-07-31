<template>
  <div>
    <div class="containr mt-4 pa-0">
      <slider1></slider1>
    </div>
    <article>
      <div class="containr mt-4 pa-0">
        <div class="row">
          <div class="col-12 col-xl-4 col-lg-4 col-md-12">
            <div class="slide2 bp-slide card shadow rounded-3">
              <slidebigcard></slidebigcard>
            </div>
            <div class="slide card shadow rounded-3">
              <slidecard></slidecard>
            </div>
          </div>
          <div class="col-4">
            <div class="slide card shadow rounded-3">
              <slidecard></slidecard>
            </div>
          </div>
          <div class="col-4">
            <div class="slide card shadow rounded-3">
              <slidecard></slidecard>
            </div>
          </div>
        </div>
      </div>
    </article>
    <article>
      <div class="containr mt-4 pa-0">
        <h3 class="header-bigcard">پر فروش ترین ها</h3>
      </div>
        
      <bigcard :items1="products1"></bigcard>
    </article>
    <article class="bg-SwiperSlider shadow-lg mt-4 pa-0">
      <div class="containr my-4 pa-0">
        <h3 class="header-Slider">تخفیف های ویژه</h3>
        <div class="row-SwiperSlider">
          <div class="col5">
            <div class="time">
              <h4>09:10:12:02</h4>
            </div>
            <h2>تخفیف های ویژه</h2>
          </div>
         
          <SwiperSlider :cols="3" :items="products2" />
        </div>
      </div>
    </article>
    <article>
      <div class="containr mt-4 pa-0">
        <div class="row">
          <div class="col-12 col-xl-6 col-lg-6 col-md-12">
            <div class="slide2 card shadow rounded-3">
              <slidebigcard></slidebigcard>
            </div>
          </div>
          <div class="col-6">
            <div class="slide card shadow rounded-3">
              <slidemediumcard></slidemediumcard>
            </div>
            <div class="slide card shadow rounded-3 mt-4">
              <slidemediumcard></slidemediumcard>
            </div>
          </div>
        </div>
      </div>
    </article>
    <article>
      <div class="containr mt-4 pa-0">
        <h3 class="header-bigcard">جدید ترین محصولات</h3>
      </div>
      <bigcard :items1="products3"></bigcard>
    </article>
    <article class="bg-SwiperSlider2 shadow-lg mt-4 pa-0">
      <div class="containr my-4 pa-0">
        <h3 class="header-Slider">دسته بندی</h3>
        <div class="row-SwiperSlider">
          <div class="col5">
            <div class="time">
              <h4>09:10:12:02</h4>
            </div>
            <h2>دسته بندی</h2>
          </div>
          <SwiperSlider :cols="3" :items="products2" />
        </div>
      </div>
    </article>
    <article class="mb-4">
      <div class="containr mt-4 pa-0">
        <h3 class="header-bigcard">جدید ترین محصولات</h3>
      </div>
      <bigcard :items1="products4"></bigcard>
    </article>
    <div class="load"  v-if="loading" >
      <div class="card  shadow">
        <loading></loading>
        <h5 class="pt-2 mb-0">در حال اتصال...</h5>
        <div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 101%"></div>
</div>
      </div>

    </div>
     <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | صحفه اصلی` : `SITE_NAME` }}</template>
  </metainfo>
  </div>
</template>

<script >
import axios from "../../axios.congfig";
import SwiperSlider from "./SwiperSlider.vue";
import bigcard from "../components/home/bigcard.vue";
import Slider1 from "./home/slider1.vue";
import slidecard from "./local/slidecard.vue";
import slidebigcard from "./local/slidebigcard.vue";
import slidemediumcard from "./local/slidemediumcard.vue";
import Loading from './local/loading.vue';
export default {
  

  components:{
    SwiperSlider,
    bigcard,
    Slider1,
    slidecard,
    slidebigcard,
    slidemediumcard,
    Loading
  },
  data() {
    return {
      products:[],
      loading:true,
    }
  },
  computed:{
  
    products1(){
      
      return this.products.slice(0,8)
    },
    products2(){

      return this.products.slice(14,19)
    },
    products3(){
      
      const products = [...this.products1, ...this.products2]
      return products.slice(5,16)
    },
    products4(){
      return this.products.slice(8,16)
    },

  },
  created(){
    this.$store.dispatch("AllProducts")
    
     axios.get('/products').then((res)=>{
      this.products = res.data
      this.loading = false;
     
     })
  }
  
  
  
  
  }





</script>


<style scoped lang="scss">
@import "../assets/scss/main.scss";
.load{

  position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.514);
    .card{

      
        width: 300px;
        height: 150px;
        margin: auto;
        position:fixed;
        top: 250px;
        z-index: 2000;
        left: 0;
        right: 0;
.progress{

  bottom: -28px;
position: relative;
}
    }
}

@mixin cart {
  height: 100%;
  width: 100%;
}

.bp-slide {
  display: none;
}

.slide {
  width: 100%;
  height: 200px;
}
.slide2 {
  @include cart;
}

.bg-SwiperSlider {
  @include cart;
  background-color: orange;
  padding: 12px;
  margin: 12px 0px;
  .header-Slider {
    color: #ffff;
    padding: 12px;
    padding-top: 0;
    text-align: right;
    display: none;
  }

  .col5 {
    width: 200px;
    margin-left: 22px;
  }
  h2 {
    color: #ffff;
  }
  .time {
    color: red;
    border-bottom: 1px solid whitesmoke;
    margin-bottom: 12px;
    padding-bottom: 12px;
  }
}
.bg-SwiperSlider2 {
  @include cart;
  background-color: purple;
  padding: 12px;
  margin: 12px 0px;
  .header-Slider {
    color: #ffff;
    padding: 12px;
    padding-top: 0;
    text-align: right;
    display: none;
  }
  .col5 {
    width: 200px;
    margin-left: 22px;
  }
  h2 {
    color: #ffff;
  }
  .time {
    color: red;
    border-bottom: 1px solid whitesmoke;
    margin-bottom: 12px;
    padding-bottom: 12px;
  }
}
.row-SwiperSlider {
  display: flex;
  flex-direction: row;
  align-items: center;
}
@media #{$bp-max-ms} {
  .bp-slide {
    display: block;
  }

  .slide {
    display: none;
  }
  .row-SwiperSlider {
    .col5 {
      display: none;
    }
  }
  .bg-SwiperSlider {
    .header-Slider {
      display: block;
    }
  }
  .bg-SwiperSlider2 {
    .header-Slider {
      display: block;
    }
  }
}

.header-bigcard {
  text-align: right;
}
</style>
