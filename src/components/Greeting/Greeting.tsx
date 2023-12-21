import './Greeting.css'
import Container from '../Container/Container'

function Greeting() {
    return (
        <div className="greeting">
            <Container>
                <div className="greeting__inner">
                    <div className="info">
                        <div className="title">Virtual healthcare <br/>for you</div>
                        <div className="secondary">Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</div>
                        <div className="button">Consult today</div>
                    </div>
                    <img className="img" src="/src/assets/header_illustration.png" />
                </div>
            </Container>
        </div>
    )
}

export default Greeting