<template>
  <div>
    <div class="row m-0">
      <div class="list-admin">
        <div class="list">
          <li class="nav-item">
            <h4 class="m-0">مغان شوز</h4>
          </li>
          <ul class="list-group p-0">
            <li class="item shadow-sm">
              <i class="bi bi-columns-gap"></i>
              داشبورد
            </li>
            <li class="item shadow-sm">
              <font-awesome-icon icon="fas fa-shopping-basket" />
              سفارش ها
            </li>
            <div class="dropdown">
              <li
                class="item shadow-sm"
                role="button"
               
                data-bs-toggle="collapse" href="#collapseExample"  aria-expanded="false" aria-controls="collapseExample"
              >
                <font-awesome-icon icon="fas fa-shopping-cart" />
                محصولات
                <font-awesome-icon class="icon" icon="fas fa-caret-down" />
              </li>

              <ul class=" collapse px-2" id="collapseExample">
                <router-link to="/AddProduct" class="item shadow-sm">
                  <font-awesome-icon icon="fas fa-cart-plus" />
                  افزودن محصول
                </router-link>
                <router-link to="/Productlist" tag="li" class="item shadow-sm">
                  <font-awesome-icon icon="fas fa-stream" />
                  لیست محصولات
                </router-link>
              </ul>
            </div>

            <li class="item shadow-sm">
              <font-awesome-icon icon="fas fa-users" />

              کاربران
            </li>
            <li class="item shadow-sm">
              <font-awesome-icon icon="fas fa-comment-alt" />

              نظرات کاربران
            </li>
            <li class="item shadow-sm">
              <font-awesome-icon icon="fas fa-envelope" />

              پیام ها
            </li>
          </ul>
        </div>
      </div>

      <div class="body-admin">
        <div class="col"></div>

        <div class="card shadow header-card">
          <div class="row">
            <div class="col-4">
              <div class="img-card rounded-circle">
                <img
                  src="../assets/about/Untitled-1.png"
                  class="rounded-circle float-start"
                />

                <div class="text">
                  <h6>مهرداد مؤذنی</h6>
                  <span>admin</span>
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="alarams">
                <button type="button" class="btn btn-link">
                  <span
                    class="
                      position-absolute
                     
                  
                      translate-middle
                      badge
                      rounded-pill
                      bg-danger
                    "
                  >
                    9
                  </span>
                  <font-awesome-icon icon="fas fa-envelope" class="fa-xl" />
                </button>
                <button type="button" class="btn btn-link">
                 <span class="position-absolute   translate-middle badge rounded-pill bg-danger">9 <span class="visually-hidden">unread messages</span></span>

                  <font-awesome-icon icon="fa-solid fa-bell" class="fa-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="spacer2"></div>
        <router-view class="mt-3 mr-4"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.spacer2{
  height: 70px;
}
.list-admin {
  width: 20%;
  height: max-content;

  .list {
    position: fixed;
    width: 20%;
    height: 100%;
    border-left: 1px solid #80808029;
    right: 0;
  }
  .nav-item {
    border-bottom: 1px solid #80808029;
    width: 100%;
    height: 60px;
    list-style: none;
    h4 {
      height: 100%;
      text-align: right;
      padding: 16px;
      color: #7367f0;
    }
  }
  .dropdown-menu {
    position: relative !important;
    transform: unset !important;
    background: no-repeat;
    border: none;
    margin: 0px;
    padding: 0;
    transition: 0.3s;
  }
  .icon {
    margin-top: 6px;
    float: left;
  }
  .list-group {
    height: max-content;
  }
  a{
    color: #000;
  }
  .router-link-active{
    color: #52297a;
  }

  .item {
    margin: 8px;
    margin-bottom: 4px;
    height: 50px;
    border-radius: 5px;
    transition: 0.3s;
    text-align: right;
    padding: 12px;
    background-color: white;
    display: block;
    &:hover {
      background-color: #7367f0;
      color: white;
    }
    &.show {
      color: white;
      background-color: #80808065;
      .icon {
        transform: rotate(180deg);
      }
    }
  }
}
.body-admin {
  width: 80%;
  position: relative;
  left: 0;

  padding-left: 12px;
  margin-top: 12px;
  padding: 14px;
  padding-right: 28px;

  .header-card {
    position: fixed;
    height: 70px;
    width: 77%;
    left: 12px;
    z-index: 1000;
    .row {
      margin: 0;
      height: 100%;
      align-items: center;
    }
    .img-card {
      position: relative;
      display: flex;
      flex-direction: row;
      .text {
        padding-top: 6px;
        text-align: right;
        margin-right: 8px;
        h6 {
          margin: 0;
          font-weight: bold;
        }
      }
      img {
        width: 55px;
        height: 55px;
        border: 1px solid gray;
        border-radius: 50px;
        position: relative;
      }
    }
    .alarams {
      text-align: end;
      .btn {
        position: relative;
        .badge{
          left: 36px;
          top: 7px !important;
        }
      }
    }
  }
}
</style>