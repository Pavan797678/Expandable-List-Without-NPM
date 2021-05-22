import types from '../types'

const initialState = {
    billtodo: [],
    totalBillPrice:0
  };

  export default function bill(state =initialState,action){
      switch(action.type){
          
          case types.ADD:
              
              const billArrayInState=[...state.billtodo]
              const billitemCollection = action.payload
              const billfinalObject = [...billArrayInState,billitemCollection]
            
              let price = 0;
              for (let i = 0; i <billfinalObject.length; i++) {
                  price += billfinalObject[i].itemPrice*1
                
              }
              console.log(price);
              return{
                  ...state,
                  billtodo:billfinalObject,
                  totalBillPrice:price
              }

              default:
                return state;
      }
      
  }