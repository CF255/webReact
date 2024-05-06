import {SlideShow, Slide, TextSlide} from "../components/SlideShow/SlideShow";
import PortalLayout from "../layout/PortalLayout";
import '../../public/css/home.css'
import '../../public/css/slideshow.css'
import img2 from '/img/img2.jpg'
import imgminilogoapipelis from '/img/minilogoapipelis.jpg'
import img4 from '/img/img4.jpg'
import {Carrousel,CardSlide, CardTextSlide} from "../components/Carrousel/Carrousel";
import '../../public/css/carrousel.css'
import imgminilogotresenraya from '/img/imgtresenraya.jpg'
import imglogotresenraya from '/img/tresenraya.png'
import imgapipelis from '/img/logoapipelis.jpg'
import imglogogiphy from '/img/imglogogiphy.jpg'
import imgminilogogiphi from '/img/imgminilogogiphy.jpg'

import { Link } from "react-router-dom";



export default function Dashboard(){





    return(
        
       <>
        <PortalLayout>
             <main>

                {/* slideshow */}
                
                <SlideShow controles={true} autoplay={true}>
                <Slide className="slide">
                <Link to={"/tresenraya"}>
                    <img src={imglogotresenraya} alt="" />
                    </Link>
                <TextSlide className='textslide'>
                    <p>Tic Tac Toe</p>
                </TextSlide>
            </Slide>
            <Slide className="slide">
               <Link to={"/apipelis"}>
                    <img src={imgapipelis} alt="" />
                    </Link>
                <TextSlide className='textslide'>
                    <p>Movies Api</p>
                </TextSlide>
            </Slide>
            <Slide className="slide">
            <Link  to={"/giffy"}>
                    <img src={imglogogiphy} alt="" />
                    </Link>
                <TextSlide className='textslide'>
                    <p>Giphy Api</p>
                </TextSlide>
            </Slide>
            <Slide className="slide">
                <a href="#">
                    <img src={img2} alt="" />
                </a>
                <TextSlide className='textslide'>
                    <p>prueba</p>
                </TextSlide>
            </Slide>
                </SlideShow>
            {/* fin slideshow */}

                

                {/* carrousel card */}
                <p className="ptitulo">Card slide</p>

                <Carrousel controles={true}>
                <CardSlide className="card">
                <div className="img"><img src={imgminilogotresenraya} alt="img"  /></div>
                <CardTextSlide>Tic Tac Toe</CardTextSlide>
                <Link to={'/tresenraya'}>
                <button className='btnentrar'>entrar</button>
                </Link>
            </CardSlide>

            <CardSlide className="card">
                <div className="img"><img src={imgminilogoapipelis} alt="img" /></div>
                <CardTextSlide>Api Pelis</CardTextSlide>
                
                <Link to={'/apipelis'}>
                <button className='btnentrar'>entrar</button>
                </Link>
            </CardSlide>
            
  
            <CardSlide className="card">
                <div className="img"><img src={imgminilogogiphi} alt="img" /></div>
                <CardTextSlide>Giffy</CardTextSlide>
                <Link  to={'/giffy'}>
                <button className='btnentrar'>entrar</button>
                </Link>
            </CardSlide>


            <CardSlide className="card">
                <div className="img"><img src={img2} alt="img" /></div>
                <CardTextSlide>nombre</CardTextSlide>
               
                <Link to={'/dashboard'}>
                <button className='btnentrar'>entrar</button>
                </Link>
            </CardSlide>
            <CardSlide className="card">
                <div className="img"><img src={img2} alt="img" /></div>
                <CardTextSlide>nombre</CardTextSlide>
                
                <Link to={'/dashboard'}>
                <button className='btnentrar'>entrar</button>
                </Link>
            </CardSlide>
            <CardSlide className="card">
                <div className="img"><img src={img2} alt="img"  /></div>
                <CardTextSlide>nombre</CardTextSlide>
                
                <Link to={'/dashboard'}>
                <button className='btnentrar'>entrar</button>
                </Link>
            </CardSlide>
                </Carrousel>

                {/* fin carrousel card */}
                

             </main>
        </PortalLayout>


        </>
    )
   
}


