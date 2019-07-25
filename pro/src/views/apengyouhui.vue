<template>
	<div id="top">
		
		<div id="aa">
			<van-nav-bar
			  title="我的优惠券 "
			  left-text=""
			  right-text="失效优惠券"
			  left-arrow
			  @click-left="onClickLeft"
			  @click-right="onClickRight"
			  :fixed="true"
			/>
		</div>
		
		<div id="bb">
			
			<van-card
				v-for="item in list"
				:desc="item.id"
				:price="item.coupon"
				:title="item.status"
				:key='item'
			/>
			
		</div>
		
	</div>
</template>

<script>
	import axios from "axios"
	
	export default{
		name:'apengyouhui',
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			axios({
				method:"post",
				url:'http://106.12.52.107:8081/MeledMall/coupon/showCoupon',
				params:{id:1}
			}).then((data)=>{
				
				this.list = data.data.info
				//console.log(data.data.info)
			})
		},
		methods:{
			 onClickLeft() {
		      this.$router.go(-1)
		    },
		    onClickRight() {
		       this.$router.push("/apengshixiao")
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