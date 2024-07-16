import ourResurce from "../OurResources/our.png";

export const OurResources = ({
  data,

  }: { 
  data: any ;

}) => {
  return (
    <>
      <section data-v-a2ede7f6 className="block devkg">
        <section data-v-a2ede7f6 className="block devkg">
          <h4 data-v-a2ede7f6 className="title">
            Наши ресурсы в Telegram
          </h4>
          {data &&
            data.map((item: any, index: number) => (
              <a key={index} data-v-a2ede7f6 href={item.value} className="item">
                <img
                  className="icon icon-devkg"
                  src={ourResurce}
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

