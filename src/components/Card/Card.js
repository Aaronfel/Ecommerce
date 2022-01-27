import { Link, useParams } from 'react-router-dom';
import './Card.css'
const Card = ({nombre, urlImage}) => {
    
    /* const { seccionParam } = useParams(); */

    return (
        <>
            {/* ver parametros del router me tira undefined */}
            <div style={{width: '18rem'}}>
                <Link to={`/productos}`}> <img className='imgCard shadow' src={urlImage} alt={nombre}/> </Link>
                <p className='pNombre text-center'>{nombre}</p>
            </div>
        </>
    );
}

export default Card;
