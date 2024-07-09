import logo from "../../assets/Images/logo.jpg";
export const VideoList = ({
  organization_name,
  title,
  date,
  cover,
}: {
  organization_name: string;
  title: string;
  date: number;
  cover: any;
}) => {
  return (
    <>
      <div className="meetups-page-items">
        <article className="meetups-wrapper item">
          <a
            href="/ru/meetups/chatgpt-revolyuciya-ili-moda-kak-neyroseti-mogut-pomoch-v-rabote-kolesa-group-138"
            className="meetups-item"
          >
            <div className="preview dark image">
              <picture>
                <img src={cover} alt="" />
              </picture>
            </div>
            <div className="meta">
              <div data-v-4ff14bbb className="title">{title}</div>
              <div className="meetups-info">
                <div className="organizer">
                  <span className="label">Организатор</span>
                  {organization_name}
                </div>
                <div className="date">
                  <span className="label">Когда</span>
                  <time dateTime="2023-09-12T06:10:05.6742">{date}</time>
                </div>
              </div>
            </div>
          </a>
        </article>
      </div>
    </>
  );
};