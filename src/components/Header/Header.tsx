import './Header.css'
import Container from '../Container/Container.tsx'

function Header() {
    return (
        <div className="header">
            <Container>
                <div className="header__inner">
                    <a className="logo" href='/'>
                        <div className="circle">
                            <div className="tLogo">T</div>
                        </div>
                        <div className="siteName">HealthCare</div>
                    </a>
                    <div className="topnav">
                        <a className="active" href='#'>Home</a>
                        <a href='#'>Find a doctor</a>
                        <a href='#'>Apps</a>
                        <a href='#'>Testimonials</a>
                        <a href='#'>About us</a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header