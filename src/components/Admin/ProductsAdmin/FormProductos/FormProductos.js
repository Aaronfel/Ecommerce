import './FormProductos.css'
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../../../store/productsContext';
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid';
import Alert from '@mui/material/Alert';

const FormProductos = ({initialValues, values, setValues, editando, setEditando, setVerForm}) => {
    
    const {setProductos, productos} = useContext(ProductsContext) 


    useEffect(() => {

    },[])

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
    const [mostrarExito, setMostrarExito] = useState(false)
    

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setValues({...values, [name]: name==="precio" || name==="stock" ? parseInt(value): value})
    }

    const confirmarEdicion = (e) => {
        e.preventDefault()
        let array = []
        if(productos.length > 0){
            array = productos.filter(producto => producto.id !== values.id)
        }
        array.push(values)
        setProductos(array)
        setValues(initialValues)
        setEditando(false)
    }

    const guardarProducto = (e) => {
        e.preventDefault()
        if(estaCompleto()){
            setProductos([...productos, values])
            setValues(initialValues)
            setMostrarWarning(false)
            setMostrarExito(true)
            console.log(values)
           /*  objetoProductos.appendFile(values) */
        }else{
            console.log("completa")
            setMostrarWarning(true)
        }
    }

    useEffect(() => {
        if(mostrarExito){
            setTimeout(() => {
                setMostrarExito(false)
            }, 4000);   
        }
    },[mostrarExito])


    useEffect(() =>{ 
        localStorage.setItem("productos", JSON.stringify(productos))
    },[productos])

    const estaCompleto = () => {
        for (const key in values) {
            if(values[key] === ""){
                console.log(key)
               return false
            }
        }
        return true
    }

    /* useEffect(() => {
        console.log(values)
    },[values]) */



    return ( 
        <>
            <form onSubmit={(e) => !editando ? guardarProducto(e) : confirmarEdicion(e)} className="contenedorFormPrdocutos" action="">
                <h2 className="tituloFormProductos">Datos del producto</h2>
                <div className="itemForm">
                    <label className="itemLabelForm" htmlFor="nombre">Nombre</label>
                    <input onChange={(e) => handleInputChange(e)} value={values.nombre} className="itemInputForm" type="text" name="nombre" id="nombre" />
                </div>
                <div className="itemForm">
                    <label className="itemLabelForm" htmlFor="urlImagen">Nombre para la imagen</label>
                    <input onChange={(e) => handleInputChange(e)} value={values.urlImagen} className="itemInputForm" type="text" name="urlImagen" id="urlImagen" />
                </div>
                <div className="itemFormDescripcion">
                    <label className="textareaLabelForm" htmlFor="descripcionChicha">Descrpition chica</label>
                    <textarea value={values.descripcionChicha} onChange={(e) => handleInputChange(e)} className="textareaForm" name="descripcionChicha" id="descripcionChicha" /* cols="30" */ rows="2"></textarea>
                </div>
                <div className="itemFormDescripcion">
                    <label className="textareaLabelForm" htmlFor="descripcionGrande">Descripcion grande</label>
                    <textarea value={values.descripcionGrande} onChange={(e) => handleInputChange(e)} className="textareaForm" name="descripcionGrande" id="descripcionGrande" /* cols="30" */ rows="2"></textarea>
                </div>
                <div className="itemForm">
                    <label className="itemLabelForm" htmlFor="precio">Precio</label>
                    <input value={values.precio} onChange={(e) => handleInputChange(e)} className="itemInputForm" type="number" min={0} name="precio" id="precio" />
                </div>
                <div className="itemForm">
                    <label className="itemLabelForm" htmlFor="stcok">Stock</label>
                    <input value={values.stock} onChange={(e) => handleInputChange(e)} className="itemInputForm" type="number" min={0} name="stock" id="stock" />
                </div>
                <div className="itemForm">
                    <select className="itemInputForm" onChange={(e) => handleInputChange(e)} name="seccionPrincipal" value={values.seccionPrincipal}>
                        <option value="">SeccionPrincipal</option>
                        <option value="Alimentos">Alimentos</option>
                        <option value="HigienePesonal">Higiene personal</option>
                        <option value="Limpieza">Limpieza</option>
                    </select>
                </div>
                <div className="itemForm">
                    <select className="itemInputForm" onChange={(e) => handleInputChange(e)} name="subSeccion" value={values.subSeccion}>
                        <option value="">Subsección</option>
                        <option value="Bebidas">Bebidas</option>
                        <option value="Lacteos">Lacteos</option>
                        <option value="Conservas">Conservas</option>
                    </select>
                </div>
                <div className="itemForm">
                    <select className="itemInputForm" onChange={(e) => handleInputChange(e)} name="marca" value={values.marca}>
                        <option value="">Marca</option>
                        <option value="Natura">Natura</option>
                        <option value="Arcor">Arcor</option>
                        <option value="CocaCola">CocaCola</option>
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
            {
                mostrarExito ? 
                <div className="w-75">
                    <Alert severity="success">Agregado con éxito!</Alert>
                </div>
                : ""
            }
            <button onClick={() => setVerForm(false) } className="btn btn-success">Cerrar</button>
        </>
    );
}
 
export default FormProductos;