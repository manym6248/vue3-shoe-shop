<template>
   
  <div class="card shadow rounded-3 overflow-hidden">
    <div class="img rounded-3">
        <div v-if="!item" class="card shadow rounded-3">
  </div> 
      <router-link :to="{ name: 'productpage', params: { id: item.id } }">
        <div class="Discount">
          <h5>{{ (item?.id * 6) / 2 }}%</h5>
        </div>
        <img class="img-fluid image rounded-3" :src="item?.image" alt="" />
      </router-link>
      <div class="textcart">
        <div class="row row-name m-0 mb-1">
          <div class="col-6">
            <h4 class="text-truncate">{{ item?.title }}</h4>
          </div>
          <div class="col-6">
            <div class="row1">
              <h5>{{ item?.price }}$</h5>
            </div>
          </div>
        </div>
        <div class="r2">
          <button
            class="b1 btn btn-primary"
            @click.self="addTocart(item?.id)"
            id="liveToastBtn"
          >
            +
          </button>

        
          <button class="b2 btn btn-primary" @click="gopage(item?.id)">
            مشاهده
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{item:{
    type:Object,
    default:false,
  }},
  data() {
    return {
      toast: false,
    };
  },
  methods: {
    addTocart() {
      this.$store.commit('TOAST_TRUE', "به سبد خرید افزوده شد")
      this.$store.commit("ADD_TO_CART", this.item);
    },
    gopage(id) {
      this.$router.push({ name: "productpage", params: { id: id } });
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/main.scss";

@mixin Discount-img {
  content: "";
  display: block;
  position: absolute;
  border-radius: 0px 50px;
}
.Discount {
  z-index: 1;
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #fb8c00;
  left: 12px;
  top: 9px;
  text-align: center;
  color: white;
  border-radius: 50px;
  h5 {
    padding-top: 15px;
  }
}
.card {
  width: 100%;
  height: 310px;
  border: none;
  &:hover {
    .textcart {
      animation: move3 0.35s ease-in-out forwards;
    }
  }
  @keyframes move3 {
    from {
      transform: translateY(150px);
      height: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
      height: 94px !important;
    }
  }
  .img {
    position: relative;
    width: 100%;
    height: 100%;

    .image {
      position: absolute;
      width: 80%;
      height: 90%;
      left: 20px;
      bottom: 10px;
      z-index: 0;
    }
    .textcart {
      opacity: 0;
      background-color: #00000082;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 94px;
      text-align: right;
      padding: 9px;
      color: #ffff;
      border-radius: 0px 0px 0.5em 0.5em;
      .row-name {
        align-items: flex-end;
        h5 {
          color: #fb8c00;
          text-shadow: 0px 1px 3px;
        }
        h4 {
          text-shadow: 0px 1px 3px;
        }
      }

      .row1 {
        display: flex;
        flex-direction: row;
        direction: ltr;
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
          color: white;
        }
      }
    }
  }
}

@media #{$bp-max-ms} {
  .textcart {
    opacity: 1 !important ;
    height: 94px !important ;
    animation: unset !important;
  }
}
</style>