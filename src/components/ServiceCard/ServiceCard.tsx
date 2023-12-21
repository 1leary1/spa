import './ServiceCard.css'

interface ServiceCardProps {
    imgSrc: string;
    title: string;
    subtitle: string;
}

function ServiceCard({ imgSrc, title, subtitle }: ServiceCardProps) {
    return (
        <div className="serviceCard">
            <div className="serviceCard__imgWrapper">
                <img src={imgSrc} />
            </div>
            <div className="serviceCard__info">
                <h3 className="serviceCard__title">{title}</h3>
                <p className="serviceCard__subTitle">{subtitle}</p>
            </div>
        </div>
    )
}

export default ServiceCard