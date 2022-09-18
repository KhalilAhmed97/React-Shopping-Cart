import React, {useContext} from 'react'
import { ContextCreate } from 'D://React//React_Practise//shopping_cart//src//App.jsx'

const FullCart = () => {
  const {totalItems} = useContext(ContextCreate)
  return (
    < section className='heading'>
                <h2>Shopping Cart</h2>
                <p>You have {totalItems} Items in Shopping Cart</p>
    </section>
  )
}

export default FullCart