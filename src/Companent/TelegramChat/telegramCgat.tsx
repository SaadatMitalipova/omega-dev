export const TelegramChat = ({ 
  data 
}: { 
  data: any 
}) => {
  return (
    <>
      <section data-v-a2ede className="block telegram_chats">
        <section data-v-a2ede7f6 className="block devkg">
          <h4 data-v-a2ede7f6 className="title">
            Телеграм чаты
          </h4>
          {data &&
            data.map((item: any, index: number) => (
              <a key={index} data-v-a2ede7f6 href={item.value} className="item">
                <img
                  className="icon icon-devkg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT72LJm5Em_1UXq5xStSgkCug4IDZAce62RJw&usqp=CAU"
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
