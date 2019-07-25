
import Mock from 'mockjs'
var Random = Mock.Random;
Random.extend({
    xingzuo:function(data){
        var constellations = ['白羊座','狮子座','射手座','双子座','金牛座','巨蟹座','天秤座','处女座']
        return this.pick(constellations)
    },
    fanwei:function(data){
        var scope = ['1-2','2-3','3-4','4-5','5-6','6-7','7-8','8-9']
        return this.pick(scope)
    }
})

//模拟购物车列表
var data = Mock.mock({
    	'list|8-10':[{
         'pid|+1':0,//id
         'price':'@natural(19,299)',//商品价格
         'pdesc':'@csentence()',//商品描述
         'num':'@integer(1,10)',//商品数量
         'ptitle':'@ctitle(4,8)',//商品名字
         'pimg':"@image('200x200','#fb0a2a')",//商品图片
         'danxuan':false,
         'bujin':1
    }]
})

Mock.mock('http://www.baidu.com/api',data)

