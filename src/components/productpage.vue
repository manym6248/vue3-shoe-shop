<template>
  <div>
    <article>
      <div class="containr py-3">
        <div class="card-product">
          <div class="row">
            <div class="col-img col-lg-4 col-xl-4 col-md-4 col-sm-12 col-12">
              <div class="img-product card shadow">
                <div class="img p-2">
                  <inner-image-zoom
                    :src="item.image"
                    :zoomSrc="item.imge"
                    width="320"
                    height="300"
                  />
                  <swiper
                    :slidesPerView="4"
                    :spaceBetween="5"
                    :navigation="false"
                    :breakpoints="{
                      '640': {
                        slidesPerView: 4,
                        spaceBetween: 5,
                      },
                      '768': {
                        slidesPerView: 4,
                        spaceBetween: 5,
                      },
                      '1024': {
                        slidesPerView: 4,
                        spaceBetween: 5,
                      },
                    }"
                    :modules="modules"
                    class="mySwiper rounded-3 images"
                  >
                    <swiper-slide v-for="n in 5" :key="n">
                      <div class="card card-img" height="100" @click="chnge(n)">
                        <img
                          height="100"
                          :src="require(`../assets/png/${n}.png`)"
                          alt=""
                        />
                      </div>
                    </swiper-slide>
                  </swiper>
                </div>
              </div>
            </div>
            <div class="col-text col-lg-8 col-xl-8 col-md-8 col-sm-12 col-12">
              <div class="card shadow text-product">
                <div class="name">
                  <h1 class="ext-truncate">{{ item.title }}</h1>
                </div>
                <h3 class="price">{{ item.price }}$</h3>
                <div class="description">
                  <p>
                    {{ item.description }}
                  </p>
                </div>
                <div class="Discount">
                  <h3>{{ (item?.id * 6) / 2 }}%</h3>
                </div>
                <div class="size">
                  <div class="row">
                    <h4>سایز :</h4>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineCheckbox1"
                        >40</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                      />
                      <label class="form-check-label" for="inlineCheckbox2"
                        >42</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                      />
                      <label class="form-check-label" for="inlineCheckbox2"
                        >43</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                      />
                      <label class="form-check-label" for="inlineCheckbox2"
                        >44</label
                      >
                    </div>
                  </div>
                </div>
                <div class="colors">
                  <div class="row">
                    <h4>رنگ :</h4>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineCheckbox1"
                        >سبز</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                      />
                      <label class="form-check-label" for="inlineCheckbox2"
                        >ابی</label
                      >
                    </div>
                  </div>
                </div>
                <div class="row">
                  <button class="btn btn-primary" @click="addTocart(item)">
                    خرید
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
    <article>
      <div class="containr">
        <div class="cart shadow rounded-3">
          <ul class="nav py-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <h3>دیدگاه کاربران</h3>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div class="row m-3 mt-0">
                <div class="card pt-3">
                  <ul class="timeline">
                    <li class="timeline-item mb-5">
                      <h5 class="fw-bold">مانی</h5>

                      <p class="text-muted">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                        برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                        هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت
                        و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
                        متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                        برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
                        پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
                        داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط
                        سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
                        دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
                        طراحی اساسا مورد استفاده قرار گیرد.
                      </p>
                    </li>

                    <li class="timeline-item mb-5">
                      <h5 class="fw-bold">جرج چهارم</h5>

                      <p class="text-muted">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                        برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                        هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت
                        و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
                        متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                        برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
                        پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
                        داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط
                        سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
                        دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
                        طراحی اساسا مورد استفاده قرار گیرد.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row p-3">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="نام"
                    aria-label=" name"
                    v-model="Comment.name"
                  />
                </div>

                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="ایمیل"
                    aria-label="email "
                    v-model="Comment.email"
                  />
                </div>
              </div>
              <div class="m-3 pb-3 mt-0">
                <textarea
                  class="form-control"
                  placeholder="دیدگاه خود را وارد کنید "
                  id="floatingTextarea2"
                  style="height: 100px"
                  v-model="Comment.text"
                ></textarea>
                <div class="row my-3 px-2">
                  <button class="btn btn-primary" @click="sendcomment(item)">
                    ارسال دیدگاه
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>

    <article class="bg-SwiperSlider2 shadow-lg mt-4 mb-0 pa-0">
      <div class="containr my-4 pa-0">
        <h3 class="header-Slider">محصولات مرتبط</h3>
        <div class="row-SwiperSlider">
          <SwiperSlider :cols="4" :items="items" />
        </div>
      </div>
    </article>
    <metainfo>
      <template v-slot:title="{ content }">{{
        content ? `${content} | صحفه محصول ` : `SITE_NAME`
      }}</template>
    </metainfo>
  </div>
</template>

<script >
import InnerImageZoom from "vue-inner-image-zoom";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperSlider from "../components/SwiperSlider";
import axios from "../../axios.congfig";

export default {
  components: {
    InnerImageZoom,
    Swiper,
    SwiperSlide,
    SwiperSlider,
  },
  data() {
    return {
      item: {},
      items: [],
      components: [],
      Comment: {
        email: "",
        name: "",
        text: "",
      },
    };
  },

  created() {
    axios.get(`/products/${this.$route.params.id}`).then((res) => {
      this.item = { ...res.data };
    });
    axios.get(`/products?limit=6`).then((res) => {
      this.items = [...res.data];
    });
  },

  methods: {
    sendcomment(item) {
      

      let Comment =  this.Comment;
      
      this.$store.commit("ADD_TO_COMMENTS", 
    {Comment , item},
      );
    },
    chnge(n) {
      this.item.image = require(`../assets/png/${n}.png`);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    addTocart(item) {
      this.$store.commit("TOAST_TRUE", "به سبد خرید افزوده شد");
      this.$store.commit("ADD_TO_CART", item);
    },
    gotocart(id) {
      this.$store.commit("ADD_TO_CART", id);
    },
  },
  watch: {
    "$route.params.id": function (oldvalue, newvalue) {
      if (oldvalue != newvalue) {
        axios.get(`/products/${this.$route.params.id}`).then((res) => {
          this.item = { ...res.data };
          window.scrollTo(0, 0);
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.timeline {
  border-right: 1px solid #572b82;
  position: relative;
  list-style: none;
  text-align: right;
}

.timeline .timeline-item {
  position: relative;
}

.timeline .timeline-item:after {
  position: absolute;
  display: block;
  top: 0;
}

.timeline .timeline-item:after {
  background-color: #fb8c00;
  right: -46px;
  border-radius: 50%;
  height: 11px;
  width: 11px;
  content: "";
  top: 5px;
}
.label {
  right: -169px;
  left: 75%;
}
.price {
  padding-right: 32px;
  color: #fb8c00;
}
@mixin input-row {
  padding: 24px;
  padding-top: 0;
  .row {
    margin: 0;
    .form-check {
      width: 57px;
      margin-left: 12px;
      margin-right: 0;
    }
  }
}
@mixin Discount-img {
  content: "";
  display: block;
  position: absolute;
  border-radius: 0px 50px;
}
@mixin cart {
  height: 100%;
  width: 100%;
}

.card-product {
  @include cart;
  .row {
    height: 100%;
    margin: 0;
    .text-product {
      .row {
        margin: 0;
        height: 40px;
        align-items: center;
      }
    }
    h4 {
      width: 60px;
      padding: 0;
    }
    .img-product {
      @include cart;
      .images {
        padding: 5px;
        cursor: pointer;
      }
    }

    .text-product {
      display: block;
      @include cart;
      padding: 12px;
      text-align: right;
      position: relative;
      .Discount {
        position: absolute;
        width: 60px;
        height: 95px;
        background-color: #fb8c00;
        left: 60px;
        top: 0;
        text-align: center;
        color: white;
        h3 {
          padding-top: 32px;
        }
        &::after {
          @include Discount-img;
          bottom: -16px;
          transform: rotate(-42deg);
          background-color: white;
          width: 40px;
          height: 21px;
          left: -22px;
        }
        &::before {
          @include Discount-img;
          bottom: -14px;
          transform: rotate(-45deg);
          background-color: #fb8c00;
          width: 28px;
          height: 28px;
          right: 6px;
        }
      }
      .description {
        padding: 24px;
        p {
          text-align: justify;
        }
      }
      .size {
        @include input-row;
      }

      .colors {
        @include input-row;
      }

      .name {
        padding: 32px;
        h1 {
          width: 80%;
        }
      }
    }
  }
}

.col-text,
.col-img {
  padding: 12px;
  height: max-content !important;
}
.cart-img {
  height: 110px !important;
}
.bg-SwiperSlider2 {
  @include cart;
  background-color: #fb8c00;
  padding: 12px;
  margin: 12px 0px;
  .header-Slider {
    color: #ffff;
    padding: 12px;
    padding-top: 0;
    text-align: right;
  }

  h2 {
    color: #ffff;
  }
}
.row-SwiperSlider {
  display: flex;
  flex-direction: row;
  align-items: center;
}

@mixin col {
  .col-text,
  .col-img {
    height: max-content !important;
    padding: 12px;
  }
}
@media #{$bp-md} {
  @include col;
}
@media #{$bp-max-ms} {
  @include col;
}
</style>