import { styled } from "styled-components";

export const GraphicSectionDiv = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 100px;
  background: #fbfbfd;
  height: 400px;
  padding: 20px 0px;
  position: relative;
  overflow: hidden;
`;

export const PhraseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 10px;
  z-index: 10;
`;

export const GraphicButton = styled.button`
  border: 2px solid #007dff;
  color: white;
  font-weight: 700;
  background: #007dff;
  font-size: 12px;
  padding: 15px;
  border-radius: 25px;
  letter-spacing: 0px;
  cursor: pointer;
  z-index: 10;
  &:hover {
    background: inherit;
    color: #007dff;
  }
`;

export const TopTitle = styled.p`
  font-size: 1rem;
  margin: 0px;
  margin-top: 10px;
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const BottomTitle = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin: 0px;
  width: 350px;
  text-align: left;
  position: relative;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 10;
`;

export const BackgroundShape = styled.div`
  position: absolute;
  height: 1022px;
  display: block;
  right: -100px;
  background-color: rgb(242, 249, 255) !important;
  left: 150px !important;
  transform: rotate(-43deg) !important;
  top: 200px !important;
  width: 870px !important;
  border-radius: 80px !important;
`;
