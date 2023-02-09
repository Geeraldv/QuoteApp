import { useState } from 'react'
import './Card.css'
import Blogo from '../img/icon-dice.svg'
import line from '../img/pattern-divider-desktop.svg'



function Card(){

    const handleClick = async () =>{

        const url = 'https://api.adviceslip.com/advice'
        const res =  await fetch(url)
        const res2 = await res.json()
    
        setNumber(res2.slip.id)
        setQuote(res2.slip.advice)
    }

    const [number, setNumber] = useState('115')
    const [quote, setQuote  ] = useState(`It is easy to sit up and take notice, what's difficult is getting up and taking action.`)
    return(
        <div className="container">
            <div className="card">
                <div className='quote'>
                    <p>ADVICE #{number}</p>
                    <div className='textCard'>
                        <h1>“{quote}”</h1>
                    </div>
                    <img className='ImgLine' src={line} alt='LOGO'/>
                    <button onClick={handleClick}><img className='buttonImg' src={Blogo} alt='Blogo'/></button>
                </div>
            </div>
        </div>
    )
    
}


export default Card