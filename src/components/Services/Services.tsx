import './Services.css';
import Container from '../Container/Container';
import ServiceCard from "../ServiceCard/ServiceCard";

function Services() {
    return (
        <div className="services">
            <Container>
                <>
                <div className="services__header">
                    <h2 className="services__title">Our services</h2>
                    <p className="services__caption">
                    We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health
                    </p>
                </div>
                <div className="services__cards">
                    <ServiceCard imgSrc = {'./src/assets/lupa.png'} title = {'Search doctor'} subtitle = {'Choose your doctor from thousands of specialist, general, and trusted hospitals'}/>
                    <ServiceCard imgSrc = {'./src/assets/jar.png'} title = {'Online pharmacy'} subtitle = {'Buy  your medicines with our mobile application with a simple delivery system'}/>
                    <ServiceCard imgSrc = {'./src/assets/phone.png'} title = {'Consultation'} subtitle = {'Free consultation with our trusted doctors and get the best recomendations'}/>
                    <ServiceCard imgSrc = {'./src/assets/tablet.png'} title = {'Details info'} subtitle = {'Free consultation with our trusted doctors and get the best recomendations'}/>
                    <ServiceCard imgSrc = {'./src/assets/emergency.png'} title = {'Emergency care'} subtitle = {'You can get 24/7 urgent care for yourself or your children and your lovely family'}/>
                    <ServiceCard imgSrc = {'./src/assets/tracking.png'} title = {'Tracking'} subtitle = {'Track and save your medical history and health data '}/>
                </div>
                <button className="services__btn" type='submit'>Learn more</button>
                </>
            </Container>
        </div>
    )
}

export default Services;
