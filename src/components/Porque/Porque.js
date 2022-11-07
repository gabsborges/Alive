import './Porque.css'
import Carousel from 'react-elastic-carousel'

function Porque() {
    return (
        <div className='porque'>
            <div className='porque-area'>
                <div className='porque-area-texto'>
                    <h1>Por que <span>a</span>live?</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <Carousel
            itemsToShow={4}
            itemsToScroll={4}
            >
                <div className='iconesWrapper'>
                    <img src='./logo-alive.png' alt='icone '/>
                    <p>Lorem ipsum</p>
                </div>
                <div className='iconesWrapper'>
                    <img src='./logo-alive.png' alt='icone '/>
                    <p>Lorem ipsum</p>
                </div>
                <div className='iconesWrapper'>
                    <img src='./logo-alive.png' alt='icone '/>
                    <p>Lorem ipsum</p>
                </div>
                <div className='iconesWrapper'>
                    <img src='./logo-alive.png' alt='icone '/>
                    <p>Lorem ipsum</p>
                </div>
                <div className='iconesWrapper'>
                    <img src='./logo-alive.png' alt='icone '/>
                    <p>Lorem ipsum</p>
                </div>
                <div className='iconesWrapper'>
                    <img src='./logo-alive.png' alt='icone '/>
                    <p>Lorem ipsum</p>
                </div>
                <div className='iconesWrapper'>
                    <img src='./logo-alive.png' alt='icone '/>
                    <p>Lorem ipsum</p>
                </div>
                <div className='iconesWrapper'>
                    <img src='./logo-alive.png' alt='icone '/>
                    <p>Lorem ipsum</p>
                </div>
            </Carousel>
            <div className='spanArea'>
                <span>a</span>
            </div>
        </div>
    )
}

export default Porque