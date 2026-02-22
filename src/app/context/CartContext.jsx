"use client";
import { createContext, useContext, useReducer, useState } from "react";

let cartReducer = (state, action) => {
    switch (action.type) {
        case "addtocart": 
            return {cart: [...state.cart, action.payload] }
        // case "removefromcart":
        //     return {cart: state.cart.filter(item => item.id !== action.payload) 

        //     }   
        }  
    }   


let CartContext = createContext();

let CartProvider = ({ children }) => {
    let [state, dispatch] = useReducer(cartReducer,{cart:[]})
    return (
    <CartContext.Provider value={{state,dispatch}}>
        {children}
    </CartContext.Provider>
    )
}
export {CartContext,CartProvider}
