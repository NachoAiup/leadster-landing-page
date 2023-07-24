import Image from "next/image";
import Logo from "../../assets/images/logo.png";
import Asset from "../../assets/images/asset-header.png";
import {
  LogoDiv,
  HeaderDiv,
  HeaderWrapper,
  HeaderButton,
  TopTitle,
  BottomTitle,
  BottomP,
} from "./Styles";

export default function Header() {
  return (
    <>
      <LogoDiv>
        <Image src={Logo} height={25} alt="Leadster img logo" />
      </LogoDiv>
      <HeaderDiv>
        <HeaderWrapper>
          <HeaderButton>WEBINARS EXCLUSIVOS</HeaderButton>
          <TopTitle>Menos Conversinha,</TopTitle>
          <BottomTitle>
            Mais Conversão
            <Image
              src={Asset}
              style={{ position: "absolute", right: "20px", top: "10px" }}
              alt="Asset of the title"
            />
          </BottomTitle>
          <BottomP>
            Conheça as estratégias que <strong>mudaram o jogo</strong> e como
            aplicá-las no seu negócio
          </BottomP>
        </HeaderWrapper>
      </HeaderDiv>
    </>
  );
}
