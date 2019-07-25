<template>
    <div>
       <van-card
				:pid="det.name"
				:desc="det.desc"
				:price="det.price"
				 :thumb="det.photo"
				/>
		</van-tab>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name:"apengdetail",
    data(){
        return{
            det:[]
        }
    },
    mounted () {
        var _this = this
        axios({
            method:"post",
            url:"http://106.12.52.107:8081/MeledMall/menu/child",
            params:{id:_this.$route.params.id}
        }).then((data)=>{
            //console.log(data.data.info)
            _this.det = data.data.info

        })
    },
    methods: {
        
    }
}
</script>

<style>

</style>
