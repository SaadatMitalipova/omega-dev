// import logo from "../../assets/Images/logo.jpg";
export const VideoList = ({
  organization_name,
}: {
  organization_name: string;
}) => {
  return (
    <>
      <div className="video-block">
        <div className="main-block">
          <div className="first__block">
            <img src={""} alt="img" />
            <div className="first__block-title">
              <h2>
                {" "}
                ChatGPT — революция или мода? Как <br />
                нейросети могут помочь в работе
              </h2>
            </div>
            <br />
            <div className="first__block-organizer">
              <span>Организатор</span>

              <h3>{organization_name}</h3>
            </div>
            <div className="first__block-data">
              <span>Когда</span>
              <br />
              <h3>12 сентября 2023</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
