import "./Video.css";
import Footer from "../../Companent/Footer/Footer";
import Header from "../../Companent/Header/Header";
import useFetch from "../../hooks/useFetch";
import { VideoList } from "../../Companent/VideoList/VideoList";


function Video() {
  const { data, isLoading } = useFetch({
    API_URL: "http://3.38.98.134/meetups",
  });
  console.log("data: ", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div id="video">
        <div className="container">
          <div className="video">
            <div className="video-add">
              <button>Добавить видео</button>
            </div>
            <div className="video-title">
              <h1>Все видео</h1>
            </div>
            {/* <VideoList/> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Video;
