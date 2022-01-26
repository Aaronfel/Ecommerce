import './Home.css'
import Carrousel from '../Carrousel';
import Alimentos from '../../assets/img/Alimentos.jpg'
import Limpieza from '../../assets/img/Limpieza.jpg'
import Hogar from '../../assets/img/Hogar.jpg'
import Card from '../Card';
import { Link } from 'react-router-dom';
const Home = () => {

    const tipoProductos = [
        { id: 1, nombre: 'Alimentos', urlImage: Alimentos },
        { id: 2, nombre: 'Limpieza', urlImage: Limpieza },
        { id: 3, nombre: 'Hogar', urlImage: Hogar }
    ]

    return (
        <>
            <div className='carrouselAndButton'>
                <Carrousel />
                <div className='d-flex justify-content-center'>
                    <Link to='/productos'><button className='btn btn-info mt-3 mb-3'>Empezá a Comprar</button></Link>
                </div>
            </div>

            <div>
                <div className='containerCardsTypeProducts containerGlobal'>
                    <h3 className='text-center'>Nuestros Productos</h3>
                    <div className='d-flex justify-content-evenly '>
                        {tipoProductos.map(tipo => (
                            <div key={tipo.id} className='mt-5'>
                                <Card  {...tipo} />
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div>
                <div className='containerCardsOnSaleProducts containerGlobal'>
                    <h3 className='text-center'>Nuestras Ofertas no te las pierdas</h3>
                    <div className='d-flex justify-content-evenly '>
                        {tipoProductos.map(tipo => (
                            <div key={tipo.id} className='mt-5'>
                                <Card  {...tipo} />
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div>
                <div className='containerCardsTypeProducts containerGlobal'>
                    <h3 className='text-center'>Nuestros Productos</h3>
                    <div className='d-flex justify-content-evenly '>
                        {tipoProductos.map(tipo => (
                            <div key={tipo.id} className='mt-5'>
                                <Card  {...tipo} />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;