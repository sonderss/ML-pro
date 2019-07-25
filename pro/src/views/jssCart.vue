<template>
	<div>
		<!--头部输入框-->
		<van-nav-bar
			title="购物车"
			:fixed="true"
		  	right-text="编辑"
		  	@click-right="tap()"
		 />
		<div class="box">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			tap(){
				this.$router.push("/payGoods")
			}
		}
	}
</script>

<style scoped="">
</style>