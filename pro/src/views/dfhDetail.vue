<template>
    <div>
        <van-nav-bar
            title="详情页"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
       <van-card
       class="oo"
        :price="list.price"
        :desc="list.desc"  
        :title="list.name"
        :thumb="list.photo"
        />
        <van-stepper v-model="value" class="bj"/>
        <van-goods-action>
            <van-goods-action-icon
                icon="chat-o"
                text="客服"
                @click="onClickIcon"
            />
            <van-goods-action-icon
                icon="cart-o"
                text="购物车"
                @click="onClickIcon"
            />
            <van-goods-action-button
                type="warning"
                text="加入购物车"
                @click="onClickButton"
                :disabled="bian"
            />
        </van-goods-action>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            list:[],
            value: 1,
            a:'',
            id:null,
            bian:true
        }
    },
    methods: {
    	
        onClickIcon() {
            this.$router.push("/payGoods/")
        },
            onClickButton() {
            Toast('点击按钮');
        },
        onClickButton(){
            var _this = this
            axios({
                method:'post',
                url:'http://106.12.52.107:8081/MeledMall/shopCar/addShopCar',
                params:{uid:this.id,mid:this.list.id,mname:this.list.name,mphoto:this.list.photo,mprice:this.list.price}
            }).then((data)=>{
                if(data.data.code == 1 ){
                   alert('添加成功')
                }
            }),
            axios({
                method:'post',
                url:'http://106.12.52.107:8081/MeledMall/shopCar/editMnum',
                data:{
                    mnum:this.value,
                    uid:this.id,
                    mid:this.a
                }
            }).then((data)=>{
                //console.log(data.data)
            })
        },
        onClickLeft(){
            this.$router.go(-1)
        }
    },
    mounted(){
        var a = this.$route.params.id
        this.a = a
        var id = localStorage.getItem("id")
        this.id = id
        //console.log(this.a)
        axios({
            method:'post',
            url:'http://106.12.52.107:8081/MeledMall/menu/child',
            params:{id:this.a}
        }).then((data)=>{
            this.list = data.data.info
        }),
        axios({
            method:'post',
            url:'http://106.12.52.107:8081/MeledMall/shopCar/showShopCar',
            params:{uid:this.id}
        }).then((data)=>{})
        if(this.id){
        	this.bian = false
        }
    }
}
</script>

<style>
.oo{
    position: relative;
}
.bj{
    position: absolute;
    right: 30px;
    top: 100px;
}
</style>
