<template>
  <div class="slider rounded-3">
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade rounded-3"
      data-bs-ride="carousel "
    >
      <div class="carousel-inner">
        <div class="row ma-0">
          <div class="col-xl-7 col-lg-7  col-md-12 col-sm-12 col-12">
            <div class="img3">
               <div class="bg">
                  <div class="card-carousel2 rounded-3">
              <h1 class="pt-3" >لباسمو از کجا بگیرم؟ تو میدونی؟</h1>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز،
              </p>

              <div class="row row-btns pa-3 ">
                <div class="col-6"> <div class="btn-carousel">
                <div class="col">
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                </div>
                <div class="col"><p>...</p></div>
                <div class="col">
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div></div>
                <div class="col-6">
                  <button class="btn btn-primary">مشاهده بیشتر</button>
                </div>
              </div>
             
            </div>
              <img
                class="img1"
                src="../../assets/png/magicpattern-blob-1656860139068.png"
              />

              <div class="carousel-item active">
                <div class="bg">
                  <img
                    class="img2"
                    height="300"
                    width="260"
                    src="../../assets/png/1.png"
                  />
                </div>
              </div>

              <div v-for="(item, i) in items" :key="i" class="carousel-item">
                <div class="bg">
                  <img class="img2" height="300" width="260" :src="item.src" />
                </div>
              </div>
            </div>
            </div>
           
            <div class="card-carousel">
              <h1>لباسمو از کجا بگیرم؟ تو میدونی؟</h1>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز،
              </p>

              <div class="row row-btns pa-3 ">
                <div class="col-6"> <div class="btn-carousel">
                <div class="col">
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                </div>
                <div class="col"><p>...</p></div>
                <div class="col">
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div></div>
                <div class="col-6">
                  <button class="btn btn-primary">مشاهده بیشتر</button>
                </div>
              </div>
             
            </div>
          </div>
          <div class="col-xl-4 col-lg-5 col-md-4  col-img">
            <div class="bg">
              <img
                class="img1"
                src="../../assets/png/magicpattern-blob-1656860139068.png"
              />

              <div class="carousel-item active">
                <div class="bg">
                  <img
                    class="img2"
                    height="300"
                    width="260"
                    src="../../assets/png/1.png"
                  />
                </div>
              </div>

              <div v-for="(item, i) in items" :key="i" class="carousel-item">
                <div class="bg">
                  <img class="img2" height="300" width="260" :src="item.src" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
const items = reactive([
  { src: require("../../assets/png/2.png") },
  { src: require("../../assets/png/3.png") },
  { src: require("../../assets/png/4.png") },
  { src: require("../../assets/png/5.png") },
]);
</script>

<style lang="scss" scoped>
@import '../../assets/scss/main.scss';
@mixin cart{
  width: 100%;
  height: 100%;
}
.slider {
  width: 100%;
  height: 400px;
  background-color: rgb(164, 215, 224);
}
.card-carousel {
  height: 300px;
  text-align: initial;
  padding-right: 84px;
  width: 100%;
  h1{
    font-weight: bold;
  }
  p{
    padding: 12px;
    width: 90%;
    text-align: right;
  }
}
.card-carousel2 {
  background: #1c1a1ac7;
    margin-left: auto;
    margin-right: auto;
    color: aliceblue;

  position:absolute;
  height: 300px;
  text-align: center;
 
  width: 100%;
  z-index: 2;
  margin-top: 80px;
  h1{
    font-weight: bold;
  }
  p{
    padding: 15px;
    width: 100%;
    text-align: center;
  }
}

.row-btns{
  height: 40px !important;
  width: 100% !important;
}
.btn-carousel {
  width: 150px;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  position: relative !important;
  
}


.slide {
 @include cart;
  .row {
     @include cart;
    align-items: center;
    .bg {
      height: 450px;
      position: relative;
      .img1 {
        @include cart;
        position: absolute;
        bottom: 50px;
        right: 0;
        z-index: 0;
      }
      .img2 {
        position: absolute;
        bottom: 135px;
        right: 120px;
        z-index: 1;
        animation: fade 1.5s ease-in-out forwards;
      }
    }
  }
}

@keyframes fade {
  0% {
    opacity: 0;
    right: -10px;
  }
  100% {
    opacity: 1;
    right: 120px;
  }
}

@media #{$bp-xs} {
  .card-carousel2{
    margin-top: 50px;
  }
}
@media #{$bp-ms} {
.card-carousel2{
    margin-top: 50px;
  }
}
@media #{$bp-md} {
  
}
@media #{$bp-lg} {
 
}
@media #{$bp-max-ms} {
  .carousel-inner{
    .row{
      margin: 0;
    }
  }
  .card-carousel{
    display: none;
  }
 
.col-img{
  display: none;
}
.card-carousel2{
text-align:center;
p{
  text-align:center;

}
}
}
@media #{$bp-min-ms}{
.card-carousel2{
  display: none;
}
.img3{
  
  display: none;
}
}
</style>