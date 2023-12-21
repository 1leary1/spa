import './InfoPad.css';
import Container from '../Container/Container';

function InfoPad() {
    return (
        <div className="infoPad">
            <Container>
                <>
                    <div className="infoPad__row">
                        <div className="infoPad__img">
                            <img src="/src/assets/providers.png" />
                        </div>
                        <div className="infoPad__content">
                            <h3 className="infoPad__title">Leading healthcare <br />providers</h3>
                            <p className="infoPad__text">
                                We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver
                            </p>
                            <button className="infoPad__btn" type='submit'>Learn more</button>
                        </div>
                    </div>
                    <div className="infoPad__row infoPad__row_reversed">
                        <div className="infoPad__img">
                            <img src="/src/assets/app.png" />
                        </div>
                        <div className="infoPad__content">
                            <h3 className="infoPad__title">Download our <br />mobile apps</h3>
                            <p className="infoPad__text">
                                Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely
                            </p>
                            <button className="infoPad__btn" type='submit'>
                                Download
                                <img src="/src/assets/arrow_down.png" />
                            </button>
                        </div>
                    </div>
                </>
            </Container>
        </div>
    )
}

export default InfoPad;