<template>
	<div id="kefu">
		<div id="aa">
			<van-nav-bar
			  title="客服服务 "
			  left-text=""
			  left-arrow
			  @click-left="onClickLeft"
			  :fixed="true"
			/>
		</div>
		
		<div id="bb">
			<van-grid clickable :column-num="2">
			  <van-grid-item
			    icon="home-o"
			    text="常见问题"
			    to="/apengchangjian"
			  />
			  <van-grid-item
			    icon="phone-o"
			    text="在线客服"
			    to="/apengliaotian"
			  />
			</van-grid>
			
			<van-cell title="反馈" is-link />
			<van-cell title="服务条款" is-link />
			<van-cell title="售后规则" is-link />
			<van-cell title="运费规则" is-link />
		</div>
		
		
		
		
	</div>
</template>

<script>
	import axios from "axios"
	
	export default{
		name:'apengkefu',
		data(){
			return{
				
			}
		},
		methods:{
			 onClickLeft() {
		      this.$router.push('/jsshome')
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