<template>
  <div class="row m-0">
    <div class="col-3 column">
      <div class="filters card shadow rounded-3 m-3 mt-4 ml-0">
        <h4 class="titel">دسته بندی ها</h4>
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action"
            >کفش بچگانه</a
          >
          <a href="#" class="list-group-item list-group-item-action"
            >کفش مردانه</a
          >
          <a href="#" class="list-group-item list-group-item-action"
            >کفش زنانه</a
          >
          <a href="#" class="list-group-item list-group-item-action"
            >کیف زنانه</a
          >
          <a href="#" class="list-group-item list-group-item-action"
            >کیف مدرسه</a
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
        <h5 class="titel">فیلتر بر اساس اندازه</h5>
        <div class="list-group">
          <a for="exampleCheck1" class="list-group-item list-group-item-action">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">39</label>
            </div>
          </a>
          <a for="exampleCheck1" class="list-group-item list-group-item-action">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">40</label>
            </div>
          </a>
          <a for="exampleCheck1" class="list-group-item list-group-item-action">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">41</label>
            </div>
          </a>
          <a for="exampleCheck1" class="list-group-item list-group-item-action">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">42</label>
            </div>
          </a>
        </div>
        <h5 class="titel">فیلتر بر اساس رنگ</h5>
        <div class="list-group">
          <a for="exampleCheck1" class="list-group-item list-group-item-action">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">آبی</label>
            </div>
          </a>
          <a for="exampleCheck1" class="list-group-item list-group-item-action">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >قهوه ایی</label
              >
            </div>
          </a>
          <a for="exampleCheck1" class="list-group-item list-group-item-action">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">سفید</label>
            </div>
          </a>
          <a for="exampleCheck1" class="list-group-item list-group-item-action">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">قرمز</label>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
      <div class="products ">
        <div class="card header-card shadow rounded-3 ">
          <div class="row m-0 ">
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
                <li class="item">جدیدترین</li>
                <li class="item">ارزان ترین</li>
                <li class="item">گران ترین</li>
              </ul>
              <div class="filters card shadow rounded-3 mt-4 ml-0">
                <div class="row m-0 row-algin"   @click="gategory = !gategory">
                  <div class="col-10">
                    <h4 class="titel">دسته بندی ها</h4>
                  </div>
                  <div class="col-2">
                    <button
                      class="btn btn-outline-primary list3"
                      type="button"
                      @click="gategory = !gategory"
                    >
                      <i class="bi bi-list"></i>
                    
                    </button>
                  </div>
                </div>
                <div class="list-group" v-if="gategory">
                  <div class="row m-0">
                    <div class="col-6">
                      <a href="#" class="list-group-item list-group-item-action"
                        >کفش بچگانه</a
                      >
                    </div>
                    <div class="col-6">
                      <a href="#" class="list-group-item list-group-item-action"
                        >کفش مردانه</a
                      >
                    </div>
                    <div class="col-6">
                      <a href="#" class="list-group-item list-group-item-action"
                        >کفش زنانه</a
                      >
                    </div>
                    <div class="col-6">
                      <a href="#" class="list-group-item list-group-item-action"
                        >کیف زنانه</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="filters card shadow rounded-3 mt-4 ml-0">
                <div class="row m-0 row-algin"  @click="pricerange = !pricerange">
                  <div class="col-10">
                     <h5 class="titel">فیلتر بر اساس قیمت</h5>
                  </div>
                  <div class="col-2">
                    <button
                      class="btn btn-outline-primary list3"
                      type="button"
                     
                    >
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
              <div class="filters card shadow rounded-3 mt-4 ml-0">
                  <div class="row m-0 row-algin"   @click="size = !size">
                  <div class="col-10">
                     <h5 class="titel">فیلتر بر اساس اندازه</h5>
                  </div>
                  <div class="col-2">
                    <button
                      class="btn btn-outline-primary list3"
                      type="button"
                    
                    >
                      <i class="bi bi-list"></i>
                    
                    </button>
                  </div>
                </div>
              
                <div class="list-group" v-if="size">
                  <a
                    for="exampleCheck1"
                    class="list-group-item list-group-item-action"
                  >
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1"
                        >39</label
                      >
                    </div>
                  </a>
                  <a
                    for="exampleCheck1"
                    class="list-group-item list-group-item-action"
                  >
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1"
                        >40</label
                      >
                    </div>
                  </a>
                  <a
                    for="exampleCheck1"
                    class="list-group-item list-group-item-action"
                  >
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1"
                        >41</label
                      >
                    </div>
                  </a>
                  <a
                    for="exampleCheck1"
                    class="list-group-item list-group-item-action"
                  >
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1"
                        >42</label
                      >
                    </div>
                  </a>
                </div>
              </div>
              <div class="filters card shadow rounded-3 mt-4 ml-0 mb-3">
                     <div class="row m-0 row-algin"   @click="color = !color">
                  <div class="col-10">
                      <h5 class="titel">فیلتر بر اساس رنگ</h5>
                  </div>
                  <div class="col-2">
                    <button
                      class="btn btn-outline-primary list3"
                      type="button"
                    
                    >
                      <i class="bi bi-list"></i>
                    
                    </button>
                  </div>
                </div>
              
                <div class="list-group" v-if="color">
                  <a
                    for="exampleCheck1"
                    class="list-group-item list-group-item-action"
                  >
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1"
                        >آبی</label
                      >
                    </div>
                  </a>
                  <a
                    for="exampleCheck1"
                    class="list-group-item list-group-item-action"
                  >
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1"
                        >قهوه ایی</label
                      >
                    </div>
                  </a>
                  <a
                    for="exampleCheck1"
                    class="list-group-item list-group-item-action"
                  >
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1"
                        >سفید</label
                      >
                    </div>
                  </a>
                  <a
                    for="exampleCheck1"
                    class="list-group-item list-group-item-action"
                  >
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1"
                        >قرمز</label
                      >
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <ul class="items">
              <li class="item1 px-3">مرتب سازی :</li>
              <li class="item">جدیدترین</li>
              <li class="item">ارزان ترین</li>
              <li class="item">گران ترین</li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div
            class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6"
            v-for="item in items"
            :key="item"
          >
            <card :item="items.src" class="rounded-3 my-3"></card>
          </div>
        </div>
        <div class="pagtion">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>

              <li class="page-item"><a class="page-link">1</a></li>
              <li class="page-item"><a class="page-link">2</a></li>
              <li class="page-item"><a class="page-link">3</a></li>
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
</template>

<script setup>
import card from "../components/local/card.vue";
import { reactive, ref } from "vue";
const felters = ref(false);
const gategory = ref(false);
const pricerange = ref(false);
const size = ref(false);
const color = ref(false);
const items = reactive([
  { src: "../assets/png/1.png" },
  { src: "../assets/png/2.png" },
  { src: "../assets/png/3.png" },
  { src: "../assets/png/4.png" },
  { src: "../assets/png/5.png" },
  { src: "../assets/png/5.png" },
  { src: "../assets/png/5.png" },
  { src: "../assets/png/5.png" },
  { src: "../assets/png/5.png" },
  { src: "../assets/png/5.png" },
  { src: "../assets/png/5.png" },
  { src: "../assets/png/5.png" },
]);
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.row-algin{
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
  .list2{
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
