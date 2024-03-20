import '../sass/components/_Home.scss';
import companyImage from '../assets/images/fondo1.jpg';
import { ParallaxBanner } from 'react-scroll-parallax';
import Card from '../components/cardPreguntas';
import { useTheme } from '../contexts/ThemeContext';

const Home = () => {

    const { openMenu, setOpenMenu } = useTheme();

    const cardsData = [
        {
            title: 'Desarrollo de Software con IA',
            imageSrc: 'https://res.cloudinary.com/dbwmesg3e/image/upload/v1710861172/GescotecPage/Pngtree_artificial_intelligence_robot_innovation_technology_6447009_cfldof.png',
            description: 'La inteligencia artificial (IA) está revolucionando el mundo del desarrollo de software. Las empresas que la implementan experimentan una mayor eficiencia, menores costos y una capacidad sin precedentes para crear aplicaciones innovadoras.',
        },
        {
            title: 'Automatización de Procesos de Software',
            imageSrc: 'https://res.cloudinary.com/dbwmesg3e/image/upload/v1710868092/GescotecPage/Pngtree_artificial_intelligence_robot_programming_concept_6816416_u2ylxi.png',
            description: 'La automatización de procesos de software ofrece numerosos beneficios, incluida la reducción del tiempo de desarrollo y la mejora de la precisión del software.',
        }, {
            title: 'Reduccion del tiempo de desarrollo',
            imageSrc: 'https://res.cloudinary.com/dbwmesg3e/image/upload/v1710870818/GescotecPage/Copia_de_instrucc-codigo_1_euvxxw.png',
            description: 'La automatización de procesos de software ofrece numerosos beneficios, incluida la reducción del tiempo de desarrollo y la mejora de la precisión del software.'
        }
    ];


    return (
        <div className={`home ${openMenu? 'blur':''}`}>
            <div className="hero-section">
                <div className="hero-text">
                    <h1>La inteligencia artificial para disminuir los costos de desarrollo de software y aumentar el rendimiento de tu empresa.</h1>
                </div>
                <ParallaxBanner
                    layers={[{ image: 'https://res.cloudinary.com/dbwmesg3e/image/upload/v1710858102/GescotecPage/1676926564346_tuncmo.jpg', speed: -15 },
                        // {
                        //     speed: -15,
                        //     children: (
                        //         <div className="text-overlay">
                        //             <h1 className="text-8xl text-white font-thin">"La inteligencia artificial para disminuir los costos de desarrollo de software y aumentar el rendimiento de tu empresa."</h1>
                        //         </div>
                        //     ),
                        // },
                    ]
                    }
                    className="imageParallax"
                >
                </ParallaxBanner>
                {/* <img src={companyImage} alt="Empresa" className="company-image" /> */}
                {/* <div className="hero-text">
                    <h1>La inteligencia artificial para disminuir los costos de desarrollo de software y aumentar el rendimiento de tu empresa.</h1>
                </div> */}
            </div>
            <div className="questions-section">
                {/* <h2>Preguntas:</h2> */}

                <div className="card-container">

                    <div className="aQuenosded">
                        <h2>¿A qué nos dedicamos?</h2>
                        <div className='descripAque'>Nos dedicamos a ofrecer soluciones de ingeniería de software de alta calidad utilizando tecnologías de inteligencia artificial.</div>
                        <ParallaxBanner
                            layers={[{ image: 'https://res.cloudinary.com/dbwmesg3e/image/upload/v1710868840/GescotecPage/1681688753987_yg9ybx.jpg', opacity: [0.5, 1], speed: -15 },
                                // {
                                //     speed: -15,
                                //     children: (
                                //         <div className="text-overlay">
                                //             <h1 className="text-8xl text-white font-thin">"La inteligencia artificial para disminuir los costos de desarrollo de software y aumentar el rendimiento de tu empresa."</h1>
                                //         </div>
                                //     ),
                                // },
                            ]
                            }
                            className="imageParallax2"
                        >
                        </ParallaxBanner>



                        {/* <img src="https://res.cloudinary.com/dbwmesg3e/image/upload/v1710868840/GescotecPage/1681688753987_yg9ybx.jpg" alt="" /> */}
                    </div>
                    <strong className='descripAque'>¿De qué manera?</strong>
                    <div className="cardConteiner3">

                        {cardsData.map((card, index) => (
                            <Card
                                key={index}
                                title={card.title}
                                imageSrc={card.imageSrc}
                                description={card.description}
                            />
                        ))}
                    </div>

                    <div className="cards-container">

                    </div>
                    {/* Agrega más tarjetas según sea necesario */}
                </div>
            </div>
        </div>
    );
}

export default Home;