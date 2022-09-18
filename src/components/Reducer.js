

const reducer = (state, action ) =>  {
    if(action.type === "REMOVE_ITEM"){
        return {
            ...state,
            items: state.items.filter((currentItem) => {
                return (currentItem.id !== action.payload)
            })
        };
    }
    if (action.type === "INCREMENT_QUANTITY"){
        const updatedQuantity = state.items.map((currentElement) => {
            if(currentElement.id === action.payload){
                return {...currentElement, amount: currentElement.amount + 1}
            }
            return currentElement
        })
        return{ ...state, items: updatedQuantity}
    }
    if (action.type === "DECREMENT_QUANTITY"){
        const updatedQuantity = state.items.map((currentElement) => {
            if(currentElement.id === action.payload){
                    return {...currentElement, amount: currentElement.amount - 1}
                
            }
            return currentElement
        }).filter((currentElement) => {
            return (currentElement.amount !== 0)
        })
        return{ ...state, items: updatedQuantity}
    }
    if (action.type === "EMPTY"){
        return{ ...state, items: []}
    }

    if (action.type === "GET_TOTAL"){
        let {totalItems} = state.items.reduce((accumulator, currentValue) => {
            let {amount} = currentValue
            accumulator.totalItems += amount
            return accumulator
        }, 
        {totalItems: 0}) 
        return{ ...state, totalItems}
    }
    if (action.type === "TOTAL_AMOUNT"){
        let {totalAmount} = state.items.reduce((accumulator, currentValue) => {
            let {price, amount} = currentValue
            accumulator.totalAmount += (price*amount)
            return accumulator
        }, 
        {totalItems: 0, totalAmount: 0}) 
        return{ ...state, totalAmount}
    }


    return state
}
export default reducer