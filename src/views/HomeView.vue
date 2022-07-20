<template >
  <nav class="navbar bg-primary fixed-top">
    <div class="ma-0 mx-1 pa-1 item-row">
      <div class="containr">
        <div class="row m-0 row-link">
          <div class="col-6">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mr-1">
              <router-link tag="li" class="nav-item mr-3" to="/" exact
                ><a class="nav-link"> صحفه اصلی </a>
                <i class="fa fa-user"></i>
              </router-link>
              <router-link tag="li" class="nav-item" to="/Store"
                ><a class="nav-link">فروشگاه</a></router-link
              >
              <router-link tag="li" class="nav-item" to="/about"
                ><a class="nav-link">درباره ما</a></router-link
              >
              <router-link tag="li" class="nav-item" to="/contact"
                ><a class="nav-link">تماس با ما</a></router-link
              >
            </ul>
          </div>
          <div class="col-1"></div>
          <div class="col-5">
            <div class="row row2" dir="ltr">
              <div class="col-3 mx-2">
                <div class="row row2">
                  <div class="col-6">
                    <router-link
                      tag="li"
                      class="item rounded-circle btn1"
                      to="/login"
                    >
                      <a class="nav-link login"> ورود </a>
                    </router-link>
                    <button
                      class="btn btn-primary list1"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    >
                      <i class="bi bi-list"></i>
                    </button>
                  </div>
                  <div class="col-6">
                    <router-link
                      tag="li"
                      class="item rounded-circle btn1 position-relative"
                      to="/cart"
                    >
                      <a class="nav-link cart">
                        <i class="bi bi-cart3"></i>

                        <span
                          class="
                            position-absolute
                            start-100
                            translate-middle
                            badge
                            rounded-pill
                            bg-danger
                          "
                        >
                         {{cartConter.length}}
                        </span>
                      </a>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <div class="search rounded-5">
                  <button class="btn rounded-circle">
                    <i class="bi bi-search"></i>
                  </button>
                  <input type="text" class="input" placeholder="جستجو" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header mb-3">
      <h5 id="offcanvasRightLabel" class="mb-0">مغان شوز</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body position-relative p-0">
      <div class="list-group m-2 my-0 rounded-0">
        <a
          href="#"
          class="
            list-group-item list-group-item-action
            m-1
            mx-0
            rounded-pill
            shadow
          "
          >صحفه اصلی</a
        >
        <a
          href="#"
          class="
            list-group-item list-group-item-action
            m-1
            mx-0
            rounded-pill
            shadow
          "
          >فروشگاه</a
        >
        <a
          href="#"
          class="
            list-group-item list-group-item-action
            m-1
            mx-0
            rounded-pill
            shadow
          "
          >درباره ما</a
        >
        <a
          href="#"
          class="
            list-group-item list-group-item-action
            m-1
            mx-0
            rounded-pill
            shadow
          "
          >تماس با ما</a
        >
      </div>
      <div class="position-absolute bottom-0 footer-offcanvas"></div>
    </div>
  </div>
  <div class="spacer"></div>
  <router-view class="pt-16" />
  <footer class="footer">
    <div class="end">
      <div class="row p-0 m-0">
        <div class="col-11">
          <h5>تمامی حقوق برای مغان شوز محفوظ است .</h5>
        </div>
      </div>
    </div>
  </footer>
</template>
<script >

import slidecard from "../components/local/slidecard.vue";
export default {
  components:{
    slidecard,
  },
  computed:{
    cartConter(){
      const count = this.$store.state.products.cart
      return count
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
@import "../assets/scss/main.scss";
.spacer{
  width: 100%;
  height: 60px;
}
$primary: rebeccapurple;

.offcanvas-header {
  border-bottom: 1px solid ghostwhite;
}
.footer-offcanvas {
  height: 50px;
  width: 100%;
  background-color: $color-primary;
}
.row-link {
  height: 100%;
  align-items: center;
}
.badge {
  top: 12px !important;
}

.footer {
  height: 50px !important;
  width: 100%;
  direction: rtl;
  .end {
    width: 100%;
    height: 50px;

    background-color: lighten($primary, 10);
    .row {
      height: 100%;
      align-items: center;
      justify-content: center;
    }
  }

  color: white;
  .row {
    height: 100%;
    font-size: 1.5em;
  }
}

@media #{$bp-xs} {
  .offcanvas {
    width: 50% !important;
  }
  .col-footer2 {
    display: none;
  }
}
@media #{$bp-ms} {
  .offcanvas {
    width: 35% !important;
  }
}

@media #{$bp-max-ms} {
  .navbar-nav {
    display: none !important;
  }
  .search {
    display: none;
  }
  .login {
    display: none !important;
  }
  .cart {
    display: none !important;
  }
}
@media #{$bp-min-ms} {
  .offcanvas {
    display: none !important;
  }
  .list1 {
    display: none !important;
  }
}

.row2 {
  align-items: center;
}
@mixin link1 {
  text-decoration: none;
  .nav-link {
    color: #fff;
    padding: 12px;
    font-size: 18px;
    text-decoration: none !important;
    &:hover {
      color: $color-text;
    }
  }
}

.item {
  @include link1;
}

.search {
  height: 41px;
  width: 200px;
  position: relative;
  background-color: #fff;

  .btn {
    height: 39px;
    width: 39px;
    position: absolute;
    left: 2px;
    bottom: 1px;
    background-color: rgb(233, 85, 0);
    border: none;
    i {
      color: #fff;
    }
  }
  .input {
    bottom: 5px;
    height: 31px;
    direction: rtl;
    left: 48px;
    width: 70%;
    border: none;
    outline: none;
    position: absolute;
  }
}
.btn1 {
  height: 40px;
  width: 40px;
  text-align: center;
}
.navbar-brand1 {
  font-weight: bold;
  color: $color-warning;
}
.item-row {
  height: 100%;
  width: 100%;
  align-items: center;
}
.navbar {
  height: 60px;
  padding: 0;
  .navbar-nav {
    display: flex;
    flex-direction: row;
    padding-inline-start: 0;

    .nav-item {
      @include link1;
    }
    .router-link-exact-active {
      a {
        color: $color-text !important;
      }
    }
  }
}
</style>
