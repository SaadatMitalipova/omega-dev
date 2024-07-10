import Footer from "../../Companent/Footer/Footer";
import Header from "../../Companent/Header/Header";
import { OrganizationList } from "../../Companent/OrganizationList/OrganizationList";
import useFetch from "../../hooks/useFetch";
import "../Organizations/Organizations.css";

function Organizations() {
  const { data, isLoading } = useFetch({
    API_URL: "http://3.38.98.134/organizations",
  });
  // console.log("data: ", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <div id="organizations">
        <div className="container">
          {data &&
            data.map((item: any) => (
              <OrganizationList
                icon={item?.icon}
                name={item?.name}
                jobs_count={item?.jobs_count}
                events_count={item?.events_count}
                meetups_count={item?.meetups_count}
              />
            ))}{" "}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Organizations;
