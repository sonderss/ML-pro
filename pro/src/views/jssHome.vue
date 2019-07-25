<template>
	<div>
	<van-nav-bar
		  left-text="客服"
		  right-text="消息"
		  :fixed="true"
		  @click-left='left()'
		  @click-right='right()'
		/>
	<div>
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
			<div id="zhongjian">
				<van-search placeholder="请输入带有食物类的关键词  比如：菜、鱼" @click='tap()' style='margin-top:50px;'/>
				<router-view></router-view>
				<!--轮播图-->
				<div>
					<van-swipe :autoplay="3000" indicator-color="white" id="lun">
					  <van-swipe-item v-for='item in list' :key='item'>				  	
					  		 <img :src="item.picture" style="height='100%'"
					  		 	@click="tap1(item.mid)"
					  		 	/>
					  </van-swipe-item>
					 </van-swipe>
				</div>
				<!--小方块-->
				  <div>
				  	<van-grid :border="false" :column-num="4">
					  <van-grid-item  v-for="item in list1"
					  	@click="dian(item.id)"
						  :key='item'
					  	>
					    <van-image :src="item.photo" style='width:40px;height:40px'/>
					    <span style='font-size:10px'>{{item.menu}}</span>
					  </van-grid-item>
					</van-grid>
				  </div>
					<hr />
				<!--秒杀-->
				<span id="te">特价秒杀</span> 
				<van-count-down :time="time"/>
				<div style="display: inline-block;">
					<van-grid :border="false" :column-num="4">
					  <van-grid-item v-for='item in list1'
					  	@click="dian(item.id)"
						  :key='item'
					  	>
					    <van-image :src="item.photo" style='width:40px;height:40px'/>
					    <span style='font-size:10px'>{{item.menu}}</span>
					  </van-grid-item>
					</van-grid>
				</div>
				<hr />
				<!--生鲜直降-->
			<div id="miao">
				<van-image
				  width="150"
				  height="100"
				  src="https://img.yzcdn.cn/vant/cat.jpeg"
				/>
				&nbsp;
				<van-image
				  id="miao1"
				  width="120"
				  height="50"
				  src="https://img.yzcdn.cn/vant/cat.jpeg"
				/>
				&nbsp;
				<van-image
				  width="120"
				  height="50"
				  src="https://img.yzcdn.cn/vant/cat.jpeg"
				/>
				&nbsp;
			</div>
				<!--tap标签-->
				<van-tabs v-model="active" id="tuijian" @click="lq">
				  <van-tab title="为你推荐" id='di' >
				  	<van-card
				  		v-for="item in list3"
						:pid="item.id"
						:price="item.price"
						:desc="item.desc"  
						:title="item.name"
						:thumb="item.photo"
						@click='tap2(item.id)'
						:key='item'

					>
					  <div slot="tags">
					    <van-tag plain type="danger">标签</van-tag>
					    <van-tag plain type="danger">标签</van-tag>
					  </div>
					  <div slot="footer">
					    <van-icon name="add" size="20"/>
					  </div>
					</van-card>
				  </van-tab>
				  <van-tab title="我的清单" id='di' :name='uid'>
				  	<van-card
				  		v-for="item in list5"
						:pid="item.id"
						:price="item.price"
						:desc="item.desc"  
						:title="item.name"
						:thumb="item.photo"
						@click='tap2(item.id)'
						:key='item'
					>
					  <div slot="tags">
					    <van-tag plain type="danger">好吃</van-tag>
					    <van-tag plain type="danger">有味道</van-tag>
					  </div>
					  <div slot="footer">
					    <van-icon name="add" size="20"/>
					  </div>
					</van-card>
				  </van-tab>
				  
				</van-tabs>
			</div>
		</van-pull-refresh>
	</div>
	</div>
</template>

<script>
	import axios from "axios"
	export default {
		data() {
		    return {
		    	active: 0,
		      	time: 30 * 60 * 60 * 500,
		      	active: 0,
		      	list:[],
		      	count: 0,
      			isLoading: false,
      			list:[],
      			list1:[],
      			list2:[],
				list3:[],
				list4:[],//新数组，处理后的数组
				uid1:1,
				list5:[]//为你推荐
				  
		    }
		},
	  methods: {
	  	dian(id){
			  this.$store.commit('gid',id)
			  this.$router.push("/apengcaipin/"+id)
			  
	  	},
	  	tap2(id){
	  		this.$router.push("/dfhDetail/"+id)
	  	},
	  	tap1(id){
	  		this.$router.push("/dfhDetail/"+id)
	  	},
	  	tap(){
	  		this.$router.push("/jssZhezhao")
		  },
		  lq(name,id){
			  this.uid1 = Math.ceil(Math.random()*8) 
			  axios({
				  method:'post',
				  url:'http://106.12.52.107:8081/MeledMall/menu/childMenu',
				  params:{id:this.uid1}
			  }).then((data)=>{
				this.list5 = data.data.info
			  })
		  },
	    onRefresh() {
	      setTimeout(() => {
	        this.$toast('刷新成功');
	        this.isLoading = false;
	        this.count++;
	      }, 500);
	    },
	    left(){
	    	this.$router.push("/apengkefu")
	    },
	    right(){
	    	this.$router.push("/Message")
	    }
	  },
	  mounted(){
		  
		   axios({
				  method:'post',
				  url:'http://106.12.52.107:8081/MeledMall/menu/childMenu',
				  params:{id:3}
			  }).then((data)=>{
				this.list5 = data.data.info
			  })
	    	axios({
	    		method:"post",
		    	url:'http://106.12.52.107:8081/MeledMall/sildeShow/show',
		    }).then((data)=>{
		    	this.list = data.data.info
		    	
		    }),
		    
		    axios({
		    	method:"post",
		    	url:"http://106.12.52.107:8081/MeledMall/menu/parentMenu",
		    }).then((data)=>{
				this.list1 = data.data.info
				this.list1.splice(9,1)
				this.list1.splice(8,1)
		    	
		    }),
		    
		    axios({
		    	method:"post",
		    	url:"http://106.12.52.107:8081/MeledMall/menu/parentMenu",
		    }).then((data)=>{
		    	this.list2 = data.data.info
		    }),
		    
		    axios({
		    	method:"post",
		    	url:"http://106.12.52.107:8081/MeledMall/menu/recommend",
		    }).then((data)=>{
		    	this.list3 = data.data.info
		    })
		    
		    
		}
  
}
</script>

<style scoped="">
	#miao{
		position: absolute;
		
	}
	#miao1{
		position: absolute;
		top: -3px;
		left: 174px;
	}
	#lun{
		height:200px;
		width:100%;
	}
	#mao1{
		float:left
	}
	img{
		width:100%;
		height:200px;
	}
	#meiri{
		float: left;
	}
	#te{
		float: left;
	}
	#tuijian{
		margin-top: 104px;
	}
	#di{
		margin-bottom: 50px;
	}
</style>