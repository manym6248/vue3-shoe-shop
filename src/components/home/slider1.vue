<template>
<div class="containr">
  
<swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 10,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper card"
  >
    <swiper-slide
    class="shadow"
      ><img
        src="../../assets/home/shoes/1.jpg" /></swiper-slide
    ><swiper-slide
    class="shadow"
      ><img
        src="../../assets/home/shoes/2.jpg" /></swiper-slide
    ><swiper-slide class="shadow"
      ><img
        src="../../assets/home/shoes/3.jpg" /></swiper-slide
    ><swiper-slide  class="shadow"
      ><img
        src="../../assets/home/shoes/4.jpg" /></swiper-slide
    ><swiper-slide  class="shadow"
      ><img
        src="../../assets/home/shoes/5.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="../../assets/home/shoes/7.jpg" /></swiper-slide
    ><swiper-slide  class="shadow"
      ><img
        src="../../assets/home/shoes/6.jpg" /></swiper-slide
    ><swiper-slide  class="shadow"
      ><img
        src="../../assets/home/shoes/8.jpg" /></swiper-slide
    ><swiper-slide  class="shadow"
      ><img src="../../assets/home/shoes/9.jpg"
    /></swiper-slide> 
  </swiper>
</div>
  
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>
<style lang="scss" scoped>
.card{
  height: 400px;
}




.swiper {
  width: 100%;
  padding-top: 15px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
  filter:brightness(0.9);
  
}
.swiper-slide-active{
  filter:brightness(1);
 

}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
