import {useReducer} from 'react';

const initialState = {
    num1: 0,
    num2: 0,
    result: 'NO RESULT YET'
}

function reducer (state, action) {

    switch(action.type){
        case 'SET_NUM_ONE':
            return {
                ...state,
                num1: action.num1
            }
        case 'SET_NUM_TWO':
            return {
                ...state, 
                num2: action.num2
            }
        case 'ADD':
            return{
                ...state,
                result: state.num1 + state.num2
            }
        case 'SUB':
            return{
                ...state,
                result: state.num1 - state.num2
            }
        default:
            return{
                ...initialState
            }
    }
}

export default function SimpleCalculator () {

  const [state, dispatch] = useReducer(reducer, initialState);
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button key={number} onClick = {() => dispatch({type:'SET_NUM_ONE', num1: number})}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button key={number} onClick = {() => dispatch({type:'SET_NUM_TWO', num2: number})}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick = {() => dispatch({type:'ADD'})}>+</button>
        <button onClick = {() => dispatch({type:'SUB'})}>-</button>
        <button onClick = {() => dispatch({type:'CLEAR'})}>c</button>
      </div>
      <div><h2>Result:</h2></div>
      {state.result}
    </div>
  )
}