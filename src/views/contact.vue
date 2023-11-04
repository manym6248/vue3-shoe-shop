<template>
  <div class="title">
    <div class="containr mt-4">
      <div class="card card-header  shadow ">
        <div class="row  m-0  row-cart">
          <div class="col-12 px-0">
            <h5 class="text-truncate header-title">تماس با ما</h5>
          </div>

        </div>
      </div>
      <div class="card shadow mt-3 mb-5">
        <div class="row m-0 row-1">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-10">
            <a class="card shadow rounded-pill card2 my-3" href="https://www.linkedin.com/in/mehrdad-moazzeny-3520a0214/">
              <div>
                <div class="row row-2 m-0">
                  <div class="col-10">
                    <h4 class="text-truncate">
                      linkedin.com/in/mehrdad-moazzeny
                    </h4>
                  </div>
                  <div class="col-2 pe-0">
                    <img class="img-thumbnail rounded-circle shadow m-3 me-0"
                      src="../assets/content/LinkedIn_logo_initials.png" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-10">
            <a class="card shadow rounded-pill card2 mb-3"
              href="https://instagram.com/mehrdad.moazzeny?igshid=YmMyMTA2M2Y=">
              <div>
                <div class="row row-2 m-0">
                  <div class="col-10">
                    <h4 class="text-truncate">instagram.com/mehrdad.moazzeny</h4>
                  </div>
                  <div class="col-2 pe-0">
                    <img class="img-thumbnail rounded-circle shadow m-3 me-0"
                      src="../assets/content/ca5b4df7080ab2cb871cae11baa791b1.png" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-10">
            <a class="card shadow rounded-pill card2 mb-3"
              href="https://instagram.com/mehrdad.moazzeny?igshid=YmMyMTA2M2Y=">
              <div>
                <div class="row row-2 m-0">
                  <div class="col-10">
                    <h4 class="text-truncate">instagram.com/mehrdad.moazzeny</h4>
                  </div>
                  <div class="col-2 pe-0">
                    <img class="img-thumbnail rounded-circle shadow m-3 me-0"
                      src="../assets/content/ca5b4df7080ab2cb871cae11baa791b1.png" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-10">
            <a class="card shadow rounded-pill card2 mb-3"
              href="https://instagram.com/mehrdad.moazzeny?igshid=YmMyMTA2M2Y=">
              <div>
                <div class="row row-2 m-0">
                  <div class="col-10">
                    <h4 class="text-truncate">instagram.com/mehrdad.moazzeny</h4>
                  </div>
                  <div class="col-2 pe-0">
                    <img class="img-thumbnail rounded-circle shadow m-3 me-0"
                      src="../assets/content/ca5b4df7080ab2cb871cae11baa791b1.png" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-10"></div>
        </div>
      </div>
    </div>
    <metainfo>
      <template v-slot:title="{ content }">{{ content ? `${content} | تماس با ما` : `SITE_NAME` }}</template>
    </metainfo>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.title {
  height: 600px;
  width: 100%;
  overflow-y: scroll;
}
.card-header {
  background-color: $color-primary;
}

.header-title {
  text-align: right;
  padding: 10px;
  color: white;
}
.row-1 {
  align-items: center;
  justify-content: center;
}
.row-2 {
  align-items: center;
  justify-content: center;
  text-align: left;
}
.card2 {
  width: 100%;
}
h4 {
  direction: ltr;
}
</style>