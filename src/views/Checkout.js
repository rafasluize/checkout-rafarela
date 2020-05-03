import React, { useState } from 'react';
import "./checkout.scss";
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import SVGIcon from '../components/SVGIcon/SVGIcon';
import Steps from '../components/steps/Steps';
import {isMobile} from 'react-device-detect';
import InputText from '../components/Input/InputText';
import cardJSON from "../models/card.json";
import { newObject, onChangeValue } from '../utils/utils';

export default function Checkout() {
	const [model, setModel] = useState(newObject(cardJSON));



	function onChange(name, value) {
		const obj = onChangeValue(name, value, model);
		setModel(newObject(obj));
    }
    return (
        <main className="checkout-rafarela d-flex">
            <div className="title-main p-5">
                {
                    isMobile ?
                    <div className="d-flex align-items-center text-white">
                        <Link to="/" className="btn btn-link text-white"><FiChevronLeft size="20" /></Link>
                        <span className="mx-auto"><strong>Etapa 2</strong> de 3</span>
                    </div>
                    :
                    <Link to="/" className="btn btn-link text-white"><FiChevronLeft size="16" /> Alterar forma de pagamento</Link>
                }
                <div className="d-flex align-items-center my-5 justify-content-center justify-content-xl-start">
                    <SVGIcon className="mr-3" name="card" width="50" height="auto" />
                    <h1 className="text-white my-0">
                    Adicione um novo cartão de crédito
                    </h1>
                </div>
                <div className="position-absolute bg-card">
                </div>
            </div>
            <div className="content p-5 mt-5 mt-xl-0 ml-xl-5">
                {
                    !isMobile &&
                    <Steps selected={2} />
                }


                <div className="form">
                    <div className="row">
                        <div className="col-12">
                            <InputText 
                                label="Número do cartão" 
                                change={ onChange }
                                name="cardNumber"
                                state={ model.cardNumber } />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
