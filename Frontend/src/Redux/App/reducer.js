import * as types from "./actionTypes"



const intstate={
    isLoading:false,
    isError:false,
    data:[]
}

const reducer=(state=intstate, action)=>{

    const {payload,type}=action

    switch(type){
case types.GETDATA_req: return {...state, isLoading:1, isError:0,}

case types.GETDATASUCCESS_succ:return {...state, isLoading:0, isError:0, data:payload}

case types.GETDATAERROR_err:return {...state, isLoading:0, isError:1}
        
default :return state
    }
}

export{reducer}