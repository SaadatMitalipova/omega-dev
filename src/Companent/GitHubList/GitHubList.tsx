import gitHub from "../GitHubList/Снимок экрана от 2024-07-16 14-14-13.png";

export const GitHubList = ({
  data,

  }: { 
  data: any ;

})=> {
  return (
    <>
      <section data-v-a2ede7f6 className="block github">
        <section data-v-a2ede7f6 className="block devkg">
          <h4 data-v-a2ede7f6 className="title">
            GitHub
          </h4>
          {data &&
            data.map((item: any, index: number) => (
              <a key={index} data-v-a2ede7f6 href={item.value} className="item">
                <img
                  className="icon icon-devkg"
                  src={gitHub}
                  alt=""
                />
                {item.label}
              </a>
            ))}
        </section>
      </section>
    </>
  );
};
