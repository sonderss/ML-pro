<<template>
    <div>
        <van-nav-bar
            title="注册"
           />
        <van-cell-group>
		   <van-field
		    v-model="phone"
		    label="手机号"
		    placeholder="请输入手机号"
		    error-message="手机号格式错误"
		  />
		  <van-field
		    v-model="password"
		    label="密码"
		    placeholder="请输入密码"
		    error-message
		  />
		</van-cell-group>
		
		<van-button type="primary" size="large" @click="tap">注册</van-button>
		
    </div>
</template>

<script>
import axios from 'axios'
export default {
	data(){
		return{
			phone:"",
			password:""
		}
	},
	methods:{
		tap(){
			
			axios({
				method:"post",
				url:"http://106.12.52.107:8081/MeledMall/user/register",
				params:{phonenum:this.phone,password:this.password}
			}).then((data)=>{
				//console.log(data.data)
				if(data.data.code == 1){
						const toast = this.$toast.loading({
						duration: 0,       // 持续展示 toast
						forbidClick: true, // 禁用背景点击
						loadingType: 'spinner',
						message: '验证成功,跳转中...'
						});
						let second = 3;
						const timer = setInterval(() => {
						second--;
						if (second) {
							toast.message = `注册成功,跳转中...`;
						} else {
							clearInterval(timer);
							this.$toast.clear();
							this.$router.push("/jssLogin")
							
						}
						}, 1000);
				}else{
					this.$dialog.alert({
						title: '注册状态提示',
						message: '此用户已存在，请重新注册'
						}).then(() => {
						// on close
					});
				}
			
			})
		},
		
	}
}
</script>

<style>

</style>
