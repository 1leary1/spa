import './Greeting.css'

function Greeting() {
    return (
        <>
            <div className="greeting">
                <div className="info">
                    <div className="title">Virtual healthcare
                        for you</div>
                    <div className="secondary">Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</div>
                    <div className="button">Consult today</div>
                </div>
                <img className="img" src="/src/assets/header_illustration.png" />
            </div>
        </>
    )
}

export default Greeting