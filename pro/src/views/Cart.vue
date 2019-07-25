<template>
<div>
    <div class="cartshow">
        
        <van-card
        v-for="item in list"
        :num="item.mnum"
        :price="item.mprice"
        :desc="abc"  
        :title="item.mname"
        :thumb="item.mphoto" 
        :key='item'
       
        >
        <div slot="footer">
          
        </div>
      </van-card>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
      name:'cart',
      data(){
        return{
          /*value: 1,*/
          list:[],
          nums:'1',
          id:null,
          abc:'虚席以待'
        }
      },
      mounted(){
      	var id = localStorage.getItem('id')
        this.id = id
        //console.log(this.id)
        if(this.id){
        	this.abc = '这是一个商品'
        }
          axios({
            method:'post',
             url:'http://106.12.52.107:8081/MeledMall/shopCar/showShopCar',
             params:{uid:this.id}
             //data:{token:token}
          }).then((data)=>{
            //console.log(data.data.info)
            this.list = data.data.info
          })
          
      },
      methods: {
        num(){
          //  console.log(this.value)
           this.nums = this.value 
        },
//      enter(mid){
//           this.$router.push('/dfhDetail/'+mid)
//           console.log(mid)
//      }
      },
}
</script>

<style scoped="">
.cartshow{
  margin: 54px 0 50px 0;
}
</style>