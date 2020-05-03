import deep from 'deep-get-set';
import _ from 'lodash';



export function newObject(obj) {
	return JSON.parse(JSON.stringify(obj));
}

export function onChangeValue(name, value, obj) {

	let state = newObject(obj);

	if (deep(state, name).type === 'array') {
		let index = _.findIndex(deep(state, name).value, (item) => {
			return item.id === value.id
		});
		if (Array.isArray(value)) {
			deep(state, name).value = value;
		} else {
			if (index > -1) {
				_.remove(deep(state, name).value, (elem) => {
					return elem.id === value.id;
				});
			} else {
				deep(state, name).value.push(value);
			}
		}
		deep(state, `${name}.error`, {});
	} else {
		deep(state, `${name}.value`, value);
		deep(state, `${name}.error`, {});
	}

	return state;
}