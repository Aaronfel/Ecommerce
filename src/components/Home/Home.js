import './Home.css'
import Carrousel from '../Carrousel';
import Alimentos from '../../assets/img/Alimentos.jpg'
import Limpieza from '../../assets/img/Limpieza.jpg'
import Hogar from '../../assets/img/Hogar.jpg'
import Card from '../Card';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductsContext } from '../../store/productsContext';
import SliderProducts from '../SliderProducts';
const Home = () => {

    const { productos } = useContext(ProductsContext)
    const productosOferta = productos.filter(prod => prod.oferta === true);
    const productosDestacados = productos.filter(prod => prod.destacado === true);

    const tipoProductos = [
        { id: 1, nombre: 'Alimentos', urlImage: Alimentos },
        { id: 2, nombre: 'Limpieza', urlImage: Limpieza },
        { id: 3, nombre: 'Hogar', urlImage: Hogar }

    ]

    return (
        <>
            {/* Boton y Carrousel */}
            <div className='carrouselAndButton'>
                <Carrousel />
                <div className='d-flex justify-content-center'>
                <Link to='/productos' className='m-3'><button className='carrousel-button'><h5 className='no-padding-margin'>Empezá a Comprar</h5></button></Link>
                </div>
            </div>

            {/* Mapeo de categorias por el array de productos */}
            <div>
                <div className='containerCardsTypeProducts containerGlobal'>
                    <h3 className='text-center'>Nuestras categorias</h3>
                    <div className='container-product-cards'>
                        {tipoProductos.map(tipo => (
                            <div key={tipo.id} className='mt-5'>
                                <Card  {...tipo} />
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            {/* Mostramos el slider de las ofertas */}
            <div>
                <div className='containerCardsOnSaleProducts containerGlobal'>
                    <h3 className='text-center'>Nuestras Ofertas no te las pierdas</h3>
                    <div className='mt-5 mb-5 sliderProductsHome'>
                        <SliderProducts productos={productosOferta} />
                    </div>
                </div>
            </div>

            {/* Mostramos el slider de los productos destacados */}
            <div>
                <div className='containerCardsTypeProducts containerGlobal'>
                    <h3 className='text-center'>Productos Destacados</h3>
                    <div className='mt-5 mb-5 sliderProductsHome'>
                        <SliderProducts productos={productosDestacados} />
                    </div>
                </div>
            </div>


        </>
    );
}

export default Home;