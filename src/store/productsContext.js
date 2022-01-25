import { createContext, useState } from "react";


export const Context = createContext(null);

const ProductsContext = ({children}) => {
    const [test, setTest] = useState('hola');
    const [productos, setProductos] = useState([]);

    return ( 
        <Context.Provider value={{setProductos, productos, test, setTest}}>
            {children}
        </Context.Provider>
     );
}
 
export default ProductsContext;