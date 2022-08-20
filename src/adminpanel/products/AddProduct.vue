<template>
  <div>
    <div class="card">
      <div class="row m-0 mx-3 mt-3 px-3">
        <div class="col-2">
          <div class="upload-img mt-3 shadow-sm" @click="$refs.file.click()">
            <input type="file" ref="file" @change="uploadimg" />
          </div>
        </div>
        <div class="col-2 mt-3" v-for="(item ,i) in images" :key="i">
          <div
            class="upload-img p-1 shadow-sm"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop${i}"
          >
            <img :src="item.src" />
            <div
              class="modal fade"
              id="#staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    {{i}}
                    <img :src="images[i].src" />
                    </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      حذف
                    </button>
                    <button type="button" class="btn btn-primary">
                         تعویض عکس
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mx-3 mb-3">
        <div class="col-6 pt-3">
          <input type="email" class="form-control" placeholder="نام محصول" />
        </div>
        <div class="col-6 pt-3">
          <input type="email" class="form-control" placeholder="قیمت محصول" />
        </div>
        <div class="col-6 pt-3">
          <input type="email" class="form-control" placeholder=" تخفیف" />
        </div>
        <div class="col-6 pt-3">
          <select class="form-select" aria-label="Default select example">
            <option selected>دسته ها</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-12">
          <textarea
            class="form-control mt-3"
            id="exampleFormControlTextarea1"
            placeholder="توضیحات :"
            rows="3"
          ></textarea>
        </div>
        <div class="col-12">
          <button class="btn btn-primary my-3">ثبت</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
    };
  },
  methods: {
    uploadimg(event) {
      const file = event.target.files[0];

      // for show
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (image) => {
        const img = { src: image.target.result };
        this.images.push(img);

        console.log(this.images);
      };
    },
  },
};
</script>

<style lang="scss" scoped>
input,
select,
textarea {
  background-color: transparent;
  &:focus {
    background-color: transparent;
  }
}
.col-12 {
  .btn {
    width: 80px;
    float: left;
  }
}
.upload-img {
  width: 100%;
  height: 90px;
  border: 1px solid gainsboro;
  border-radius: 5px;
  padding: 0;
  cursor: pointer;
  input {
    display: none;
  }
  img {
    height: 100%;
    width: 100%;
  }
}
</style>