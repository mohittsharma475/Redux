Packages used:  
1. thunk -  for handling async action (when we try to fetch api using axios we need to create our function
async in that case dispatch was already called it did'nt find dispatch)
2. json-server  -  for creating server without express and node to access local db
3. logger
4. createstore
5. 

########################################################### 
const state = { account: { amount: 1 }, bonus: { points: 2 } };
const newState = {
//   account: state.account,  error
    account:{...state.account},
  bonus: { points: state.bonus.points + 2 },
};

console.log(state);
console.log(newState);
state.account.amount = 100;

console.log(state);
console.log(newState);

it is preferred to make two reducer because of this.
################################################################
getState -  global (whole state)
state in reducer -  a small state of reducer