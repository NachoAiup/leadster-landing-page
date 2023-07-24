import Image from "next/image";
import {
  VideoSectionWrapper,
  FiltersDiv,
  FiltersButtonsDiv,
  VideosButton,
  FiltersSelect,
  VideoDiv,
  VideoCard,
  VideoThumbnail,
  VideoOverlay,
  VideoPlayButton,
  FiltersSelectP,
  VideoCardP,
  Modal,
  ModalContent,
  CloseButton,
  ModalTitle,
} from "./Styles";
import { useEffect, useState } from "react";

interface Props {
  videos: VideoData[];
}

function VideosSection({ videos }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [videoInfo, setVideoInfo] = useState<VideoData | null>(null);
  const [category, setCategory] = useState("Futuro do Marketing");
  const [videosArr, setVideosArr] = useState(videos);

  useEffect(() => {
    if (category) {
      let filteredVideos = videos.filter(
        (video) => video.category === category
      );
      setVideosArr(filteredVideos);
    }
  }, [category, videos]);

  const handleModalOpen = (videoData: VideoData) => {
    setVideoInfo(videoData);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setVideoInfo(null);
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <VideoSectionWrapper>
      <FiltersDiv>
        <FiltersButtonsDiv>
          <VideosButton
            value="Futuro do Marketing"
            onClick={(e: any) => setCategory(e.target.value)}
            style={{
              background: category === "Futuro do Marketing" ? "#007dff" : "",
              color: category === "Futuro do Marketing" ? "white" : "",
              border: category === "Futuro do Marketing" ? "none" : "",
            }}
          >
            Futuro do Marketing
          </VideosButton>
          <VideosButton
            value="Solucao de problemas"
            onClick={(e: any) => setCategory(e.target.value)}
            style={{
              background: category === "Solucao de problemas" ? "#007dff" : "",
              color: category === "Solucao de problemas" ? "white" : "",
              border: category === "Solucao de problemas" ? "none" : "",
            }}
          >
            Solucao de problemas
          </VideosButton>
          <VideosButton
            value="Geracao de Leads"
            onClick={(e: any) => setCategory(e.target.value)}
            style={{
              background: category === "Geracao de Leads" ? "#007dff" : "",
              color: category === "Geracao de Leads" ? "white" : "",
              border: category === "Geracao de Leads" ? "none" : "",
            }}
          >
            Geracao de Leads
          </VideosButton>
          <VideosButton
            value="Midia Paga"
            onClick={(e: any) => setCategory(e.target.value)}
            style={{
              background: category === "Midia Paga" ? "#007dff" : "",
              color: category === "Midia Paga" ? "white" : "",
              border: category === "Midia Paga" ? "none" : "",
            }}
          >
            Midia Paga
          </VideosButton>
        </FiltersButtonsDiv>
        <FiltersSelectP>
          Ordenar por
          <FiltersSelect>
            <option value="value1">Data de publicacao</option>
          </FiltersSelect>
        </FiltersSelectP>
      </FiltersDiv>
      <VideoDiv>
        {videosArr.map((video) => (
          <VideoCard key={video.id} onClick={() => handleModalOpen(video)}>
            <VideoThumbnail>
              <VideoOverlay>
                <VideoPlayButton>►</VideoPlayButton>
              </VideoOverlay>
              <Image
                src={video.thumbnail}
                width={270}
                height={150}
                alt="Thumbnail of the video"
                style={{
                  zIndex: "-1",
                }}
              />
            </VideoThumbnail>
            <VideoCardP>{video.title}</VideoCardP>
          </VideoCard>
        ))}
        <Modal style={{ display: showModal ? "flex" : "none" }}>
          <ModalContent>
            <CloseButton onClick={handleModalClose}>&times;</CloseButton>
            <ModalTitle>{videoInfo?.title}</ModalTitle>
            <iframe width="420" height="315" src={videoInfo?.url}></iframe>
          </ModalContent>
        </Modal>
      </VideoDiv>
    </VideoSectionWrapper>
  );
}

export default VideosSection;
