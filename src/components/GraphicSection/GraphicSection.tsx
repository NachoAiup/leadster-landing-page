import Image from "next/image";
import Graphic from "../../assets/images/graphic.png";
import Selo from "../../assets/images/selo_RD.png";
import {
  GraphicSectionDiv,
  PhraseWrapper,
  GraphicButton,
  TopTitle,
  BottomTitle,
  ButtonDiv,
  BackgroundShape,
} from "./Styles";

export default function GraphicSection() {
  return (
    <GraphicSectionDiv>
      <BackgroundShape></BackgroundShape>
      <Image
        src={Graphic}
        height={400}
        style={{ zIndex: "10" }}
        alt="Asset of the title"
      />
      <PhraseWrapper>
        <TopTitle>Pronto para triplicar sua</TopTitle>
        <BottomTitle>Geracao de Leads?</BottomTitle>
        <ButtonDiv>
          <GraphicButton>VER DEMONSTRACAO</GraphicButton>
          <Image src={Selo} height={40} alt="Asset of the title" />
        </ButtonDiv>
      </PhraseWrapper>
    </GraphicSectionDiv>
  );
}
