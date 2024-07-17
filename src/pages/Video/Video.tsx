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
            <div className="filter" data-v-6a5c720c>
              <button
                className="add-vacancies create-list green"
                data-v-3fc4231a
                data-v-6a5c720c
              >
                Добавить вакансию
              </button>
            </div>
            <div className="video-title">
              <h1 className="video-title">Все видео</h1>
            </div>
            <div className="meetups-content">
              {data &&
                data.map((item: any, index: number) => (
                  <VideoList
                    key={index}
                    organization_name={item?.organization_name}
                    title={item?.title}
                    date={item?.date}
                    cover={item?.cover}
                  />
                ))}{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Video;
