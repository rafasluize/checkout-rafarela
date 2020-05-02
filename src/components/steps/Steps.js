import React from 'react';
import './steps.scss';
import {FiCheck, FiChevronRight} from 'react-icons/fi';

export default function Steps({selected}) {
    const steps = [{step: 1, title: 'Carrinho'}, {step:2, title:'Pagamento'}, {step:3, title: 'Confirmação'}];
    const listItems = steps.map((item, index) =>
        <>
            <div key={index} className={`step ${((item.step === 1 && selected === 2) || (selected !== item.step && selected === 3)) ? 'checked' : ''}`}>
                {
                    index !== 0 &&
                    <FiChevronRight size={25} className="mx-3" />
                }
                <span className="number mr-2 rounded-circle">
                    {
                        ((item.step === 1 && selected === 2) || (selected !== item.step && selected === 3)) ?
                        <FiCheck color="white" size={13} />
                        : 
                        item.step

                    }
                </span>
                <span className="title">{item.title}</span>
            </div>
        </>
    );
    return(
        <div className="steps d-flex align-items-center justify-content-center">{listItems}</div>
    )
}