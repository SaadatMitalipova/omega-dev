import { Link } from "react-router-dom";
import Footer from "../../Companent/Footer/Footer";
import Header from "../../Companent/Header/Header";
import "./Vacancies.css";
import useFetch from "../../hooks/useFetch";
import { JobList } from "../../Companent/JobList/JobList";

function Vacancies() {
  const { data, isLoading } = useFetch({
    API_URL: "http://3.38.98.134/jobs",
  });
  // console.log("data: ", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div id="vacancies">
        <div className="container">
          <div className="vacancies">
            <div className="vacancies__content">
              <div className="filter" data-v-6a5c720c>
                <Link to={"/"}>
                  <button
                    className="add-vacancies create-list green"
                    data-v-3fc4231a
                    data-v-6a5c720c
                  >
                    Добавить вакансию
                  </button>
                </Link>
              </div>

              {data &&
                data.map((item: any) => (
                  <JobList
                    organization_name={item?.organizatiom_name}
                    companyRole={item?.position}
                    salary={`${item?.price_from} - ${item?.price_to} ${item?.current} ${item?.salary}`}
                    jobType={item?.jobType}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Vacancies;
