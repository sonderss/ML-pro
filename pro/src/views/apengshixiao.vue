<template>
	<div id="top">
		
		<div id="aa">
			<van-nav-bar
			  title="失效优惠券"
			  left-text=""
			  left-arrow
			  @click-left="onClickLeft"
			  :fixed="true"
			/>
		</div>
		
		<div id="bb">
			
			<van-tabs v-model="active">
			  <van-tab title="已使用">
			  	<van-card
				v-for="item in list1"
				:price="item.coupon"
				:pid="item.id"  
				:title="item.status"
				:key='item'
			/>
			</van-tab>
			  <van-tab title="已过期">
			  	<van-card
				v-for="item in list"
				:pid="item.id"
				:price="item.coupon" 
				:title="item.status"
				:key='item'
				
			/>
			</van-tab>
			 
			</van-tabs>
			
			
			
		</div>
		
	</div>
</template>

<script>
	import axios from "axios"
	
	export default{
		name:'apengshixiao',
		data(){
			return{
				list:[],
				active:'',
				list1:[],
				
			}
		},
		mounted(){
			var _this = this
			axios({

				method:"post",
				url:'http://106.12.52.107:8081/MeledMall/coupon/showFailureCoupon',
				params:{id:1}
			}).then((data)=>{
				
				 this.date = data.data.info;
				
					this.date.map((item)=>{
						if(item.status == "已使用"){
						_this.list1.push(item)
					//console.log(_this.list1)
						}
						if(item.status == "已过期"){
						_this.list.push(item)
						
						}
					
				})
			})
		},
		methods:{
			 onClickLeft() {
		      this.$router.go(-1)
		    },
		    
		}
	}
	
	
</script>

<style>
#bb{
		margin-top:46px;
	}
	#aa{
		height:46px;
		border-bottom:1px solid #ccc;
	}
</style>