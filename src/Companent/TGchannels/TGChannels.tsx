export const TGChannels = ({ data }: { data: any }) => {
  return (
    <>
      <section data-v-a2ede7f6 className="block telegram_channels">
        <section data-v-a2ede7f6 className="block devkg">
          <h4 data-v-a2ede7f6 className="title">
            Телеграм каналы
          </h4>
          {data &&
            data.map((item: any, index: number) => (
              <a key={index} data-v-a2ede7f6 href={item.value} className="item">
                <img
                  className="icon icon-devkg"
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQEtalW1cKJ9RWV35Z-S-mWrTlLnvmvGwg14GugfeHSYzoxYr5U"
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
