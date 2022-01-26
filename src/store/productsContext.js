import { createContext, useState } from "react";


export const Context = createContext(null);

const ProductsContext = ({children}) => {

    
    return (
        <Context.Provider>
            {children}
        </Context.Provider>
     );
}
 
export default ProductsContext;