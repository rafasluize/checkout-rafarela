import React, { useState, useEffect } from 'react';
import "./checkout.scss";
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import SVGIcon from '../components/SVGIcon/SVGIcon';
import Steps from '../components/steps/Steps';
import InputText from '../components/Input/InputText';
import cardJSON from "../models/card.json";
import { newObject, onChangeValue } from '../utils/utils';
import Combobox from '../components/Input/Combobox';

export default function Checkout() {
    const [model, setModel] = useState(newObject(cardJSON));
    const [filledValues, setFilledValues] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [cardVerse, setCardVerse] = useState(false);
    const [ listInstallments, setListInstallments ] = useState([]);
    

    useEffect(() => {
        let installmentsList = [];
        let i = 0;
        while (i < 12) {
            i++;
            installmentsList.push({key: i, value: i})
        }
        setListInstallments(installmentsList)
    }, [])

    useEffect(() => {
        if(model.cardNumber.value && model.name.value && model.validity.value){
            setFilledValues(true)
        } else {
            setFilledValues(false)

        }
    }, [model.cardNumber.value, model.name.value,model.validity.value])

    useEffect(() => {
		onCheckDevice();
		window.addEventListener('resize', onCheckDevice);
		return () => window.removeEventListener('resize', onCheckDevice);
		
	}, []);

	function onCheckDevice() {
		let width = document.body.clientWidth;
		if(width <= 1199.98) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
	}


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
                <div className={`position-absolute bg-card d-flex ${filledValues ? 'card-blue' : 'align-items-end'} ${cardVerse ? 'card-verse flip-vertical-left align-items-center justify-content-center' : ' flip-vertical-right'}`}>
                    {
                        !cardVerse ?
                            !filledValues ? 
                                <div className="card-info text-white w-100 px-4">
                                    <div className="d-flex mb-xl-5 mb-4 card-number justify-content-between">
                                        <span>****</span>
                                        <span>****</span>
                                        <span>****</span>
                                        <span>****</span>
                                    </div>
                                    <div className="d-flex mb-xl-5 mb-5 justify-content-between">
                                        <span>NOME DO TITULAR</span>
                                        <span>00/00</span>
                                    </div>
                                </div>
                            :
                                <div className="card-info d-flex flex-column text-white w-100 px-4">
                                    <div>
                                        <img className="img-fluid mt-4" src="/img/visa.png" alt="Visa"/>
                                    </div>                                
                                    <div className="mt-auto">
                                        <div className="d-flex mb-xl-5 mb-4 card-number justify-content-between">
                                            {model.cardNumber.value}
                                        </div>
                                        <div className="d-flex mb-xl-5 mb-3 justify-content-between">
                                            <span className="mr-3">{model.name.value}</span>
                                            <span>{model.validity.value}</span>
                                        </div>
                                    </div>
                                </div>
                        :
                        <div className="mb-xl-2 mt-2 mt-xl-0 ml-3 cvv">
                            {
                                model.cvv.value
                            }
                        </div>
                    }
                </div>
            </div>
            <div className="content p-5 mt-5 mt-xl-0 ml-xl-5">
                {
                    !isMobile &&
                    <Steps selected={2} />
                }


                <div className="form my-5">
                    <div className="row mb-5">
                        <div className="col-12 mb-5">
                            <InputText 
                                label="Número do cartão" 
                                change={ onChange }
                                name="cardNumber"
                                state={ model.cardNumber } />
                        </div>
                        <div className="col-12">
                            <InputText 
                                label="Nome (igual ao cartão)" 
                                change={ onChange }
                                name="name"
                                state={ model.name } />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-6">
                            <InputText 
                                label="Validade" 
                                change={ onChange }
                                name="validity"
                                mask="99/99"
                                state={ model.validity } />
                        </div>
                        <div className="col-6">
                            <InputText 
                                label="CVV" 
                                change={ onChange }
                                name="cvv"
                                onFocus={()=> setCardVerse(true)}
                                onBlur={()=> setCardVerse(false)}
                                state={ model.cvv } />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-5">
                            <Combobox
                                placeholder="Número de parcelas"
                                change={ onChange }
                                name="installment"
                                list={ listInstallments }
                                state={ model.installment } />
                        </div>
                        <div className="col-8 offset-4 col-sm-7 offset-sm-5 col-md-6 offset-md-6 col-xl-5 offset-lg-7">
                            <button className="btn btn-primary text-uppercase btn-block">Continuar</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
