export const EventPageList = ({
  imgUrl,
  date,
  eventsName,
  organizationName,
  locations,
}: {
  imgUrl: string;
  date: number;
  eventsName: string;
  organizationName: string;
  locations: string;
}) => {
  return (
    <>
      <article
        className="events-item"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          filter: "blur(0.5px)",
        }}
      >
        <a href="dev.kg">
          <div className="events-date">
            <span>
              <time dateTime="2024-06-10T12:30:00.000z">
                <span> {date} </span>
              </time>
            </span>
          </div>
          <div className="events-info">
            <div className="events-title">{eventsName}</div>

            <div className="events-mate">
              <div className="events-organizer">
                <span className="events-label">Организатор</span> <br />
                {organizationName}
              </div>

              <div className="events-locate">
                <span className="events-label">Локация</span>
                <address>{locations}</address>
              </div>
            </div>
          </div>
        </a>
      </article>
    </>
  );
};

