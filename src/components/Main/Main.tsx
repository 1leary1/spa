import Greeting from '../Greeting/Greeting.tsx'
import InfoPad from '../InfoPad/InfoPad.tsx';
import Services from '../Services/Services.tsx'
import Slider from '../Slider/Slider.tsx';

function Main() {
    return (
        <main className="main">
            <Greeting />
            <Services />
            <InfoPad />
            <Slider />
        </main>
    );
}

export default Main;
