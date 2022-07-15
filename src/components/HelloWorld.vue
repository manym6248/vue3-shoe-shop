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

      <bigcard></bigcard>
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
          <SwiperSlider :cols="3" />
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
      <bigcard></bigcard>
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
          <SwiperSlider :cols="3"/>
        </div>
      </div>
    </article>
    <article>
      <div class="containr mt-4 pa-0">
        <h3 class="header-bigcard">جدید ترین محصولات</h3>
      </div>
      <bigcard></bigcard>
    </article>
  </div>
</template>

<script setup>
import SwiperSlider from "./SwiperSlider.vue";
import bigcard from "../components/home/bigcard.vue";
import Slider1 from "./home/slider1.vue";
import slidecard from "./local/slidecard.vue";
import slidebigcard from "./local/slidebigcard.vue";
import slidemediumcard from "./local/slidemediumcard.vue";
</script>


<style scoped lang="scss">
@import "../assets/scss/main.scss";

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
