<template>
  <swiper
    :slidesPerView="2"
    :spaceBetween="10"
    :navigation="true"
    :breakpoints="options"
    :modules="modules"
    class="mySwiper rounded-3"
  >
  {{items}}
    <swiper-slide v-for="item in items" :key="item">
      <card :item="item" class="rounded-3"></card>
    </swiper-slide>
  </swiper>
</template>
<script  >
import { Swiper, SwiperSlide } from "swiper/vue";
import card from "./local/card.vue";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";

export default {
  
  props: {cols:Number, items:Array},
  components: {
    Navigation,
    card,
    Swiper,
    SwiperSlide,
  },
  data(){
    return{

      options:{
          640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: this.cols,
    spaceBetween: 30,
  },
      }
    }
  },
 
};


</script>




<style lang="scss" scoped>
.swiper {
  width: 100%;
}
.mySwiper {
  cursor: pointer;
}

.swiper-slide {
  text-align: center;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>