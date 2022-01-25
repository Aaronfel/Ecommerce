import './FormProductos.css'
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../../../store/productsContext';
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid';
import Alert from '@mui/material/Alert';

const FormProductos = ({initialValues, values, setValues}) => {

    const {setProductos, productos} = useContext(Context) 

    /* const initialValues = {
        id: uuidv4(),
        nombre: "",
        marca: "",
        descripcion: "",
        precio: 1,
        stock: 1,
        seccion: "",
        subseccion: ""
    } */

    const [mostrarWarning, setMostrarWarning] = useState(false)
    

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    const confirmarEdicion = () => {
      
    }

    const guardarProducto = (e) => {
        e.preventDefault()
        if(estaCompleto()){
            setProductos([...productos, values])
            setValues(initialValues)
            setMostrarWarning(false)
        }else{
            console.log("completa")
            setMostrarWarning(true)
        }
    }

    const estaCompleto = () => {
        for (const key in values) {
            if(values[key] === ""){
               return false
            }
        }
        return true
    }

    useEffect(() => {
        console.log(values)
    },[values])

    return (  
        <form onSubmit={(e) => guardarProducto(e)} className="contenedorFormPrdocutos" action="">
                <h2 className="tituloFormProductos">Datos del producto</h2>
                <div className="itemForm">
                    <label className="itemLabelForm" htmlFor="nombre">Nombre</label>
                    <input onChange={(e) => handleInputChange(e)} value={values.nombre} className="itemInputForm" type="text" name="nombre" id="nombre" />
                </div>
                <div className="itemForm">
                    <select className="itemInputForm" onChange={(e) => handleInputChange(e)} name="marca" value={values.marca}>
                        <option value="">Marca</option>
                        <option value="Natura">Natura</option>
                        <option value="Arcor">Arcor</option>
                        <option value="CocaCola">CocaCola</option>
                    </select>
                </div>
                <div className="itemFormDescripcion">
                    <label className="textareaLabelForm" htmlFor="descripcion">Descrpition</label>
                    <textarea value={values.descripcion} onChange={(e) => handleInputChange(e)} className="textareaForm" name="descripcion" id="descripcion" /* cols="30" */ rows="2"></textarea>
                </div>
                <div className="itemForm">
                    <label className="itemLabelForm" htmlFor="precio">Precio</label>
                    <input value={values.precio} onChange={(e) => handleInputChange(e)} className="itemInputForm" type="number" min={1} name="precio" id="precio" />
                </div>
                <div className="itemForm">
                    <label className="itemLabelForm" htmlFor="stcok">Stock</label>
                    <input value={values.stock} onChange={(e) => handleInputChange(e)} className="itemInputForm" type="number" min={1} name="stock" id="stock" />
                </div>
                <div className="itemForm">
                    <select className="itemInputForm" onChange={(e) => handleInputChange(e)} name="seccion" value={values.seccion}>
                        <option value="">Sección</option>
                        <option value="alimento">Alimento</option>
                        <option value="higienePesonal">Higiene personal</option>
                        <option value="limpieza">Limpieza</option>
                    </select>
                </div>
                <div className="itemForm">
                    <select className="itemInputForm" onChange={(e) => handleInputChange(e)} name="subseccion" value={values.subseccion}>
                        <option value="">Subsección</option>
                        <option value="bebidas">Bebidas</option>
                        <option value="lacteos">Lacteos</option>
                        <option value="conservas">Conservas</option>
                    </select>
                </div>
                {
                    mostrarWarning ? 
                    <div className="w-75">
                        <Alert severity="error">Debes completar todos los datos!</Alert>
                    </div>
                    : ""
                }
                <button type="sumbit" className="botonFormProductos">Guardar producto</button>
            </form>
    );
}
 
export default FormProductos;