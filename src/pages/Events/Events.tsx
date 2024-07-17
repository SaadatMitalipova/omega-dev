import Footer from "../../Companent/Footer/Footer";
import Header from "../../Companent/Header/Header";
import "./Events.css";
import useFetch from "../../hooks/useFetch";
import { EventPageList } from "../../Companent/EventPageList/EventPageList";

function Events() {
  const { data, isLoading } = useFetch({
    API_URL: "http://3.38.98.134/events",
  });
  // console.log("data: ", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div id="events">
        <div className="container">
          <div className="events">
            <div className="events__button">
              <button>Добавить мероприятие</button>
            </div>

            {data &&
              data.map((item: any, index: number) => (
                <EventPageList
                  key={index}
                  imgUrl={item?.cover}
                  date={item?.date}
                  eventsName={item?.name}
                  organizationName={item?.organization_name}
                  locations={item?.location}
                />
              ))}
          </div>
          <div className="btns">
            <button className="btn previous">Предыдующая страница</button>
            <button className="btn next">Cледующая страница</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Events;
