import '../sass/components/_CardPreguntas.scss'

const Card = ({ title, imageSrc, description }) => {
    return (
        <div className="card">
            <img src={imageSrc} alt={title} className="imagencardPreguntas" />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;