import React, {useContext} from 'react'
import './Cart.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FullCart from '../FullCart';
import EmptyCart from '../EmptyCart';

import { ContextCreate } from 'D://React//React_Practise//shopping_cart//src//App.jsx';

const Cart = () => {
    
    const{ totalItems } = useContext(ContextCreate)

    return (
        <>
            <header>
                <div className='inside_header'>
                    <div className="left">
                        <div className="icon">
                            <ArrowBackIcon />
                        </div>
                        <h5>Continue Shopping</h5>
                    </div>
                    <div className="icon">
                        <ShoppingCartIcon fontSize="large" />
                        <p> {totalItems >= 0 ? totalItems : 0} </p>
                    </div>
                </div>
            </header>
            {
                totalItems > 0 ? <FullCart/> : <EmptyCart/> 
        
            }            
        </>
    )
}

export default Cart