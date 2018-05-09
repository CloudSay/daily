const enterUser = (to,replace,next)=>{
	console.log('guard')
//	if(false){
//		next();
//	}else{
//		replace('/login')
//		next();
//	}
//	fetch(url).then(
//		res =>res.join()
//	).then(
//		data => {
//			if(data.hashLogin){
//				to.location.query.data = {userName:dfgdf}
//			}else{
//				replace('/login')
//			}
//			next()
//		}
//	)
   setTimeout(()=>{
   		to.location.query.data={username:'xxxx'};
   		next();
   },1000)
	
}
export default enterUser;