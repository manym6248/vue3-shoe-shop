<template>
  <div>
    <div class="shadow" :class="{ toast1: toast }">
      <h5 class="m-1 text" v-if="toast">{{toastText}}</h5>  
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    toast() {
      return this.$store.state.products.toast;
    },
    toastText() {
      return this.$store.state.products.toastText;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/main.scss";
.toast1 {
  padding: 23px;
  position: fixed;
  width: 300px;
  height: 80px;
  border-radius: 5px;
  background-color: #663399b0;
  border: 1px solid gray;
  bottom: 24px;
  right: 24px;
  z-index: 2000;
   animation: fade 2s ease-out forwards;

  color: wheat;
  .text {
    position: relative;
  }
}
@keyframes fade {
  0% {
    display: none;
  }
  50%{
     right: 24px;
    display: block;
    opacity: 1;
  }

  100% {
    right: -300px;
    opacity: 0;
  }
}
@media #{$bp-xs} {
  .toast1{
    width: 150px;
    padding: 8px;
    
    h5{
      padding-top: 16px;
      font-size: 12px;
      height: 60px;
    }
  }
  
}
</style>