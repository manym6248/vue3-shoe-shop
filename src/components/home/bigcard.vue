<template>
    <div class="containr mt-4 pa-0">
      <div class="paralax1">
       <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-6 col-ms-6 col-6 " v-for="item in 4 " :key="item">
        <card class=" mt-sm-3  mt-3" ></card>
        </div>
      </div>
      <div class="row pt-3 rowbig">
        <div class="col-xl-3 col-lg-3 col-md-6 col-ms-6 col-6" v-for="item in 4 " :key="item">
        <card class=" mt-sm-3  mt-3"></card>
        </div>
      </div>

      </div>
    </div>
</template>
<script>
import card from '../local/card.vue'
    export default {
        components:{
            card
        }
    }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/main.scss';
.paralax1{
  height: 100%;
  width: 100%;

 .card1 {
  width: 100%;
  height: 310px;
  background-color: green;
}
}
@media #{$bp-max-ms} {
      
  .rowbig{
    display: none;
  }
}

</style>