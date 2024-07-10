export const OrganizationList = ({
    icon,
    name,
    jobs_count,
    events_count,
    meetups_count,
  }: {
    icon: string;
    name: string;
    jobs_count: number;
    events_count: number;
    meetups_count: number;
  }) => {
    return(
        <>
        <div className="organizations">
            <div className="organizations-logo-block">
              <div className="organizations-img">
                <img src={icon} alt="" />
              </div>
              <div className="organizations-logo">
                <h5>
                  Компания
                  <h4>{name}</h4>
                </h5>
              </div>
            </div>
            <div className="organizations-info">
              <div className="organizations-logo vacancies">
                <h5>Ваканции</h5>
                <h4>{jobs_count}</h4>
              </div>
              <div className="organizations-logo events">
                <h5>Мероприятия</h5>
                <h4>{events_count}</h4>
              </div>
              <div className="organizations-logo video">
                <h5>Видео</h5>
                <h4>{meetups_count}</h4>
              </div>
            </div>
          </div>
        </>
    )
}