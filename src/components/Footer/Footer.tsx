import './Footer.css'
import Container from '../Container/Container';

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <div className='footer__inner'>
                    <div className="footer__meta">
                        <div className="footer__logo">
                            <div className="footer__logoCircle"></div>
                            <span>HealthCare</span>
                        </div>
                        <p className="footer__desc">HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                        <p className="footer__copy">© HealthCare PTY LTD 2023. All rights reserved</p>
                    </div>
                    <div className="footer__infos">
                        <div className="footer__info">
                            <h4 className="footer__infoName">Company</h4>
                            <ul className="footer__infoLinks">
                                <li className="footer__infoLink"><a href="#">About</a></li>
                                <li className="footer__infoLink"><a href="#">Testimonials</a></li>
                                <li className="footer__infoLink"><a href="#">Find a doctor</a></li>
                                <li className="footer__infoLink"><a href="#">Apps</a></li>
                            </ul>
                        </div>
                        <div className="footer__info">
                            <h4 className="footer__infoName">Region</h4>
                            <ul className="footer__infoLinks">
                                <li className="footer__infoLink"><a href="#">Indonesia</a></li>
                                <li className="footer__infoLink"><a href="#">Singapore</a></li>
                                <li className="footer__infoLink"><a href="#">Hongkong</a></li>
                                <li className="footer__infoLink"><a href="#">Canada</a></li>
                            </ul>
                        </div>
                        <div className="footer__info">
                            <h4 className="footer__infoName">Help</h4>
                            <ul className="footer__infoLinks">
                                <li className="footer__infoLink"><a href="#">Help center</a></li>
                                <li className="footer__infoLink"><a href="#">Contact support</a></li>
                                <li className="footer__infoLink"><a href="#">Insrtructions</a></li>
                                <li className="footer__infoLink"><a href="#">How it works</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;