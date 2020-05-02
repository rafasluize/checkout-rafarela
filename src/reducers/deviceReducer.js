export function deviceReducer(state, action) {
	if(action.type === 'RESIZE_REDUCER') {
		switch (action.data) {
			case 'DESKTOP': 
				return {...state, device: 'desktop' };
			case 'MOBILE': 
				return {...state, device: 'mobile' };
			default: 
				return {...state, device: 'desktop' };
		}
	}

	return {...state };
};