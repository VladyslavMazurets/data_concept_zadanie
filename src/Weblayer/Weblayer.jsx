import React, { useRef, useState } from 'react';

import './Weblayer.scss';

function Weblayer({ setBtnClick }) {
    const [submitState, setSubmitState] = useState(false);
    const name = useRef('');
    const mail = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Name: ", name.current.value);
        console.log( "E-mail: ", mail.current.value )

        setSubmitState(true)

        setTimeout(() => {
            setBtnClick(false)
        }, 1500);
    }

  return (
    <>
        <div className='weblayer'>
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
                    <input id='name' type='text' placeholder='Your name' 
                    ref={name}
                    required/>
                    <input id='email' type='email' placeholder='Your e-mail' 
                    ref={mail}
                     required/>
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