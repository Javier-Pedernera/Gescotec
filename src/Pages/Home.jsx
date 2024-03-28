import '../sass/components/_Home.scss';
import companyImage from '../assets/images/fondo1.jpg';
import { ParallaxBanner } from 'react-scroll-parallax';
import Card from '../components/cardPreguntas';
import { useTheme } from '../contexts/ThemeContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { GrAdd } from "react-icons/gr";
import { BsGraphUpArrow } from "react-icons/bs";
import startTypingAnimation from '../utils/typingAnimation';

const Home = () => {

    const { openMenu, setOpenMenu } = useTheme();
    const [showBubble, setShowBubble] = useState(false);
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight && !showBubble) {
                setShowBubble(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [showBubble]);

    useEffect(() => {
        if(showBubble){
            const introText = `"Estos beneficios combinados aumentan la productividad, mejoran la calidad del software y permiten una mayor personalización y adaptación a las necesidades de los usuarios"`;
        const intervalId = startTypingAnimation(introText, 30, setTypedText);
        return () => clearInterval(intervalId);
        }
        

        // console.log("intervalId", intervalId,"setTypedText",setTypedText);
        
    }, [showBubble]);

    const cardsData = [
        {
            title: 'Desarrollo de Software con IA',
            imageSrc: 'https://res.cloudinary.com/dbwmesg3e/image/upload/v1710861172/GescotecPage/Pngtree_artificial_intelligence_robot_innovation_technology_6447009_cfldof.png',
            description: 'La inteligencia artificial (IA) está revolucionando el mundo del desarrollo de software. Las empresas que la implementan experimentan una mayor eficiencia, menores costos y una capacidad sin precedentes para crear aplicaciones innovadoras.',
        },
        {
            title: 'Eficiencia mejorada del código',
            imageSrc: 'https://res.cloudinary.com/dbwmesg3e/image/upload/v1710870818/GescotecPage/Copia_de_instrucc-codigo_1_euvxxw.png',
            description: 'La inteligencia artificial optimiza el código existente, eliminando redundancias y aplicando mejores prácticas de codificación para un desarrollo más rápido y menos propenso a errores.',
        }, {
            title: 'Automatización de tareas repetitivas',
            imageSrc: 'https://res.cloudinary.com/dbwmesg3e/image/upload/v1710867880/GescotecPage/ui-ux-design-banner-original_ukre4q.png',
            description: 'Automatiza tareas tediosas del desarrollo de software, liberando a los desarrolladores para que se centren en actividades más creativas y estratégicas.',
        }, {
            title: 'Detección proactiva de errores',
            imageSrc: 'https://res.cloudinary.com/dbwmesg3e/image/upload/v1710868092/GescotecPage/Pngtree_artificial_intelligence_robot_programming_concept_6816416_u2ylxi.png',
            description: 'Detecta y corrige errores potenciales antes de que ocurran, gracias al análisis de patrones anómalos en el código, lo que reduce el tiempo necesario para pruebas y depuraciones.',
        },



        // {
        //     title: 'Personalización y adaptación del software',
        //     imageSrc: 'https://res.cloudinary.com/dbwmesg3e/image/upload/v1710870818/GescotecPage/Copia_de_instrucc-codigo_1_euvxxw.png',
        //     description: 'La inteligencia artificial puede analizar el comportamiento y las preferencias de los usuarios para personalizar y adaptar dinámicamente el software a las necesidades individuales. Esto incluye recomendaciones personalizadas, interfaces de usuario adaptativas y sistemas de respuesta inteligente que mejoran la experiencia del usuario y la satisfacción del cliente, lo que a su vez impulsa la adopción y la fidelización del usuario.'
        // }
    ];

    console.log(showBubble);
    return (
        <div className={`home ${openMenu ? 'blur' : ''}`}>
            <div className="hero-section">
                <div className="hero-text">
                    <h1>La inteligencia artificial para disminuir los costos de desarrollo de software y aumentar el rendimiento de tu empresa.</h1>
                </div>
                <ParallaxBanner
                    layers={[{ image: 'https://res.cloudinary.com/dbwmesg3e/image/upload/v1710858102/GescotecPage/1676926564346_tuncmo.jpg', speed: -15 },
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
                            layers={[{ image: 'https://res.cloudinary.com/dbwmesg3e/image/upload/v1710868840/GescotecPage/1681688753987_yg9ybx.jpg', opacity: [0.5, 1], speed: -13 },
                            ]
                            }
                            className="imageParallax2"
                        >
                            <div className='cont_btn'>
                                <div className="more_btn"> <GrAdd /> <Link to="/contactanos" className="link_pres_btn" >¿Quiénes somos?</Link >
                                </div>
                                <div className="pres_btn">  <Link to="/contactanos" className="link_pres_btn" > Presupuesto</Link > <IoDocumentTextOutline />
                                </div>
                            </div>

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
                    {showBubble ? <div className={`bubble ${showBubble ? "show" : ""}`}>
                        <div className='text_Final'>
                            {typedText}
                        </div>
                        
                        {/* Estos beneficios combinados aumentan la productividad, mejoran la calidad del software y permiten una mayor personalización y adaptación a las necesidades de los usuarios. */}
                        <BsGraphUpArrow className='Icono_graph' /></div> : <div className='bubble'></div>}
                </div>
            </div>
        </div>
    );
}

export default Home;