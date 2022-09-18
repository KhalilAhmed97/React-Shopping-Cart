import React, {useContext} from 'react'
import Products from './Product/Products'
import { ContextCreate } from '../App.jsx'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Cart from './Cart/Cart'
import Footer from './Footer/Footer';


const ContextCart = () => {
    const{ items} = useContext(ContextCreate)
    return (
        <>
        <div>
            <Cart/>
            <div style={{marginLeft: "100px",marginRight: "100px"}}>
              <Scrollbars style={{ width: 1165, height: 320 }}>
                {items.map((elem) => {
                  return  <Products key={elem.id} {...elem}/>
                })}
              </Scrollbars>
            </div>
            
            <Footer />      
        </div>
        </>
    )
}

export default ContextCart