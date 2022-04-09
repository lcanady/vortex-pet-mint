import styled from "styled-components";
import bg from "./assets/bg.png";
import logo from "./assets/logo.png";
import arrow from "./assets/arrow.png";
import pet1 from "./assets/pet1.png";
import pet2 from "./assets/pet2.png";
import pet3 from "./assets/pet3.png";
import { useRef } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${bg});
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
  letter-spacing: 0.5rem;
  margin-top: 24px;
  font-size: 48px;
  color: white;

  @media screen and (max-width: 980px) {
    text-align: center;
  }
`;

const Button = styled.button`
  margin-top: 24px;
  height: 72px;
  min-width: 300px;
  font-size: 1.3em;
  border-radius: 50px;
  background-color: white;
`;

const Subtitle = styled.p`
  text-transform: uppercase;
  font-size: 24px;
  margin-top: 24px;
  color: white;
`;

const Section = styled.div`
  width: 100%;
  padding: 24px 0;
  min-height: 50vh;
  display: flex;
  background-color: ${({ color }) => color};
  color: ${({ text }) => text};

  @media only screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Roadmap = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: repeat-y;
  height: 100%;
`;

const SectionTitle = styled.h2``;
const Left = styled.div`
  margin: auto 48px;
`;
const Right = styled.div`
  margin: auto 48px;

  ul {
    padding-left: 52px;

    li {
      margin: 8px 0;
      font-weight: bolder;
    }
  }

  @media screen and (max-width: 960px) {
    ul {
      margin-left: 0px;
    }
  }
`;

function App() {
  const firstRef = useRef();

  return (
    <>
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
          <Subtitle>Roadmap</Subtitle>
          <img
            src={arrow}
            alt="down"
            style={{ marginTop: "24px" }}
            onClick={() => firstRef.current.scrollIntoView()}
          />
        </Overlay>
        <Roadmap>
          <Section ref={firstRef} color="rgba(254,254,135,.8)">
            <Left>
              <img src={logo} alt="logo" style={{ margin: "24px 0" }} />
            </Left>
            <Right>
              <SectionTitle>SET 0 - START UP</SectionTitle>
              <ul>
                <li>
                  SET 0 WILL LAUNCH TO FUND FUTURE SETS. I NEED MONEY TO PAY MY
                  DEVELOPERS AND TO LAUNCH A SMART CONTRACT ON ETH.
                </li>
                <li>
                  SET 1 WILL INCLUDE 672 VORTEX PETS AND EACH VORTEX PET WILL BE
                  LAZY MINTED. THERE WILL BE 4 RARITY FOR SET 0. THE ORDER FOR
                  THE RARITY IS SUPER RARE , LEGENDARY, TITAN , SHINY TITAN.
                </li>
                <li>
                  SET O WILL RELEASE IN 7 PARTS. EACH PART WILL RELEASE 96 PETS
                  AND AFTER ALL 96 PETS ARE SOLD THE NEXT PART WILL RELEASE ON
                  FLOOR PRICE. IM TRYING TO HAVE THE COMMUNITY TO DETERMINE THR
                  FLOOR. ALSO PART 1 WILL RELEASE AT 0 ETH.
                </li>
              </ul>
            </Right>
          </Section>
          <Section color="rgba(0,250,207,.8)">
            <Left>
              <img src={pet1} alt="logo" style={{ margin: "24px 0" }} />
            </Left>
            <Right>
              <SectionTitle>SET 1</SectionTitle>
              <ul>
                <li>672 VORTEX PET WILL BE RELEASED.</li>
                <li>3 DIFFERENT RARITYS</li>
                <li>3 Step NFT</li>
                <li>WHITELIST MEMBERS WILL RECEIVE A 25 DOLLARS DISCOUNT </li>
                <li>ALL WHITELIST MEMBERS WILL RECEIVE A VORTEX PASS</li>
                <li>
                  A VORTEX PASS WILL GIVE YOU ACCESS TO THE FEEDING BETA AND
                  BATTLING BETA
                </li>
                <li>
                  EVERY TIME A VORTEX PET IS SOLD A RANDOM VORTEX PASS HOLDER
                  WILL RECEIVE 10 PERCENT OF THR SALE{" "}
                </li>
              </ul>
            </Right>
          </Section>
          <Section color="rgba(238,119,118,.8)">
            <Left>
              <img src={pet2} alt="logo" style={{ margin: "24px 0" }} />
            </Left>
            <Right>
              <SectionTitle>SET 2</SectionTitle>
              <ul>
                <li>FEEDING AND EVOLVING WILL BE INTRODUCED TO VORTEX PETS </li>
                <li>672 VORTEX PET WILL BE RELEASED ON OPEN SEA. </li>
                <li>3 DIFFERENT RARITYS</li>
                <li>3 Step NFT</li>
                <li>WHITELIST MEMBERS WILL RECEIVE A 25 DOLLARS DISCOUNT </li>
                <li>ALL WHITELIST MEMBERS WILL RECEIVE A VORTEX PASS</li>
                <li>
                  A VORTEX PASS WILL GIVE YOU ACCESS TO THE FEEDING BETA AND
                  BATTLING BETA
                </li>
                <li>
                  EVERY TIME A VORTEX PET IS SOLD A VORTEX HOLDER WILL RECEIVE
                  MONEY BACK. MONEY RECEIVE BACK WILL BE DETERMINED ON RARITY
                </li>
              </ul>
            </Right>
          </Section>
          <Section color="rgba(0,0,0,.8)">
            <Left>
              <img src={pet3} alt="logo" style={{ margin: "24px 0" }} />
            </Left>
            <Right>
              <SectionTitle style={{ position: "relative", color: "white" }}>
                SET 3 WILL BE ANNOUNCED WHEN SET 2 IS Reeleased!
              </SectionTitle>
            </Right>
          </Section>
        </Roadmap>
      </Wrapper>
    </>
  );
}

export default App;
