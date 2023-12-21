import "./Slider.css";
import Container from "../Container/Container";

function Slider() {
  return (
    <div className="slider">
      <Container>
        <>
          <div className="title"></div>
          <div className="customer">
            <img src="/src/assets/arrow_down.png" />
            <div className="name">Edvard Newgate</div>
            <div className="post">Founder Circle</div>
          </div>
          <div className="description">
            “Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely”
          </div>
        </>
      </Container>
    </div>
  );
}

export default Slider;
