<template>
    <div>
        <van-nav-bar
            title="充值中心"
            left-text="返回"
            
            left-arrow
            @click-left="onClickLeft"
         
        />
    <van-panel title="充值" desc="优惠：充值即送优惠券" status="活动中">
        
        </van-panel>
        <van-cell-group>
        <van-field v-model="value" placeholder="请输入金额" />
        </van-cell-group>
        <div class="pay">
        <van-button type="primary" @click="pay()">充值</van-button>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            value:'',
            id:null,
            
           
        }
    },
     methods: {
            onClickLeft() {
                this.$router.go(-1)
            },
            pay(){
                axios({
                    method:'post',
                    url:'http://106.12.52.107:8081/MeledMall/user/recharge',
                    params:{balance:this.value,id:this.id}
                }).then((data)=>{
                    //console.log(data.data)
                    if(this.id){
                    this.$dialog.alert({
                        message: '成功充值：'+this.value
                        })
                    }else{
                    	this.$dialog.alert({
                        message: '请先登录！'
                        })
                    	
                    }
                })
            }
           
    },
    mounted(){
    	 var id = localStorage.getItem('id')
    	 this.id = id
    	
    }
}
</script>
<style scoped="">
    .pay{
        display: flex;
        justify-content: flex-end
    }
</style>