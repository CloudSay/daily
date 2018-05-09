const reducer=(state,{type,payload})=>{
	console.log(type,payload)
	switch(type){
		case 'SHOW_LOADING':
			return Object.assign({},state,{bLoading:payload})
			break;
        case 'SHOW_HEAD':
			return Object.assign({},state,{bHead:payload})
	        break;
        case 'SHOW_OFFCANVAS':
			return Object.assign({},state,{boffcanvas:payload})
	        break;
        case 'SHOW_HOME_DATA':
			return Object.assign({},state,{NewsData:payload})
	        break;
	    case 'SHOW_DETAIL_DATA':
			return Object.assign({},state,{NewsDetailData:payload})
	        break;
        case 'SEND_DETAIL_DATA':
			return Object.assign({},state,{id:payload})
	        break;
        default:
        	return state
	}
	return state
};

export default reducer
