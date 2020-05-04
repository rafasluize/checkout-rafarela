import _ from 'lodash';
import moment from 'moment';
import { newObject } from "./utils";

export function validateFields(obj) {
  let isValid = true;
  _.forIn(obj, (attr, key) => {
      
      if(attr.required && (attr.value === undefined || attr.value === null || attr.value === '')) {
          attr.error = { isValid: false, msg: 'Campo obrigatório' }
          isValid = false;
      } else {
        attr.error = { isValid: true, msg: '' }
      }

      if(attr.value && attr.type === 'validity' ) {
        if(!validateValidity(attr.value)) {
            attr.error = { isValid: false, msg: 'Data inválida (MM/YY)' }
            isValid = false;
        } else {
          attr.error = { isValid: true, msg: '' }
        }
      }

      if(attr.required && attr.type === 'array' ) {
          if(attr.value.length === 0) {
              attr.error = { isValid: false, msg: 'Campo obrigatório' }
              isValid = false;
          }
      }

      if(!attr.type) {
          validateFields(attr, key);
      }
  });

  if(!isValid) {
    console.log('nops')
  }

  return { isValid, objReturn: newObject(obj) } ;
}

export function validateValidity(date) {
  let isValid = true;

  let momentDate1 = moment(date, 'MM/YY');
  isValid = momentDate1.isValid();

  return isValid;
}
