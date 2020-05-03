import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './input.scss';

export default function Combobox({ label, change, name, state, error, list = [] }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState("Selecione");

  const toggle = () => setDropdownOpen(prevState => !prevState);

  useEffect(() => {
    change(name, state.value);
  }, [state.value])

  useEffect(() => {
    let selected = list.find(item => item.key === state.value);

    if(selected) {
      onChange(selected.key, selected.value)
    }
  }, [list])

  function onChange(key, value) {
    change(name, key);
    setSelected(value);
  }

  return(
    <div className={ `form-group dropdown-custom ${ error ? 'input-required' : '' }` }>
      {
        label &&
    		<label className="mb-3">{ label }</label>
      }
		<Dropdown isOpen={dropdownOpen} toggle={toggle}>
			<DropdownToggle>
				{selected}
				</DropdownToggle>
			<DropdownMenu>
			{
				list.map((item, index) => {
				return <DropdownItem key={ index } onClick={()=> onChange(item.key, item.value)}>{ item.value }</DropdownItem>
				})
			}
			</DropdownMenu>
		</Dropdown>
		<div className="col-12">
			<span className="input-message-error">{ error.msg }</span>
		</div>
    </div>
  )
}