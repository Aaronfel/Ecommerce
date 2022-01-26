import './Card.css'
import { Link } from 'react-router-dom';

const Card = ({nombre, urlImage}) => {
    return (
        <>
            <div style={{width: '18rem'}}>
                <Link to={'/productos'}> <img className='imgCard shadow' src={urlImage} alt={nombre}/> </Link>
                <p className='pNombre text-center'>{nombre}</p>
            </div>
        </>
    );
}

export default Card;