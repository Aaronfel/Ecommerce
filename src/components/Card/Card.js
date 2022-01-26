import { Link } from 'react-router-dom';
import './Card.css'
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
