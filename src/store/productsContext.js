import { createContext, useEffect, useState } from "react";
import { objetoProductos } from "../assets/data/objetoProductos.js"
import { objetoSecciones } from "../assets/data/objetoSecciones.js"


export const ProductsContext = createContext(null);

<<<<<<< HEAD
const ProductsProvider = ({children}) => {
    const [productos, setProductos] = useState([]);
    const [secciones, setSecciones] = useState([]);

    useEffect(() => {
        setProductos(objetoProductos);
    }, [objetoProductos])

    useEffect(() => {
        setSecciones(objetoSecciones);
    }, [objetoSecciones])

    return (
        <ProductsContext.Provider value={{productos, secciones}}>
=======
const ProductsContext = ({children}) => {

    
    return (
        <Context.Provider>
>>>>>>> 1e7d3d74d8af7b429945f140d9ae8c2b9aa5b46c
            {children}
        </ProductsContext.Provider>
     );
}
 
export default ProductsProvider;