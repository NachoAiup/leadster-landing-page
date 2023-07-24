import { styled } from "styled-components";

export const LogoDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 25px 0px;
`;

export const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #f2f9ff;
  height: 400px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderButton = styled.button`
  border: 2px solid #007dff;
  color: #007dff;
  font-weight: 700;
  background: inherit;
  font-size: 12px;
  padding: 5px 15px;
  border-radius: 25px 25px 25px 5px;
  letter-spacing: 0px;
  cursor: pointer;
  &:hover {
    background: #007dff;
    color: white;
  }
`;

export const TopTitle = styled.p`
  font-size: 1rem;
  margin: 0px;
  margin-top: 10px;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const BottomTitle = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: #007dff;
  margin: 0px;
  position: relative;
  padding: 0px 40px 10px 40px;
  border-bottom: 1px solid lightgray;
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

export const BottomP = styled.p`
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;
