import Footer from "../../Companent/Footer/Footer";
import Header from "../../Companent/Header/Header";
import Automotion from "./Automation/automation";
import Awards from "./Awards/awards";
import Battle from "./Battle/battle";
import Expo from "./Expo/expo";
import Kitforum from "./KitForum/kitforum";
import Sql from "./SQL/sql";
import useFetch from "../../hooks/useFetch";

import "./Events.css";

function Events() {
  const { data, isLoading } = useFetch({
    url: "http://3.34.200.34/events",
  });
  return (
    <>
      <Header />
      <div id="events">
        <div className="container">
          <div className="events">
            <div className="events__button">
              <button>Добавить мероприятие</button>
            </div>
          </div>
        </div>
      </div>
      <Sql />
      <Automotion />
      <Battle />
      <Kitforum />
      <Awards />
      <Expo />
      <Footer />
    </>
  );
}
export default Events;