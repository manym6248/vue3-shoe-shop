<template >
  <router-view />
</template>
<script >
import { useMeta } from 'vue-meta';
export default {
  setup() {
    useMeta({
      title: 'مغان شوز',
      htmlAttrs: { lang: 'fa', amp: true }
    })
  }
}
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
  height: max-content;
  margin-left: auto;
  margin-right: auto;
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
    width: 98%;
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

@media #{$bp-min-ms} {
  .offcanvas {
    display: none !important;
  }

  .list1 {
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
  width: 100%;
}</style>
