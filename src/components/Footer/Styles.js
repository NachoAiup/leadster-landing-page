import { styled } from "styled-components";

export const LogoDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 25px 0px;
`;

export const LinksDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 100px;
  margin: 30px 0px;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const FooterColumnTitle = styled.p`
  font-weight: 700;
  color: #2c3e50;
  font-size: 15px;
`;

export const FooterColumnLink = styled.p`
  color: #7882a0;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const LogoPhrase = styled.p`
  font-size: 10px;
`;
