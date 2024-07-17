import facebook from "../FacebookList/facebook.png";

export const FacebookList = ({ data }: { data: any }) => {
  return (
    <>
      <section data-v-a2ede7f6 className="block facebook">
        <section data-v-a2ede7f6 className="block devkg">
          <h4 data-v-a2ede7f6 className="title">
            Facebook
          </h4>
          {data &&
            data.map((item: any, index: number) => (
              <a key={index} data-v-a2ede7f6 href={item.value} className="item">
                <img
                  className="icon icon-devkg"
                  src={facebook}
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
