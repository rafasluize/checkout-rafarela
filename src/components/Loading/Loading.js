import React from 'react';
import './loading.scss';
import { useSelector } from 'react-redux';

export default function Loading() {

  const show = useSelector(state => {
      return state.loadingReducer.display;
  })

  
  return(
    <div id="loading" className={`${ show ? '' : 'd-none'}`}>
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}