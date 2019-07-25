import Mock from "mockjs";
var Random=Mock.Random;
	

var data=Mock.mock({
	"list|5-10":[
		{
			"pid|+1":0,
			"address":"@county(true)",
			"sfz":"@id",
			"xz":"@xingzuo()"
		}
	]
})
Mock.mock("http://www.jingdong.com/api",data)
