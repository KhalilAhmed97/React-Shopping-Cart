import React, { useContext } from 'react'
import './Product.css'
import AddIcon from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import CancelSharp from '@mui/icons-material/CancelSharp';

import { ContextCreate } from 'D://React//React_Practise//shopping_cart//src//App.jsx'

const Products = ({id, title, description, img, price, amount}) => {
  const { removeItem, increment, decrement } = useContext(ContextCreate)
  return (
    <>
      <div className='item_container'>
                <div className="display">
                    <img src={img} alt="produuct image" width={150} height={150} />
                </div>
                <div className="content">
                    <h3>{title}</h3>
                    <small>{description}</small>
                </div>

                <div className="quantity cross_icon">
                  <div className="increment" onClick={() => increment(id)}>
                      <AddIcon fontSize="small" />
                  </div>
                    <input type="text" value={amount >= 0 ? amount : 0} />
                  <div className="decrement" onClick={() => decrement(id)}>
                    <Remove fontSize="small" />
                  </div>
              
                </div>
                <small>{price}</small>
                <div className="cross_icon" onClick={ () => removeItem(id) }>
                    <CancelSharp color="error" />
                </div>
            </div>
            <hr />
    </>
  )
}

export default Products