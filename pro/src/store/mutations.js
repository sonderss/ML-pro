var mutations = {
	huoqu(state,id){
		state.id=id
	},
	onSubmit(state,num){
        state.num = num
    },
    huafei(state,huafei){
        state.huafei = huafei
    },
    itemNum(state,itemNum){
        state.itemNum =state.itemNum.concat(itemNum)//传进来的是一个包含所有数量的数组
    },
    mid(state,mid){
        state.mid = state.mid.concat(mid)//传进来的是一个包含所有Mid的数组
    },
    timer(state,timer){
        state.timer = state.timer.concat(timer)
    },
    delMid(state,delMid){
        state.delMid = state.delMid.concat(delMid)
    },
    fileContent(state,fileContent){
        state.fileContent = fileContent
    },
    gid(state,gid){
        state.gid = gid
    }
}

export default mutations;



