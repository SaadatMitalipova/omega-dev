export const JobList = ({
  imgUrl,
  organization_name,
  companyRole,
  salary,
  jobType,
}: {
  imgUrl: string;
  organization_name: string;
  companyRole: string;
  salary: string;
  jobType: string;
}) => {
  return (
    <div className="jobs-list" data-v-3fc4231a>
      <a
        href="/ru/jobs/hr-menedzher-validon-agency-14277"
        className="link"
        data-v-0cfa5cf6
      >
        <div className="jobs-item content" data-v-6dc437e8 data-v-0cfa5cf6>
          <div className="jobs-item-field icon" data-v-6dc437e8>
            <div
              className="preview image contain white image"
              data-v-7ad410c8
              data-v-6dc437e8
            >
              <picture data-v-7ad410c8>
                <img
                  src={imgUrl}
                  alt=""
                  data-v-7ad410c8
                />
              </picture>
            </div>
          </div>
          <div className="information" data-v-6dc437e8>
            <div className="jobs-item-field company" data-v-6dc437e8>
              <span className="label" data-v-6dc437e8>
                Компания
              </span>
              {organization_name}
            </div>
            <div className="jobs-item-field position" data-v-6dc437e8>
              <span className="label" data-v-6dc437e8>
                Должность
              </span>
              {companyRole}
            </div>
            <div className="jobs-item-field price" data-v-6dc437e8>
              <span className="label" data-v-6dc437e8>
                Оклад
              </span>
              {salary}
            </div>
            <div className="jobs-item-field type" data-v-6dc437e8>
              <span className="label" data-v-6dc437e8>
                Тип
              </span>
              {jobType}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
