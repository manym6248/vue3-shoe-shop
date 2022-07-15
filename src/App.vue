<template >
  <nav class="navbar bg-primary">
    <div class="ma-0 mx-1 pa-1 item-row row">
      <div class="col-2">
        <a class="navbar-brand" href="#">مغان شوز </a>
      </div>

      <div class="col-5">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mr-1">
          <router-link tag="li  mr-3" class="nav-item" to="/"
            ><a class="nav-link"> صحفه اصلی </a>
            <i class="fa fa-user"></i>
          </router-link>
          <router-link tag="li" class="nav-item" to="/Store"
            ><a class="nav-link">فروشگاه</a></router-link
          >
          <router-link tag="li" class="nav-item" to="/about"
            ><a class="nav-link">گالری</a></router-link
          >
          <router-link tag="li" class="nav-item" to="/about"
            ><a class="nav-link">درباره ما</a></router-link
          >
          
        </ul>
      </div>
      <div class="col-5">
        <div class="row row2" dir="ltr">
          <div class="col-3 mx-2">
            <div class="row row2">
              <div class="col-6">
                <router-link tag="li" class="item rounded-circle btn1" to="/">
                  <a class="nav-link login "> login </a>
             
                 
                   <button class="btn btn-primary list1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                      <i class="bi bi-list"></i>
                    </button>
                </router-link>
              </div>
              <div class="col-6">
                <router-link tag="li" class="item rounded-circle btn1" to="/">
                  <a class="nav-link cart"> <i class="bi bi-cart3"></i> </a>
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
  </nav>
  

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
   
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>
  <router-view />
<footer class="footer">
  <div class="containr">
    <div class="row p-0 m-0">
      <div class="col">
        <div class="Contact-us">
          <div class="sendemail pt-3">
             <div class="search rounded-5">
              <button class="btn rounded-circle">
                <i class="bi bi-search"></i>
              </button>
              <input type="text" class="input" placeholder="جستجو" />
            </div>
          </div>

        </div>
      </div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>

</footer>


</template>
<script>
export default {};
</script>

<style lang="scss">
@import "./assets/css/main.css";
@import "./assets/scss/main.scss";
@import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';

$primary: rebeccapurple;
$danger: #dd0000;
$success: lime;
$warning: rgb(255, 123, 0);
$info: aqua;
$body-bg: #f3f3f0;

.containr {
  width: 1200px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.footer{

  height: 250px;
  width: 100%;
  background-color: lighten($primary, 10);
}

@media #{$bp-xs} {
  .containr {
    width: 98%;
  }
  .offcanvas {
    width: 50% !important;
  }
}
@media #{$bp-ms} {
  .containr {
    width: 95%;
  }
  .offcanvas {
    width: 35% !important;
  }
}
@media #{$bp-md} {
  .containr {
    width: 95%;
  }
}
@media #{$bp-lg} {
  .containr {
    width: 1140px;
  }
}
@media #{$bp-max-ms} {
       .navbar-nav{
        display: none !important;
       }
       .search{
         
         display: none  ;
       }
       .login{
         display: none  !important;

       }
       .cart{
         display: none  !important;

       }

}
@media #{$bp-min-ms}{
  .offcanvas{
    display: none !important;
  }
.list1{
  display: none !important;
}
}

@import "bootstrap";
#app {
  font-family: iranyekan, roboto, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
.navbar-brand {
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
  }
}
</style>
