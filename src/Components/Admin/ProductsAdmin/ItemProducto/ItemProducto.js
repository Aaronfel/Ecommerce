import './ItemProducto.css'

const ItemProducto = ({nombre, id, marca, seccion, subseccion, precio, stock, descripcion, editar, eliminar}) => {



    return (  
        <tr className="contenedorItemProducto">
            <td>{nombre}</td>
            <td>{marca}</td>
            <td>{descripcion}</td>
            <td>{precio}</td>
            <td>{stock}</td>
            <td>{seccion}</td>
            <td>{subseccion}</td>
            <div className="contenedorBotonesItemProducto">
                <button className="btn btn-outline-info mx-1" onClick={() => editar(id)}>Ver/Editar</button>
                <button className="btn btn-outline-danger mx-1"  onClick={() => eliminar(id)}>Eliminar</button>
            </div>
        </tr>
    );
}
 
export default ItemProducto;