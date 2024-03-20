import '../sass/components/_Servicios.scss'; // Importa los estilos para esta sección

const Servicios = () => {
    return (
        <section className="services-section">
            <h2>Nuestros Servicios</h2>
            <div className="service">
                <div className='imagenesDiv'>
                    <img src="https://res.cloudinary.com/dbwmesg3e/image/upload/v1710858146/GescotecPage/inteligencia-articial_dnhtan.jpg" alt="Desarrollo de Software con IA" />
                </div>
                <div>
                    <h3>Desarrollo de Software con IA</h3>
                    <p>
                        La inteligencia artificial (IA) está revolucionando el mundo del desarrollo de software.
                        Las empresas que la implementan experimentan una mayor eficiencia, menores costos y una capacidad sin precedentes para crear aplicaciones innovadoras.
                    </p>
                    <ul>
                        <li>Automatización de tareas repetitivas</li>
                        <li>Mejora en la calidad del código</li>
                        <li>Aceleración del proceso de desarrollo</li>
                        <li>Creación de aplicaciones innovadoras</li>
                    </ul>
                </div>
            </div>
            <div className="service2">
                <div>
                    <h3>Automatización de Procesos de Software</h3>
                    <p>
                        La automatización de procesos de software ofrece numerosos beneficios, incluida la reducción del tiempo de desarrollo y la mejora de la precisión del software.
                    </p>
                    <ul>
                        <li>Adiós a las tareas repetitivas</li>
                        <li>Precisión milimétrica</li>
                        <li>Velocidad de vértigo</li>
                        <li>Rentabilidad en alza</li>
                        <li>Escalabilidad sin límites</li>
                    </ul>
                </div>
                <div className='imagenesDiv'>
                    <img src="https://res.cloudinary.com/dbwmesg3e/image/upload/v1710858535/GescotecPage/fondo_AI_1_ug88mp.png" alt="Automatización de Procesos de Software" />
                </div>

            </div>
            {/* Agrega más servicios según sea necesario */}
        </section>
    );
}

export default Servicios;