import React, {createContext, useReducer, useEffect, useState} from 'react'
import './App.css'
import ContextCart from './components/ContextCart'
import Data from './components/Product/ProductsData.js'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import reducer from './components/Reducer'

const initialState = {
  items: Data,
  totoalAmount: 0,
  totalItems: 0
}
export const ContextCreate = createContext()

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleButton =  () => {
        
    setDarkMode(!darkMode)
}

  const [state, dispatch] = useReducer(reducer,initialState)

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id
    })
  }

  const increment = (id) => {
    return dispatch({
      type: "INCREMENT_QUANTITY",
      payload: id
    })
  }

  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT_QUANTITY",
      payload: id
    })
  }

  const emptyCart = () => {
    return dispatch({
      type: "EMPTY",
    })
  }

  useEffect(() =>{
    dispatch({type: "GET_TOTAL"})}, [state.items])

  
  useEffect(() => {
    dispatch({type: "TOTAL_AMOUNT"})
  }, [state.items])


  return (
    <div className={darkMode ? "dark": "light"}>
    <ContextCreate.Provider value={{... state, removeItem, increment, decrement, emptyCart}}>
       <div className= {darkMode ? "darkButton": "lightButton"} onClick={toggleButton}>{darkMode?<DarkModeIcon/>: <LightModeIcon/>}</div>
        <ContextCart/>
    </ContextCreate.Provider>
    </div>
  )
}

export default App