<template>
  <section>
    <div class="containr py-5">
      <div class="main-timeline-2">
        <div class="timeline-2 pt-0 left-2">
          <div class="card shadow p-3">
            <div class="row">
              <div class="col-lg-4 col-xl-4 col-md-4 col-sm-5 col-6">
                <div class="img-card rounded-circle">
                  <img
                    src="../assets/about/Untitled-1.png"
                    class="rounded-circle float-start shadow"
                  />
                </div>
              </div>
              <div class="col-lg-8 col-xl-8 col-md-8 col-sm-12 col-12 pe-0">
                <div class="card-body">
                  <h5 class="fw-bold mb-3 pt-0">مهرداد مؤذنی</h5>
                  <p class="mb-0">
                    با عرض سلام واحترام به مخاطبان گرامی من مهرداد موذنی هستم
                    طراح این سایت , این سایت صرفا برای ارائه به عنوان رزومه
                    ساخته شده و هیچ خردید فروشی در آن صورت نمیگیرد ودر این صحفه
                    قصد معرفی تکنولوژی ها وفیچر های به کار رفته در این سایت
                    اسلاید های بعدی را داریم
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline-2  right-2">
          <div class="card shadow p-3">
            <div class="row">
              <div class="col-lg-4 col-xl-4 col-md-4 col-sm-5 col-6">
                <div class="img-card rounded-3">
                  <img
                    src="../assets/about/Untitled-2.png"
                    class="rounded-3 float-start shadow"
                  />
                </div>
              </div>
              <div class="col-lg-8 col-xl-8 col-md-8 col-sm-12 col-12 pe-0">
                <div class="card-body">
                  <h5 class="fw-bold mb-3 pt-0">vue3</h5>
                  <p class="mb-0">
                    ما برای طراحی این سایت از   ویو  
                     که چندین مزیت نسبت به روش های قبلی از جمله کرد
                     عملکرد بهتر در زمان اجرا را دارد استفاده کردیم
                    همچنین این سایت با vue-router به صورت spa طراحی شده کمترین
                    رفرش تجربه راحتری به کاربر میبخشد هر چند spa ها seo friendly
                    نیستد تلاش کردیم با وسیله vue-meta , سئو بهتری به سایت
                    ببخشیم همچنین برای کنترل داده های خود نیز از vuex یکی از
                    بهترین در این حوزه است استفاده کردیم.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline-2 left-2">
          <div class="card shadow p-3">
            <div class="row">
              <div class="col-lg-4 col-xl-4 col-md-4 col-sm-5 col-6">
                <div class="img-card rounded-circle">
                  <img
                    src="../assets/about/bootstrap-social-logo.png"
                    class="rounded-circle float-start shadow"
                  />
                </div>
              </div>
              <div class="col-lg-8 col-xl-8 col-md-8 col-sm-12 col-12 pe-0">
                <div class="card-body">
                  <h5 class="fw-bold mb-3 pt-0">bootsrap5 و swiper</h5>
                  <p class="mb-0">
                    با استفاده از دستورات پیش فرض و رعایت اصول متناسب با طراحی
                    Bootstrap5 که آخرین نسخه آن می باشد زمان راه اندازی یک پروژه
                    را تا حد زیادی کاهش داده و خروجی آن را متناسب با
                    استانداردهای روز دنیا پیش بردیم . همچنین برای طراحی اسلاید
                    های خود از swiper که یکی از بهترین ها میباشد با طراحی کاملا
                    واکنشگرا(responsive ) استفاده شده.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline-2 right-2">
          <div class="card shadow p-3">
            <div class="row">
              <div class="col-lg-4 col-xl-4 col-md-4 col-sm-5 col-6">
                <div class="img-card rounded-circle">
                  <img
                    src="../assets/about/unnamed.png"
                    class="rounded-3 float-start shadow"
                  />
                </div>
              </div>
              <div class="col-lg-8 col-xl-8 col-md-8 col-sm-12 col-12 pe-0">
                <div class="card-body">
                  <h5 class="fw-bold mb-3 pt-0">github</h5>
                  <p class="mb-0">
                    در پایان نیز با تشکر از صبر وحوصله شما برای مطالعه مطالب
                    بالا آدرس github و کد های خود مربوط به این پروژه و پروژه
                    دیگر در حال اجرا را با شما به اشتراک می گذاریم:
                  </p>
                  <div class="items">
                    <li class="item">
                      <div class="row">
                        <span> آدرس این پروژه : </span>
                        <a
                          class="link text-truncate"
                          href="https://github.com/manym6248/website"
                        >
                          github.com/manym6248/website</a
                        >
                      </div>
                    </li>
                    <li class="item">
                      <div class="row">
                        <span> آدرس پروژه دیگر : </span>

                        <a
                          class="link text-truncate"
                          href="https://github.com/manym6248/website"
                        >
                          github.com/manym6248/website</a
                        >
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} |  درباره ما` : `SITE_NAME` }}</template>
  </metainfo>
  </section>
</template>
<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.items {
  padding: none;
  width: 100%;
  height: 100%;
  .item {
    width: 100%;
    list-style: none;
    .row {
      width: 100%;
      align-items: center;
      margin: 0px;
      padding-top: 5px;
      span {
        width: 140px;
        padding: 0px;
      }
      .link {
        direction: ltr;
        width: 180px;
        padding:0px;
      }
    }
  }
}
.main-timeline-2 {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 3px;
    background-color: #26c6da;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-right: -3px;
  }
}

.timeline-2 {
  .img-card {
    position: relative;
    img {
      height: 100% !important;
      width: 100%;
     

    
    }
  }
  .card {
    .row {
      height: 100%;
      align-items: center;
      .card-body {
        padding: 0;
        padding-left: 12px;
        text-align: justify;
      }
    }
  }
  position: relative;
  background-color: inherit;
  width: 50%;
  &::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    left: -11px;
    background-color: #26c6da;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
}

.left-2 {
  padding: 0px 0px 20px 40px;
  right: 0;
  &::before {
    content: " ";
    position: absolute;
    top: 18px;
    z-index: 1;
    left: 30px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }
}

.right-2 {
  padding: 0px 40px 20px 0px;
  right: 50%;
  &::before {
    content: " ";
    position: absolute;
    top: 18px;
    z-index: 1;
    right: 30px;
    border: medium solid white;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent white;
  }
  &::after{
 right: -14px;
  }
}





@media #{$bp-max-ms} {


 
    .main-timeline-2 {
    
    &::after{
      display: none;
    }
  }

  .timeline-2 {
 .img-card {
    height: 100% !important;
    width: 100%;

     
    img {
      height: 100%;
      width: 100%;
      margin-bottom: 12px;

    }
  }
      .card {
    .row {
      height: 100%;
      align-items: center;
      justify-content: center;
      .card-body {
        padding: 0;
       
        text-align: center;
      }
    }
  }
      width: 100%;
     position:unset;
     padding: 12px;
    &::after{
      display: none;
    }
    &::before{
      display: none;
    }
  }

  
}
</style>