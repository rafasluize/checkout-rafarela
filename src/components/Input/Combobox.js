import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './input.scss';

export default function Combobox({ className="", change, name, state, list = [], direction, placeholder = "Selecione" }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(placeholder);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  useEffect(() => {
    if(!state.value){
      setSelected(placeholder)
    } else {
      const dataValue = list.find((item)=> item.key === state.value)
      if(dataValue)
        onChange(state.value, dataValue.value);
    }
  }, [state.value])

  useEffect(() => {
    let selected = list.find(item => item.key === state.value);
    selected && setSelected(selected.value);
  }, [list])

  function onChange(key, value) {
    change(name, key);
    setSelected(value);
  }

  const { error } = state;

  return(
    <>
      <div className={ `dropdown-custom ${className}  ${ error.isValid === false ? 'input-required' : '' }` }>
        <div className="input-text-group combobox-group">

          <Dropdown direction={ !direction ? 'down' : direction} isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle className="btn-block">
              {selected}
              </DropdownToggle>
            <DropdownMenu>
            <DropdownItem onClick={()=> onChange("", placeholder)}>{placeholder}</DropdownItem>
            {
              list.map((item, index) => {
              return <DropdownItem key={ index } onClick={()=> onChange(item.key, item.value)}>{ item.value }</DropdownItem>
              })
            }
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <span className="input-message-error">{ error.msg }</span>
        </div>
      </div>
    </>
  )
}