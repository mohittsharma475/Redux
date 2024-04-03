import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import {thunk} from "redux-thunk";

const actionName = {
    increment: "INCREMENT",
    decrement: "DECREMENT",
    incrementByAmount: "INCREMENTBYAMOUNT",
    init:"INIT"
  };
  
//store

const store = createStore(reducer, applyMiddleware(logger.default,thunk));


// const state= {amount:vale}

// return state.amount = state.amount+1;  mutable
// return {amount : state.amount+1} immutable

function reducer(state={amount:1}, action) {


    switch(action.type){
        case actionName.increment:
            return { amount: state.amount + 1 };
        case actionName.decrement:
            return { amount: state.amount - 1 };
        case actionName.incrementByAmount:
            return { amount: state.amount + action.payload };
        case actionName.init:
            return {amount:action.payload};
        default:
            return state;
    }
 
}
//global state

store.subscribe(() => {
  console.log(store.getState());
  // run whenever state changed by reducer
});

// Action creator

async function init(dispatch,getState){
    // error 
    const {data} = await axios.get("http://localhost:3000/accounts/1");
   
    dispatch({type:"INIT",payload:data.amount});
}

function increment() {
  return { type: "increment" };
}

function decrement() {
  return { type: "decrement" };
}

function incrementByAmount(value) {
  return { type: "incrementByAmount", payload: value };
}

// console.log(store.getState());
// store.dispatch({type:"increment"});


setTimeout(()=>{
    store.dispatch(init);
},2000);
