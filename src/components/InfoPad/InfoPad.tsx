import './InfoPad.css';

function InfoPad() {
    return (
        <>
            <div className="infoPad">
                <div className="pad1">
                    <img className="img1" src="/src/assets/providers.png" />
                    <div className="info1">
                        <div className="title1">Leading healthcare providers</div>
                        <div className="secondary1">We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</div>
                        <div className="button1">Learn more</div>
                    </div>
                </div>
                <div className="pad2">
                    <div className="info2">
                        <div className="title2">Download our
                            mobile apps</div>
                        <div className="secondary2">Our dedicated patient engagement app and
                            web portal allow you to access information instantaneously (no tedeous form, long calls,
                            or administrative hassle) and securely</div>
                        <div className="button2">
                            <div className="buttonTitle">Download</div>
                            <img className="arrow" src="/src/assets/arrow_down.png" />
                        </div>
                    </div>
                    <img className="img2" src="/src/assets/app.png" />
                </div>
            </div>
        </>
    )
}

export default InfoPad;