<template>
  <div class="big-main">
    <div class="containr">
      <div class="row row1 m-0">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-10">
          <div class="card shadow p-3">
            <h3 class="pb-4">ورود</h3>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="email"
                @change="login"
                :class="{ 'is-invalid': input }"
              />
              <div class="invalid-feedback pe-2">{{ inputVtext }}</div>
              <label for="floatingInput"> ایمیل</label>
            </div>
            <div class="form-floating">
              <input
                :class="{ 'is-invalid': passwordInput }"
                type="password"
                class="form-control"
                id="floatingPassword input"
                placeholder="Password"
                v-model="password"
              />
              <div class="invalid-feedback pe-2">{{ pVtext }}</div>
              <label for="floatingPassword">رمز</label>
            </div>
            <div class="row row2">
              <button class="btn btn-primary" @click="login">ورود</button>
              <button
                type="button"
                class="btn btn-link"
                @click="$router.push('Register')"
              >
                ثبت نام
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | ورود  ` : `SITE_NAME`
    }}</template>
  </metainfo>
</template>

<script setup>
import axios from '../../../axios.congfig'
import { reactive, ref } from "vue";

const email = ref("");
const input = ref(false);
const inputVtext = ref("");
const password = ref("");
const pVtext = ref("");
const passwordInput = ref(false);
const login = () => {
    let text;
    let pas;
  if (!email.value.length) {
     input.value = true;
    inputVtext.value = "ایمیل لازم است ";
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    input.value = true;
    inputVtext.value = "ایمیل  معتبر نیست ";
   
  } else{
     text = email.value
    input.value = false;};
   if (!password.value.length) {
    passwordInput.value = true;
    pVtext.value = "رمز لازم است";
  } else if (password.value.length < 6 && password.value.length) {
    pVtext.value = "رمز معتبر نیست";
  } else {
    passwordInput.value = false;
    pas = password.value
   
  const data = {
         username: "mor_2314",
         password: "83r5^_"
  }
  axios.post('https://fakestoreapi.com/auth/login',data).then(
    res=>{
      console.log(res.data);
    }
  )
  }
  
};
</script>

<style lang="scss" scoped>
.is-invalid {
  background-image: none !important;
}
.invalid-feedback {
  text-align: end !important;
}
.big-main {
  background-image: url(../../assets/content/24.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
}
.containr {
  height: 100vh;
  .row2 {
    justify-content: space-between;
  }
  .row1 {
    justify-content: center;
    align-items: center;
    direction: ltr;
    height: 100%;
    .form-control {
      background-color: white;
    }
    label {
      right: 0;
      left: unset;
    }
    .btn {
      margin: 12px;
      width: 80px;
    }
  }
}
</style>