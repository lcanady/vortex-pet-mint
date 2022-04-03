import styled from "styled-components";
import bg from "./assets/bg.png";
import logo from "./assets/logo.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 0.7rem;
  margin-top: 24px;
`;

const Button = styled.button`
  margin-top: 24px;
  height: 72px;
  min-width: 300px;
  font-size: 1.3em;
  border-radius: 50px;
`;

const Subtitle = styled.p`
  text-transform: uppercase;
  font-size: 24px;
  margin: 24px 0;
`;

function App() {
  return (
    <Wrapper>
      <Overlay>
        <img src={logo} alt="logo" />
        <Title>Vortex Pets</Title>
        <Button
          onClick={() =>
            window.open("https://opensea.io/collection/vortexpets", "_blank")
          }
        >
          Available on OpenSea
        </Button>
      </Overlay>
    </Wrapper>
  );
}

export default App;
