<template>
  <div>
    <div class="card shadow">
      <div class="head">
        <div class="row m-0">
          <div class="search rounded">
            <div class="input-group rounded-pill mb-3">
              <li
                class="form-control"
                data-bs-toggle="collapse"
                href="#collapseExample2"
                aria-expanded="false"
                aria-controls="collapseExample"
                @click="collapse = !collapse"
              
              >
                <option selected>{{textgategory}}</option>
                <option value="
                "></option>
                <ul class="shadow " v-if="collapse">
                  <li
                    id="collapseExample2"
                    v-for="(item, i) in gategorys"
                    :key="i"
                    :value="i + 1"
                    @click="getgategory(item)"
                  >
                    {{ item }}
                  </li>
                </ul>
              </li>
            </div>
          </div>   
          <div class="search rounded m-0">
            <div class="input-group rounded-pill mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="جستجو"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
      </div>
      <table class="table m-0">
        <thead>
          <tr>
            <th scope="col"></th>

            <th scope="col">نام</th>
            <th scope="col">دسته</th>
            <th scope="col">عملیات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in list" :key="item">
            <td scope="row" class="image">
              <div class="row m-0">
                {{ i + 1 }}
                <div class="img">
                  <img :src="item.image"  />
                </div>
              </div>
            </td>
            <td class="text-truncate name">{{ item.title }}</td>
            <td class="text-truncate">{{ item.category }}</td>
            <td class="px-0 do">
              <button class="btn btn-link">
                <font-awesome-icon icon="fas fa-edit" />
              </button>
              <button class="btn btn-link">
                <font-awesome-icon icon="fas fa-trash" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "../../../axios.congfig";
export default {
  data() {
    return {
      textgategory:"انتخاب دسته",
      gategorys: [],
      collapse:false,
    };
  },
  methods: {
    getgategory(items) {
      console.log(items);
      this.textgategory = items; 
      this.$store.dispatch("getGategoryProduct", items);
    },
  },
  computed: {
    list() {
      return this.$store.getters.product;
    },
  },
  created() {
    axios
      .get("/products/categories")
      .then((res) => (this.gategorys = [...res.data]));
    this.$store.dispatch("AllProducts");
  },
};
</script>

<style lang="scss" scoped>
ul {
  right: 0;
  padding: 1px;
  position: absolute;
  top: 45px;
  width: 174px;
  border: 1px solid gainsboro;
  border-radius: 5px ;

  li {

    background-color: white ;
    padding: 8px;
    &:hover{
      background-color: #7367f0 ;
      color: white;
    }
  }
}
.img {
  height: 50px;
  width: 80px;

  img {
    padding: 5px;
    height: 100%;
    width: 100%;
  }
}
.head {
  width: 100%;
  height: 80px;
  .row {
    height: 100%;
    align-items: center;
    .search {
      margin-right: 12px;
      text-align: right;
      position: relative;
      height: 45px !important;
      .input-group {
        .form-control {
          border: 1px solid rgba(128, 128, 128, 0.418);
          position: relative;
          height: 40px;
          width: 100%;
          background-color: unset;
          right: -13px;
          top: 2px;
          &:focus {
            box-shadow: 0px 0px 3px #0e00ac;
            border: none !important;
          }
        }
      }
    }
  }
}
thead {
  background-color: #f3f3f0;
  text-align: center;
}
tbody {
  text-align: center;
  .row {
    height: 100%;
    align-items: center;
    justify-content: start;
  }
  td {
    vertical-align: middle;
  }
  tr {
    .do {
      max-width: 80px;
    }
    .name {
      max-width: 200px;
    }
    .image {
      max-width: 70px;
    }
    transition: 0.3s;

    &:hover {
      background-color: #7267f03b;
    }
  }
}
</style>