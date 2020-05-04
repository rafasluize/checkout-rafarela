import _ from 'lodash';
import moment from 'moment';

export function convertModelToApi(model) {

  let newObject = {};

  _.forIn(model, (attr, key) => {
    if(model[key].type === 'object') {
      newObject[key] = { id: model[key].value };
    } else if(!attr.type) { //Significa que é um objeto
      newObject[key] = convertModelToApi(model[key]);
    } else if(model[key].type === 'validity' && (model[key].value)) {
      if(moment(model[key].value, 'MM/YY').isValid()) {
        newObject[key] = moment(model[key].value, 'MM/YY').format('YYYY-MM');
      } else {
        newObject[key] = moment(model[key].value, 'DD/MM/YYYY').format('YYYY-MM-DD');
      }
    } else {
      newObject[key] = model[key].value;
    }
  });

  return newObject;
}
