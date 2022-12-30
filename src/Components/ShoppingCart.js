import {useReducer } from 'react'

const items = [{
  name: 'apple',
  price: 0.39
}, {
  name: 'banana',
  price: 0.79
}, {
  name: 'cherry tomatoes',
  price: 3.99
}]

function reducer(state, action){

  switch(action.type){
    case 'ADD_TO_CART':{
      const copyState = [...state]
      const itemInCart = copyState.find(i => i.name === action.name);
      if(itemInCart){
        itemInCart.quantity += 1;
        return copyState;
      }
      else{
        return [...copyState, {name: action.name, 
                          quantity: 1, 
                          price: action.price}]
      }
    }

    case 'INC':{
      const copyState = [...state]
      const item = copyState.find(i => i.name === action.name);
      if(item){
        item.quantity+=1;
        console.log(item.quantity);
      }
      return copyState;
    }

      case 'DEC':{
        const copyState = [...state]
        const item = copyState.find(i => i.name === action.name);
        if(item){
          item.quantity-=1;
          if(item.quantity <= 0)
            return copyState.filter(i => i.name !== item.name);
          else
            return copyState;
        }
        else
          return copyState;
      }
      
      default:
        return state
  }
}

function ShoppingCart () {

  const [cart, dispatch] = useReducer(reducer, []);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className='cart'>
        <div className='items'>
          <h2>Items</h2>
          {items.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick = {() => dispatch({type: 'ADD_TO_CART', name: item.name, price: item.price})}>Add to Cart</button>
            </div>)
          )}
        </div>
        <div>
          <h2>Cart</h2>
          {cart.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button onClick = {() => dispatch({type: 'DEC', name: item.name})}>-</button>
                {item.quantity}
                <button onClick = {() => dispatch({type: 'INC', name: item.name})}>+</button>
              </p>
              <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='total'>
        <h2>Total: ${cart.reduce((acc, i) => acc + i.price*i.quantity, 0).toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default ShoppingCart

