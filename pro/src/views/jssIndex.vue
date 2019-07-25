<template>
	<div>
		<!--头部输入框-->
		<!--<van-nav-bar
		  left-text="客服"
		  right-text="信息"
		  :fixed="true"
		  @click-left="tap()"
		  @click-right="onClickRight"
		/>-->
		<router-view ></router-view>
			<!--底部-->
			<van-tabbar v-model="active">
			  <van-tabbar-item name="home" icon="home-o" to="/jssHome">首页</van-tabbar-item>
			  <van-tabbar-item name="search" icon="search" to="/apengcaipin">全部菜品</van-tabbar-item>
			  <van-tabbar-item name="friends" icon="wap-nav" to="/dfhHotlists">常用清单</van-tabbar-item>
			  <van-tabbar-item name="setting" icon="shopping-cart" to="/cart">购物车</van-tabbar-item>
			  <van-tabbar-item name="setting" icon="friends-o" to="/my">我的</van-tabbar-item>
			</van-tabbar>
		
		</div>
</template>

<script>
	import axios from "axios"
	export default {
		data() {
		    return {
		    	active: 0,
		      	time: 30 * 60 * 60 * 1000,
		      	active: 0,
		      	list:[],
		      	count: 0,
      			isLoading: false,
      			
		    }
		},
	  methods: {
	  	onClickLeft() {
	      Toast('返回');
	    },
	    onClickRight() {
	      Toast('按钮');
	    },
	    onRefresh() {
	      setTimeout(() => {
	        this.$toast('刷新成功');
	        this.isLoading = false;
	        this.count++;
	      }, 500);
	    },
	    
	  },
	  mounted(){
	  	
	    }
	    
	}
</script>

<style scoped="">
	*{
		margin-top:0;
		padding-top:0;
	}
	#zhongjian{
		margin-top:46px;
		margin-bottom:50px;
	}
	.box{
		position: absolute;
		top: 0;
		left:57px;
	}
	#lun{
		width:100%;
		height:100px;
	}
	#tu{
		background:#f00;
	}
	.shijian{
		float: right;
	}
	
</style>