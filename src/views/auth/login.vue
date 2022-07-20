<template>
<div class="big-main">

  <div class="containr ">
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
            />
            <label for="floatingInput"> ایمیل</label>
          </div>
          <div class="form-floating ">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">رمز</label>
          </div>
          <div class="row row2">

          <button class="btn btn-primary">ورود</button>
          <button type="button" class="btn btn-link"  @click="$router.push('Register')">ثبت نام</button>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.big-main{
   
    background-image: url(../../assets/content/24.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
.containr {
  height: 100vh;
  .row2{
    justify-content: space-between;
  }
  .row1 {
    justify-content: center;
    align-items: center;
    direction: ltr;
    height: 100%;
    .form-control{
        background-color: white ;
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