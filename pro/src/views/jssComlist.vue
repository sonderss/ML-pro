<template>
	<div>
		<van-nav-bar
		  title="常用清单"
		 
		 
		  
		  :fixed='true'
		 />
		
		<form action="/">
		  <van-search
		    v-model="value"
		    placeholder="请输入带有食物类的关键词  比如：菜、鱼"
		    show-action
		    @search="onSearch"
		    @cancel="onCancel"
		    @input="tap()"
		    @click='tap1()'
		    style='margin-top: 50px;'
		  />
		</form>
		<router-view></router-view>
		<ul>
			<a href="#">
				<li v-for='item in sousuo'
					v-text="item.name"
					v-if="kongzhi"
					:key='item'
					>
				
				</li>
			</a>
		</ul>
	</div>
</template>

<script>
	import axios from "axios"
	export default {
		data(){
			return {
				list:[],
				a:this.$store.state.id,
				value:'',
				kongzhi:false
			}
		},
		computed:{
			sousuo(){
				var _this = this;
				var sousuo = [];
				this.list.map(function(item){
					if(item.name.search(_this.value) != -1){
						sousuo.push(item);
					}
				});
				return sousuo;
			}
			
				
		},
		methods:{
			tap1(){
				this.$router.push("/jssZhezhao")
			},
			onSearch(){
				
			},
			onCancel(){
				
			},
			
		 	tap(){
				this.kongzhi = !this.kongzhi//取反
				if(this.value == ''){
					this.kongzhi = false
				}
			}
		},
		mounted(){
			axios({
				method:'post',
				url:"http://106.12.52.107:8081/MeledMall/menu/selectChild"
			}).then((data)=>{
//				console.log(data.data.info)
//				console.log(this.a)
				this.list = data.data.info
			})
		}
	}
</script>

<style  scoped="">
	li{
		border: 1px solid #F1F1F1;
		width:278px;
		margin-left: 17px;
	}
	
</style>