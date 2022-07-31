<template>
  <div class="containr">
    <div class="cart1 my-4 shadow">
      <!-- <h2>سبد خرید</h2> -->
      <div>
        <div class="card card-header-cart shdow">
          <div class="row m-0 mt-2 row-cart">
            <div class="col-2 px-0">
              <h4 class="text-truncate">عکس</h4>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-2 ps-0">
              <h4 class="text-truncate">اسم محصول</h4>
            </div>

            <div class="col-3 pe-0 ps-0">
              <h4>قیمت</h4>
            </div>
            <div class="col-3 pe-0 ps-0">
              <h4>تعداد</h4>
            </div>
            <div class="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2 pe-0 ps-0">
              <h4>حذف</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="lodin-card" v-if="cartitem.length == 0">
        <loading></loading>
      </div>

      <div
        class="card shadow mb-4 mt-2 rounded-4"
        v-for="item in cartitem"
        :key="item.id"
      >
        <div class="row m-0 row-cart">
          <div class="col-2 px-0">
            <img
              class="img-thumbnail rounded-circle shadow my-3 mx-0"
              :src="item.image"
              alt=""
              srcset=""
            />
          </div>
          <div class="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-2 ps-0">
            <h6 class="text-truncate">{{ item.title }}</h6>
          </div>

          <div class="col-3 pe-0 ps-0 price">
            <div class="off">{{item.Discount}}%</div>
            <h6>{{ item.price }} $</h6>
          </div>
          <div class="col-3 pe-0 ps-0">
            <div class="row row-count">
              <div class="col-4 px-0">
                <button class="btn btn-primary"  @click="addTocart(item)">
                  +
                </button>
              </div>
              <div class="col-4 px-0">
                <h6>{{ item.quntity }}</h6>
              </div>
              <div class="col-4 px-0">
                <button class="btn btn-primary" v-if="item.quntity > 1" @click="minusCart(item)">
                  -
                </button>
                <button class="btn btn-primary" @click="minusCart(item)" v-else disabled>
                  -
                </button>
              </div>
            </div>
          </div>
          <div class="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2 pe-0 ps-0">
            <button class="btn btn-danger" @click=" remove(item) ">-</button>
          </div>
        </div>
      </div>
      <div class="card shadow mb-4 mt-2 rounded-4 p-3">
        <div class="row m-0 mb-2 row-cart">
          <div class="col-6 pe-0 ps-0 price">
            <h6>مبلغ قابل پرداخت</h6>
          </div>

          <div class="col-6 pe-0 ps-0">
            <h6>تکمیل خرید</h6>
          </div>
        </div>
        <div class="row m-0 row-cart">
          <div class="col-6 pe-0 ps-0 price">
            <h6>{{totalprice}}</h6>
          </div>

          <div class="col-6 pe-0 ps-0">
            <button class="btn btn-primary" @click="count++">تکمیل خرید</button>
          </div>
        </div>
      </div>
    </div>
   <!-- <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | سبد خرید` : `SITE_NAME` }}</template>
  </metainfo> -->
  </div>
</template>

<script  >
import loading from "../components/local/loading";
export default {
  components: { loading },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addTocart(item) {
      this.$store.commit("ADD_TO_CART", item);
    },
    minusCart(item) {
      this.$store.commit("MINUS_FROM_CART", item);
    },
    remove(item) {
      this.$store.commit("REMOVE_FROM_CART", item);
    },
  },
  computed: {
    cartitem() {
      return this.$store.state.products.cart;
    },
        totalprice() {
         return this.$store.getters.totalprice.toFixed(2)
        },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.lodin-card {
  width: 100%;
}
h2 {
  text-align: right;
  margin: 13px;
  padding-bottom: 12px;
}
.card-header-cart {
  background-color: rebeccapurple;
  color: white;
}
.row-count {
  align-items: center;
  justify-content: center;
}

.price {
  position: relative;
  .off {
    position: absolute;
    color: #e95500;
    top: -14px;
    left: 25%;
  }
}
.cart1 {
  min-height: 500px;
  padding: 12px;
  margin: 12px;
}
.row-cart {
  align-items: center;
  img {
    height: 100px;
    width: 100px;
  }
  .row-count {
    margin: 0px 50px;
  }
}
@media #{$bp-max-ms} {
  .off {
    display: none;
  }
  .cart1 {
    padding: 2px;
    margin: 2px;
  }
  img {
    height: 80px !important;
    width: 80px !important;
  }
  h6 {
    font-size: 1em;
  }
  .row-count {
    margin: 0px !important ;
  }
}
@media #{$bp-ms} {
  .cart1{

    height: 600px;
  overflow-y: scroll;
  overflow-x:unset !important;
}
  }
</style>