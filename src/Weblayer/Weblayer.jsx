import React, { useRef, useState } from 'react';

import './Weblayer.scss';

function Weblayer({ setBtnClick }) {
    const [submitState, setSubmitState] = useState(false);
    const [close, setClose] = useState(false);
    const name = useRef('');
    const mail = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const isEmail =  
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail.current?.value);

        if(!isEmail){
             alert('Wrong email address!');
             return;
        }

        console.log("Name:", name.current.value);
        console.log( "E-mail:", mail.current.value )
        setSubmitState(true)

        setTimeout(() => {
            setClose(true)
        }, 800)
        
        setTimeout(() => {
            setBtnClick(false)
        }, 1500);
    }

    const handleClose = () => {
        setClose(true)

        setTimeout(() => {
            setBtnClick(false)
        }, 1500)
    }

  return (
    <>
        <div className={`weblayer ${ !close ? 'active' : 'passive'}`}>

            <a type='button' className='weblayer__closebtn'
            onClick={handleClose}/>

            <div className='weblayer__container'>
                <div className='weblayer__header'>
                    Hľadáme práve teba
                </div>
                <span className='weblayer__subheader'>
                    Discover the solutions for industry and get a 
                    tailored offer now.
                </span>
             {!submitState ?
                <form onSubmit={handleSubmit} className='weblayer__form'>

                    <input name='name' type='text' placeholder='Your name' 
                    ref={name} required/>

                    <input name='email' type='email' placeholder='Your e-mail' 
                    ref={mail} required 
                    onChange={() => mail.current.value.replace
                    (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, '')}/>

                    <button type='submit'> 
                        Experience now 
                    </button>
                </form>
                :
                <div className='message__container'>
                      <span className='message'>
                      Thank You
                      </span>
                </div>
              }
            </div>
        </div>
    </>
  )
}

export default Weblayer