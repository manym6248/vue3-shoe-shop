<template>
  <div class="row m-0">
    <div class="col-3 column">
      <div class="filters card shadow rounded-3 m-3 mt-4 ml-0">
        <h4 class="titel">دسته بندی ها</h4>
        <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action"
            v-for="(item, i) in gategorys"
            :key="i"
            @click="getgategory(item)"
          >
            {{ item }}</a
          >
        </div>
      </div>
      <div class="filters card shadow rounded-3 m-3 mt-4 ml-0">
        <h5 class="titel">فیلتر بر اساس قیمت</h5>
        <div class="price-range list-group">
          <select
            class="form-select iput-price mb-1"
            aria-label="Default select example"
          >
            <option selected>از قیمت</option>
            <option value="1">100000 تومن</option>
            <option value="1">200000 تومن</option>
            <option value="1">300000 تومن</option>
            <option value="1">500000 تومن</option>
          </select>
          تا
          <select
            class="form-select iput-price mt-1"
            aria-label="Default select example"
          >
            <option selected>تا قیمت</option>
            <option value="1">300000 تومن</option>
            <option value="1">400000 تومن</option>
            <option value="1">500000 تومن</option>
            <option value="1">600000 تومن</option>
            <option value="1">700000 تومن</option>
            <option value="1">800000 تومن</option>
          </select>
        </div>
      </div>
    </div>

    <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
      <div class="products">
        <div class="card header-card shadow rounded-3">
          <div class="row m-0">
            <button
              class="btn btn-outline-primary list2 mr-3"
              type="button"
              @click="felters = !felters"
            >
              <i class="bi bi-list"></i>
              فیلترها
            </button>
            <div class="felters p-3 py-0" v-if="felters">
              <ul class="items-min">
                <li class="item1 ps-3">مرتب سازی :</li>

                <li class="item" @click=" item= 1;">محصولات </li>
                <li class="item" @click=" item= 2;">ارزان ترین</li>
                <li class="item" @click=" item=3">گران ترین</li>
              </ul>
              <div class="filters card shadow rounded-3 mt-4 ml-0">
                <div class="row m-0 row-algin" @click="gategory = !gategory">
                  <div class="col-10">
                    <h4 class="titel">دسته بندی ها</h4>
                  </div>
                  <div class="col-2">
                    <button
                      class="btn btn-outline-primary list3"
                      type="button"
                      @click="gategory2 = !gategory2"
                    >
                      <i class="bi bi-list"></i>
                    </button>
                  </div>
                </div>
                <div class="list-group" v-if="gategory2">
                  <div class="row m-0">
                    <div class="col-6" v-for="(item, i) in gategorys" :key="i">
                      <a
                        href="#"
                        class="list-group-item list-group-item-action"
                        @click="getgategory(item)"
                        >{{ item }}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="filters card shadow rounded-3 mt-4 ml-0 mb-3">
                <div
                  class="row m-0 row-algin"
                  @click="pricerange = !pricerange"
                >
                  <div class="col-10">
                    <h5 class="titel">فیلتر بر اساس قیمت</h5>
                  </div>
                  <div class="col-2">
                    <button class="btn btn-outline-primary list3" type="button">
                      <i class="bi bi-list"></i>
                    </button>
                  </div>
                </div>

                <div class="price-range list-group" v-if="pricerange">
                  <select
                    class="form-select iput-price mb-1"
                    aria-label="Default select example"
                  >
                    <option selected>از قیمت</option>
                    <option value="1">5$</option>
                    <option value="1">10$</option>
                    <option value="1">20$</option>
                    <option value="1">50$</option>
                    <option value="1">100$</option>
                    <option value="1">500$</option>
                  </select>
                  تا
                  <select
                    class="form-select iput-price mt-1"
                    aria-label="Default select example"
                  >
                    <option selected>تا قیمت</option>
                    <option value="1">10$</option>
                    <option value="1">20$</option>
                    <option value="1">50$</option>
                    <option value="1">100$</option>
                    <option value="1">500$</option>
                    <option value="1">1000$</option>
                  </select>
                </div>
              </div>
            </div>
            <ul class="items">
              <li class="item1 px-3">مرتب سازی :</li>

              <li class="item" @click=" item= 1;">محصولات </li>
                <li class="item" @click=" item= 2;">ارزان ترین</li>
                <li class="item" @click=" item=3">گران ترین</li>
            </ul>
          </div>
        </div>

        <div class="row productsrow">
          <div class="lodin-card" v-if="items.length == 0">
         <loading></loading>
        </div>
          <div
            class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6"
            v-for="item in items"
            :key="item"
          >
            <card :item="item" class="rounded-3 my-3"></card>
          </div>
        </div>
        <div class="pagtion m-3">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>

              <li class="page-item"><a class="page-link">1</a></li>

              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
   <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} |فروشگاه` : `SITE_NAME` }}</template>
  </metainfo>
</template>

<script >
import card from "../components/local/card.vue";
import loading from "../components/local/loading"
import axios from "../../axios.congfig";
export default {
  components: {
    card,
    loading
  },
  data() {
    return {
      felters: false,
      gategory: false,
      gategory2: false,
      pricerange: false,
      size: false,
      color: false,
      item: 0,
      minprice: [],
      gategorys: [],
    };
  },
  methods: {
    getgategory(items) {
      this.$store.dispatch("getGategoryProduct",items)
    },
    
    MPrice() {
      this.item= 2;
    },
    maxprice() {
      this.item =3;
    },
  },
  computed:{
      items() {
      if(this.item == 2){
           return this.$store.getters.MPrice;
      }
    else if(this.item == 3){
     return this.$store.getters.maxPrice;
    }
    else{
    return this.$store.getters.product;

    }
     
    },
  },



  created() {
    axios
      .get("/products/categories")
      .then((res) => (this.gategorys = [...res.data]));

      this.$store.dispatch("getStoreProduct");
  },
};
</script>

<style lang="scss" scoped>
.productsrow{
  min-height: 400px;
}
.lodin-card {

  width: 100%;
}
@import "../assets/scss/main.scss";
.row-algin {
  align-items: center;
}
.pagination {
  margin: 12px;
  justify-content: center;
  direction: ltr;
  .page-link {
    outline: none;
  }
}
.form-check-label {
  width: 100%;
}
.list-group {
  padding: 12px;
  border: none;
}
.list-group-item {
  border-radius: 50px;
  text-align: right;
  margin-bottom: 12px;
}

.products {
  padding: 24px;
  .items {
    display: flex;
    flex-direction: row;
    justify-items: center;
    text-align: right;
    margin: 0;
    height: 70px;
    align-items: center;
    .item {
      width: 100px;
      height: 25px;
      &:hover {
        cursor: pointer;
        color: blue;
        transition: 0.3s;
      }
    }
  }
}
.filters {
  width: 100%;

  .titel {
    text-align: right;
    border-bottom: 1px solid gainsboro;
    margin: 12px;
    padding: 12px;
    height: 100%;
  }
}
@media #{$bp-min-ms} {
  .list2 {
    display: none;
  }
}
@media #{$bp-max-ms} {
  .filters {
    .titel {
      border-bottom: none;
    }
  }
  .column {
    display: none;
  }
  .products {
    padding: 0;
    padding-top: 12px;
    .list2 {
      width: 115px;
      margin: 12px;
    }
    .items {
      display: none;
    }
    .items-min {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-items: center;
      text-align: right;
      margin: 0;
      height: 70px;
      align-items: center;
      padding: 0px;
      .item {
        width: 100px;
        height: 25px;
        &:hover {
          cursor: pointer;
          color: blue;
          transition: 0.3s;
        }
      }
    }
  }
}
</style>
