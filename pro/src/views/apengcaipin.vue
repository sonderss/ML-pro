<template>
	<div id="top">
		<div>
			<van-nav-bar
			  title="全部菜品 "
			 
			  right-text="优惠券"
			 
			  :fixed="true"
			 
			  @click-right="onClickRight"
			/>
		</div>
			
			<van-tabs id='shui' v-model='qe'  @click='a'>
				  <van-tab v-for="item in list1" :title="item.menu"
				  	:name='item.id'
                    :key='item'
				  	>
					<van-card
						  v-for="item in list" 
						  :pid="item.name"
						  :desc="item.desc"
						  :price="item.price"
						  :thumb="item.photo"
                         @click="tap(item.id)"
                         :key='item'
						/>
					</van-tab>
				 
			</van-tabs>
		
		
	</div>
	
	
	
</template>

<script>
	import axios from "axios"
	export default{
		name:"apengcaipin",
		data(){
			return{
				value:'',
				active:"",
				isLoading: false,
				active: 2,
				 list:[],
				 list1:[],
				 qe:1
				
			}
		},
		mounted(){
			//让选择状态随着存储的类型id为准
			this.qe = this.$store.state.gid
			
			axios({
				method:'post',
				url:'http://106.12.52.107:8081/MeledMall/menu/childMenu',
				params:{id:this.$store.state.gid}
			}).then((data)=>{
				//console.log(data.data.info)
				this.list = data.data.info
			})
			axios({
				method:'post',
				url:'http://106.12.52.107:8081/MeledMall/menu/parentMenu',
			}).then((data)=>{
				//console.log(data.data.info)
				this.list1 = data.data.info
			})
			
		},
		methods: {
		    onClickRight() {
		       this.$router.push("/apengyouhui")
		    },
		    onRefresh() {
		      setTimeout(() => {
		        this.$toast('刷新成功');
		        this.isLoading = false;
		        this.count++;
		      }, 500);
		    },
		    onSearch(){
		    	
			},
			tap(id){
				this.$router.push('/dfhDetail/'+id)
			},
			a(id,name){
				axios({
					method:'post',
					url:'http://106.12.52.107:8081/MeledMall/menu/childMenu',
					params:{id:id}
				}).then((data)=>{
					this.list =data.data.info
					this.$store.commit('gid',id)
					
				})
			}
			
  	},
}

</script>

<style>
	*{
		margin: 0;padding:0
	}
	#shui{
		margin-bottom:50px;
	}
	
</style>