import Image from 'next/image';

const CardService = ({ id, icon, title, description }) => {
    return (
        <div className="card" id={id}>
            <div className="info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default CardService;