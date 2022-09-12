/* focus only on how to use this code
1- create this file 'stateProvider.js', with the code below
2- in index.js, wrap <App /> with <StateProvider></StateProvider>
3- create reducer.js file [represent data layer]
4- create addToBasket function
*/
import {createContext, useContext, useReducer} from 'react';


// prepare the data layer
export const StateContext = createContext();

// wrap our app and provide data layer
export const StateProvider = ({reducer,initialState,children})=>{
    return(
         <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
        </StateContext.Provider>
    )
   
};

// pull informations from data layer
export const useStateValue = ()=> useContext(StateContext)