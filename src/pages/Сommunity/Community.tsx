import { useEffect, useState } from "react";
import { FacebookList } from "../../Companent/FacebookList/FacebookList";
import Footer from "../../Companent/Footer/Footer";
import { GitHubList } from "../../Companent/GitHubList/GitHubList";
import Header from "../../Companent/Header/Header";
import { OurResources } from "../../Companent/OurResources/OurResources";
import { TelegramChat } from "../../Companent/TelegramChat/telegramCgat";
import { TGChannels } from "../../Companent/TGchannels/TGChannels";
import { Websites } from "../../Companent/WebSites/WebSites";
import { YouTubeList } from "../../Companent/YouTubeList/YouTubeList";
import useFetch from "../../hooks/useFetch";
import "../Сommunity/Community.css";

function Community() {
  const { data, isLoading } = useFetch({
    API_URL: "http://3.38.98.134/community",
  });
  const [telegram, setTelegram] = useState([]);
  const [telegramChat, setTelegramChat] = useState([]);
  const [tgChannels, setTGChannels] = useState([]);
  const [webSites, setWebSites] = useState([]);
  const [facebook, setFacebook] = useState([]);
  const [youtube, setYouTube] = useState([]);
  const [gitHub, setGitHub] = useState([]);

  useEffect(() => {
    if (isLoading === false) {
      setTelegramChat(data[0]?.devkg);
      setTelegram(data[0]?.telegram_chats);
      setTGChannels(data[0]?.telegram_channels);
      setWebSites(data[0]?.websites);
      setFacebook(data[0]?.facebook);
      setYouTube(data[0]?.youtube);
      setGitHub(data[0]?.github);
      // console.log("data");
    }
  }, [isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div id="community">
        <Header />
        <div id="community">
          <div className="container">
            <div className="community">
              <div data-v-a2ede7f6 className="community-main content">
                <div data-v-a2ede7f6 className="heading">
                  <div data-v-a2ede7f6 className="description">
                    Если хотите добавить что либо или удалить, отправьте Pull
                    Request или создайте Issue в репозитории.
                  </div>
                  <button data-v-a2ede7f6 className="button green">
                    Перейти
                  </button>
                </div>
                <aside data-v-a2ede7f6 className="share-box"></aside>
                <OurResources data={telegram} />
                <TelegramChat data={telegramChat} />
                <TGChannels data={tgChannels} />
                <Websites data={webSites} />
                <FacebookList data={facebook} />
                <YouTubeList data={youtube} />
                <GitHubList data={gitHub} />
                <div data-v-a2ede7f6 className="padding-top"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Community;
