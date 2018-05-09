const asyncAction = (dispatch,url,cred,type)=>{
    fetch(url,cred).then(
      res=>res.json()
    ).then(
      data=>{
        setTimeout(()=>{
          dispatch({type:'SHOW_LOADING',payload:false})//状态请求
          dispatch({type:type,payload:data})
        },1000)
      }
    )
    return  dispatch({type:'SHOW_LOADING',payload:true})//状态请求
}
export default asyncAction