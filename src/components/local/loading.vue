<template>
    <div>
        <div class="row p-3">
   <!-- {{item}} -->
   <div class="box">
    <div class="row">
     <div class="load1" :class="{active: item == 1 }" ></div>
     <div class="load1" :class="{active: item ==2 }" ></div>
     <div class="load1" :class="{active: item == 3 }" ></div>
     <div class="load1" :class="{active: item == 4 }"></div>
     <div class="load1" :class="{active: item == 5 }" ></div>
    </div>

   </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                item:1,

            }
        },
        created(){
            setInterval(()=>{
                if (this.item<5){

                    this.item++
                }
                else if(this.item=5){
                    this.item =1
                }

            },100)
        }
        
    }

    
</script>

<style lang="scss" scoped>
.active{
   
  
  
    position: relative;
    top: 10px;
    background-color: orange !important;
    transition: 1s;
   
}

@mixin baseLoad{
    
    
    transition: 1s;
    transition: 0.3s;
       display: block;
        width: 20px;
        height: 30px;
        margin: 5px;
        border-radius:50% ;
        background: blueviolet;
}
   .row{
    justify-content: center;
    align-items: center;
    .boox{
        height: 100%;
        .row{
            height: 100%;
             justify-content: center;
          align-items: center;
        }
    }
    .load1{
         @include baseLoad;
        
    }
   
   }
</style>