<template>
	
	<div>
		<!--头部输入框-->
		<div class="tubiao">
			<van-icon name="setting-o" size="24" color="#fff" @click="she"/>
			&nbsp;&nbsp;&nbsp;
			<van-icon name="chat-o" size="24" color="#fff" @click="xin"/>
		</div>
		
		<div class="box">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			she(){
				this.$router.push("/setting")
			},
			xin(){
				this.$router.push("/Message")
			}
		}
	}
</script>

<style scoped="">
	.box{
		/*margin-top:46px;*/
	}
	.tubiao{
		
		
		background:#000;
		height:46px;
/*		border-bottom: 1px solid #f1f1f1;*/
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
</style>