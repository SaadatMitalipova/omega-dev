import youTube from "../YouTubeList/youTube.png";

export const YouTubeList = ({ data }: { data: any }) => {
  return (
    <>
      <section data-v-a2ede7f6 className="block youtube">
        <section data-v-a2ede7f6 className="block devkg">
          <h4 data-v-a2ede7f6 className="title">
            YouTube
          </h4>
          {data &&
            data.map((item: any, index: number) => (
              <a key={index} data-v-a2ede7f6 href={item.value} className="item">
                <img
                  className="icon icon-devkg"
                  src={youTube}
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
