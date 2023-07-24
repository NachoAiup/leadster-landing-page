import { styled } from "styled-components";

export const VideoCard = styled.div`
  width: 270px;
  font-size: 0.8rem;
  box-shadow: 0px 22px 34px -19px rgba(184, 182, 184, 1);
  border-radius: 15px;
  cursor: pointer;
  &:hover div {
    opacity: 1;
  }
  &:hover p {
    color: #007dff;
  }
`;

export const VideoCardP = styled.p`
  font-weight: 700;
  padding: 5px 15px;
`;

export const VideoDiv = styled.div`
  max-width: 850px;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
  padding: 40px 0px;
  border-radius: 15px;
`;

export const VideoSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  margin-top: 50px;
  gap: 10px;
  border-radius: 15px;
`;

export const VideosButton = styled.button`
  border: 1px solid #4b5576;
  color: #4b5576;
  font-weight: 700;
  background: inherit;
  font-size: 12px;
  padding: 8px 15px;
  letter-spacing: 0px;
  cursor: pointer;
  border-radius: 15px;
  &:hover {
    color: #007dff;
    border: 1px solid #007dff;
  }
  &:active {
    background: #007dff;
    color: white;
  }
`;

export const FiltersButtonsDiv = styled.div`
  display: flex;
  gap: 10px;
`;

export const FiltersDiv = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 850px;
  align-items: center;
  gap: 20px;
`;

export const FiltersSelectP = styled.p`
  font-size: 12px;
  font-weight: 700;
`;

export const FiltersSelect = styled.select`
  font-size: 12px;
  margin-left: 8px;
  padding: 5px;
  border-radius: 10px;
  font-family: inherit;
  color: black;
`;

export const VideoThumbnail = styled.div`
  position: relative;
  border-radius: 15px;
`;

export const VideoOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 3;
  opacity: 0;
  background: #007dff6e;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px 15px 0px 0px;
  &:hover {
    opacity: 1;
  }
`;

export const VideoPlayButton = styled.div`
  &:hover {
    opacity: 1;
  }
`;

export const Modal = styled.div`
  display: none;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: 420px;
`;

export const CloseButton = styled.button`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  background: transparent;
  cursor: pointer;
  margin-bottom: 10px;
  border: none;
  padding: 0px;
`;

export const ModalTitle = styled.p`
  font-weight: 700;
  text-align: center;
`;
