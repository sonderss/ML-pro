<template>

<div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <van-tabs v-model="active" @click="tap">
        <van-tab title="为我推荐" id='di' >
            <van-card
                v-for='item in list'
                :price="item.price"
                :desc="item.desc"  
                :title="item.name"
                :thumb="item.photo"
                @click="tap1(item.id)"
                :key='item'
                
            />
        </van-tab>

        <van-tab title="常用清单" id='di' :name='uid'>
            <van-card
                v-for='item in list1'
                :price="item.price"
                :desc="item.desc"  
                :title="item.name"
                :thumb="item.photo"
                @click="tap1(item.id)"
                 :fixed='true'
                 :key='item'
            />
        </van-tab>
    </van-tabs>
    </van-pull-refresh>
</div>

</template>

<script>
import axios from 'axios'
export default {
    name:'dfhHotlists',
    data(){
        return{
            list:[],
            active: 2,
            isLoading: false,
            uid:1,
            list1:[]//常用清单
          
        }
    },
    mounted(){
      
        
        axios({
            method:'post',
            url:'http://106.12.52.107:8081/MeledMall/menu/recommend',
        }).then((data)=>{
            this.list = data.data.info
        })
    },
   methods:{
        onRefresh(){
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
            }, 500);
        },
        tap1(pid){
            this.$router.push("/dfhDetail/"+pid)
        },
        tap(id,name){
               
               this.uid =Math.ceil(Math.random()*8)
                    axios({
                        method:'post',
                        url:'http://106.12.52.107:8081/MeledMall/menu/childMenu',
                        params:{id:this.uid}
                    }).then((data)=>{
                      
                       this.list1= data.data.info

                    })
               
        }
   }
    
}
</script>

<style>
#di{
	margin-bottom: 50px;
}
</style>
