import Greeting from "../Greeting/Greeting.tsx";
import InfoPad from "../InfoPad/InfoPad.tsx";
import Services from "../Services/Services.tsx";

function Main() {
  return (
    <main className="main">
      <Greeting />
      <Services />
      <InfoPad />
    </main>
  );
}

export default Main;
