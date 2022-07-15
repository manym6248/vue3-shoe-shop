<template>
  <router-link class="card shadow rounded-3" :to="{ path: '/productpage' }">
    <div class="img rounded-3">
      <div class="Discount  ">
        <h5>60%</h5>
      </div>
      <img
        class="img-fluid image rounded-3"
        src="../../assets/png/3.png"
        alt=""
      />
      <div class="textcart rounded-3">
        <h4>نایک</h4>
        <div class="row">
          <div class="col-6"><h5>200000</h5></div>
          <div class="col-6">
            <div class="row1">
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
            </div>
          </div>
        </div>
        <div class="r2">
          <button class="b1 btn btn-green"><i class="bi bi-plus"></i></button>
          <button class="b2 btn btn-green">مشاهده محصول</button>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  props: ["item"],
  setup(props) {
    const item = reactive(props.item);
  },
};
</script>

<style lang="scss" scoped>
@mixin Discount-img {
  content: "";
  display: block;
  position: absolute;
  border-radius: 0px 50px;
}
.Discount {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #fb8c00;
    left: 12px;
    top: 9px;
    text-align: center;
    color: white;
    border-radius: 50px;
  h5{
    padding-top: 15px;
  }
}
.card {
  width: 100%;
  height: 310px;
  border: none;

  .img {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(37, 245, 148, 0.411);
    .image {
      position: absolute;
      width: 80%;
      height: 90%;
      left: 20px;
      bottom: 10px;
      z-index: 0;
    }
    .textcart {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 124px;
      text-align: right;
      padding: 9px;
      color: #ffff;
      background: linear-gradient(
        0deg,
        rgba(208, 208, 208, 1) 0%,
        rgba(124, 124, 124, 1) 0%,
        rgba(61, 48, 96, 0) 80%
      );
      .row1 {
        display: flex;
        flex-direction: row;
        direction: ltr;
        i {
          color: rgb(240, 196, 3);
        }
      }
      .r2 {
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: row;
        color: #ffff;
        .b1 {
          height: 38px;
          width: 25%;
          background-color: darkgreen;
          i {
            font-size: 16px;
            font-weight: bold;
            color: #ffff;
          }
        }
        .b2 {
          height: 38px;
          width: 73%;
          margin-right: 5px;
          background-color: rgb(118, 219, 223);
          color: darkgreen;
        }
      }
    }
  }
}
</style>