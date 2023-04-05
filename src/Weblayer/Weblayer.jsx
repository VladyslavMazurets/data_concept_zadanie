import React from 'react';

import './Weblayer.scss';

function Weblayer() {
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

                <form onSubmit='' className='weblayer__form'>
                    <input id='name' type='text' placeholder='Your name'/>
                    <input id='email' type='email' placeholder='Your e-mail'/>
                    <button> 
                        Experience now 
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Weblayer