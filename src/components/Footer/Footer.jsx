import React, {useContext}from 'react'
import './Footer.css'
import { ContextCreate } from 'D://React//React_Practise//shopping_cart//src//App.jsx'

const Footer = () => {
   const {totalAmount, emptyCart } = useContext(ContextCreate)
  return (
    <div className='footer'>
        <h3><strong>Total Amount = {totalAmount} PKR</strong></h3>
        <div className='btn'>
            <button className='checkOut'>Check out</button>
            <button className="clearAll" onClick={emptyCart}>Empty Cart</button>
        </div>
    </div>
  )
}

export default Footer