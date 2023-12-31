import Head from "next/head";
import Header from "@/components/Header/Header";
import VideosSection from "@/components/VideosSection/VideosSection";
import GraphicSection from "@/components/GraphicSection/GraphicSection";
import Footer from "@/components/Footer/Footer";
import api from "./api/api";

interface Props {
  videos: VideoData[];
}

export default function Home({ videos }: Props) {
  return (
    <>
      <Head>
        <title>Leadster Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <VideosSection videos={videos} />
      <GraphicSection />
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const videos = await api.list();
  return {
    props: {
      videos,
    },
  };
};
