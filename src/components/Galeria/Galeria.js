import './Galeria.css'
import Carousel from 'react-elastic-carousel'

function Galeria() {
    return (
        <div className='galeria'>
            <h1 id='galeria' ><span>g</span>aleria</h1>
            <div className='tracado'></div>
            <Carousel
            itemsToShow={1}
            itemsToScroll={1}
            >
                <div className='galeria-carouselArea'>
                    <img src='./UNIT-BELA-VISTA_BIKE_SHARE.png' alt='Imagem do bicicletario' />
                    <div className='galeria-carouselArea-texto'>
                        <p><strong><span>Bici</span>cletário</strong></p>
                        <p>*Imagem preliminar sujeito a alterações</p>
                    </div>
                </div>
                <div className='galeria-carouselArea'>
                    <img src='./UNIT-BELA-VISTA_CHURRAS.jpg' alt='Imagem do bicicletario' />
                    <div className='galeria-carouselArea-texto'>
                        <p><strong><span>Chur</span>rasqueira</strong></p>
                        <p>*Imagem preliminar sujeito a alterações</p>
                    </div>
                </div>
                <div className='galeria-carouselArea'>
                    <img src='./UNIT-BELA-VISTA_COWORK.png' alt='Imagem do bicicletario' />
                    <div className='galeria-carouselArea-texto'>
                        <p><strong><span>Bici</span>cletário</strong></p>
                        <p>*Imagem preliminar sujeito a alterações</p>
                    </div>
                </div>
                <div className='galeria-carouselArea'>
                    <img src='./UNIT-BELA-VISTA_LAVANDERIA.png' alt='Imagem do bicicletario' />
                    <div className='galeria-carouselArea-texto'>
                        <p><strong><span>Bici</span>cletário</strong></p>
                        <p>*Imagem preliminar sujeito a alterações</p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Galeria