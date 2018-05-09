const reducer=(state,{type,payload})=>{
	switch(type){
		case 'ADD_ITEM':
			return Object.assign({},state,{list:state.list.concat(payload)})
			break;
        case 'ADD_ITEM':
	//		...
	        break;
        case 'ADD_ITEM':
	//		...
	        break;
        default:
        	return state
	}
	return state
};

export default reducer
