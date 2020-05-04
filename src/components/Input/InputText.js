import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './input.scss';
import { maskJs } from 'mask-js';
import TextField, {Input} from '@material/react-text-field';

export default function InputText({ 
  label, 
  type = "text", 
  className="", 
  change, 
  name, 
  onlyNumber, 
  state, 
  mask, 
  disabled, 
  onBlur,
  onFocus }) {

  const [ value, setValue ] = useState('');
  const inputEl = useRef();
  const [ selection, setSelection ] = useState({ start: 0, end: 0 });

  useEffect(() => {
    let lenInit = state.value ? state.value.length : 0;
    
    
    state.value = state.value ? state.value : "";
    
    
    if(mask) {
      
      state.value = maskJs(mask, state.value);
      
      let lenEnd = state.value ? state.value.length : 0;
      if(lenInit !== lenEnd) {
        let obj = { start: selection.start + lenEnd - lenInit, end: selection.start + lenEnd - lenInit }
        setSelection(obj);
      }
      setValue(state.value);
    } 
    else {
      setValue(state.value);
    }
  }, [mask, selection.start, state.type, state.value, type])


  function onChange(e) {
    let { selectionStart, selectionEnd } = e.target;
    setSelection({ start: selectionStart, end: selectionEnd });
    let val = e.target.value;
    if(onlyNumber || state.type === 'integer') {
      if (/^\d*$/.test(val)) {
        change(name, val);
      }
    }  else {
      change(name, val);
    }

  }

  function blur() {

    if(onBlur) {
      onBlur();
    }
  }

  function focus() {

    if(onFocus) {
      onFocus();
    }
  }


  const { error } = state;

  return(
    <div className={`input-text ${className}`}>
      <TextField
          label={label}
          onTrailingIconSelect={() => this.setState({value: ''})}
          className="w-100"
        >
          <Input
           ref={ inputEl }
           type={ type === 'date' ? 'text' : type }
           id={ name }
           disabled={ disabled }
           className={`mdc-text-field__input ${ error.isValid === false ? 'is-invalid' : '' } ${ state.value && error.isValid ? 'is-valid' : '' }`}
           maxLength={ state.maxlength ? state.maxlength : "50" }
           onChange={ e => onChange(e) }
           onBlur={ blur }
           onFocus={ focus }
           value={ value }
           />
        </TextField>
    </div>
  )
}

InputText.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  change: PropTypes.func,
  name: PropTypes.string,
  state: PropTypes.object
}