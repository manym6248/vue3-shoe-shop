<template>
    <div class="slide rounded-3">
        <div class="container">
            <div class="row">
                <div class="col-6 col1" >
                    <h4>کانکشن بهاره</h4>
                    <p>با تخفیف ویژه خرید اینرنتی</p>
                </div>
                <div class="col-6 col2">
                    <div class="image">
                        <img class="img" src="../../assets/png/1.png" alt="">

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.col1{
    margin: auto;
    text-align: right;
}
.slide{
    .container{
        height: 100%;
        .row{
            height: 100%;
            .col1{
                height: 50%;
                margin: auto;
            }
            .col2{
                height: 100%;
               
            }
        }
    }
    height: 100%;
    width: 100%;
    background-color: antiquewhite;
    .row{
        .image{
    height: 100%;
    width: 100%;
    position: relative;
   .img{
 
    height: 95%;
    padding-top: 15px;
    width: 100%;
   }
}
    }
}


</style>