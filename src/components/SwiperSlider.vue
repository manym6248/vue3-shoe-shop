<template>
  <swiper
    :slidesPerView="2"
    :spaceBetween="10"
    :navigation="true"
    :breakpoints="options"
    :modules="modules"
    class="mySwiper rounded-3"
  >
    <swiper-slide v-for="item in items" :key="item">
      <card :item="items.src" class="rounded-3"></card>
    </swiper-slide>
  </swiper>
</template>
<script setup >
import { Swiper, SwiperSlide } from "swiper/vue";
import card from "./local/card.vue";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { reactive } from "vue";

const props = defineProps({
  cols: Number,
});

const items = reactive([
  { src: "../assets/png/1.png", name: "2" },
  { src: "../assets/png/2.png", name: "2" },
  { src: "../assets/png/3.png", name: "2" },
  { src: "../assets/png/4.png", name: "2" },
  { src: "../assets/png/5.png", name: "2" },
]);
const options = reactive({
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: props.cols,
        spaceBetween: 30,
      },
    });









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