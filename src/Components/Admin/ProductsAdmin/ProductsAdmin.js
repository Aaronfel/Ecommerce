import './ProductsAdmin.css'
import TextField from '@mui/material/TextField';
import { useContext, useEffect, useState } from 'react';
import FormProductos from './FormProductos/FormProductos';
import { v4 as uuidv4 } from 'uuid';
import { Context } from '../../../store/productsContext';
import ItemProducto from './ItemProducto/ItemProducto';

const ProductsAdmin = () => {

    const initialValues = {
        id: uuidv4(),
        nombre: "",
        marca: "",
        descripcion: "",
        precio: 1,
        stock: 1,
        seccion: "",
        subseccion: ""
    }
    const [values, setValues] = useState(initialValues)
    const { productos } = useContext(Context)

    useEffect(() => {
        console.log(productos)
    }, [productos])

    const editar = (id) => {
        console.log("editando")
        setValues(productos.find(producto => producto.id === id))
        console.log(initialValues)
    }

    const eliminar = (id) => {
        console.log("elimnando")
    }

    return (
        <div className="contenedorABMProductos" >
            <FormProductos initialValues={initialValues} values={values} setValues={setValues}/>
            {
                productos.length > 0 ?
                    <div className="contenedorItemsProductos">
                        {
                            <table className="table">
                                <tbody>
                                    <tr className="bg-dark text-white">
                                        <th>Nombre</th>
                                        <th>Marca</th>
                                        <th>Descripcion</th>
                                        <th>Precio</th>
                                        <th>Stock</th>
                                        <th>Sección</th>
                                        <th>Seubsección</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </tbody>

                                <tbody>
                                    {
                                        productos.map(producto => (
                                            <ItemProducto key={producto.id} {...producto} eliminar={eliminar} editar={editar}/>
                                        ))
                                    }
                                </tbody>
                            </table>
                    }
                    </div>
                    : <h3>No hay productos</h3>
            }
        </div>
    );
}

export default ProductsAdmin;