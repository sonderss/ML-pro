<template>
	<div id="top">
		<div id="aa">
			<van-nav-bar
			  title="常见问题 "
			  left-text=""
			  left-arrow
			  @click-left="onClickLeft"
			  :fixed="true"
			/>  
		</div>
		<div id="bb">
			
			<van-tabs v-model="active">
			  <van-tab title="账户问题">
			  	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim ut culpa tenetur nisi natus repellendus soluta deleniti iure aspernatur nihil illum ex fuga dolorum hic quis nemo aut quisquam?</p>
			  </van-tab>
			 
			</van-tabs> 
			
			 
			 <van-tabs v-model="active">
			  <van-tab title="订单问题">
			  	 	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim ut culpa tenetur nisi natus repellendus soluta deleniti iure aspernatur nihil illum ex fuga dolorum hic quis nemo aut quisquam?</p>
			  </van-tab>
			 
			</van-tabs> 
			<van-tabs v-model="active">
			  <van-tab title="发票问题">
			  	 	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim ut culpa tenetur nisi natus repellendus soluta deleniti iure aspernatur nihil illum ex fuga dolorum hic quis nemo aut quisquam?</p>
			  </van-tab>
			 
			</van-tabs> 
			
			
		</div>
		
		
	</div>
</template>

<script>
	import axios from "axios"
	
	export default{
		name:'apengchangjian',
		data(){
			return{
				active:''
			}
		},
		methods:{
			 onClickLeft() {
		      this.$router.go(-1)
		    },
		}
	}
	
</script>

<style>
	#aa{
		height:46px;
		border-bottom:1px solid #ccc;
	}
</style>