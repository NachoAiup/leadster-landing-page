import Image from "next/image";
import Logo from "../../assets/images/logo.png";
import {
  LogoDiv,
  LinksDiv,
  FooterColumn,
  FooterColumnTitle,
  FooterColumnLink,
  LogoPhrase,
} from "./Styles";

export default function Footer() {
  return (
    <footer>
      <LogoDiv>
        <Image src={Logo} height={40} alt="Leadster img logo" />
        <LogoPhrase>Transformando visitantes en clientes.</LogoPhrase>
      </LogoDiv>
      <LinksDiv>
        <FooterColumn>
          <FooterColumnTitle>Links Principais</FooterColumnTitle>
          <FooterColumnLink>Home</FooterColumnLink>
          <FooterColumnLink>Ferramenta</FooterColumnLink>
          <FooterColumnLink>Precos</FooterColumnLink>
          <FooterColumnLink>Contato</FooterColumnLink>
        </FooterColumn>
        <FooterColumn>
          <FooterColumnTitle>Cases</FooterColumnTitle>
          <FooterColumnLink>Geracao de Leads B2B</FooterColumnLink>
          <FooterColumnLink>Geracao de Leads em Software</FooterColumnLink>
          <FooterColumnLink>Geracao de Leads Imobiliaria</FooterColumnLink>
          <FooterColumnLink>Cases de Sucesso</FooterColumnLink>
        </FooterColumn>
        <FooterColumn>
          <FooterColumnTitle>Materiais</FooterColumnTitle>
          <FooterColumnLink>Blog</FooterColumnLink>
          <FooterColumnLink>Parceria com Agencias</FooterColumnLink>
          <FooterColumnLink>Guia Definitivo do Marketing</FooterColumnLink>
          <FooterColumnLink>Materiais Gratuitos</FooterColumnLink>
        </FooterColumn>
        <FooterColumn>
          <FooterColumnTitle>Siga a Leadster</FooterColumnTitle>
          <FooterColumnLink>E-mail: contato@leadster.com.br</FooterColumnLink>
          <FooterColumnLink>Telefone: xxx-xxxxx</FooterColumnLink>
        </FooterColumn>
      </LinksDiv>
    </footer>
  );
}
