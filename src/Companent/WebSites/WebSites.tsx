import webLogo from "../WebSites/webSites.png"

export const WebSites = ({
    data,
}: {
    data: any,
    
}) => {
    return(
    <>
      <section data-v-a2ede7f6 className="block websites">
        <section data-v-a2ede7f6 className="block devkg">
          <h4 data-v-a2ede7f6 className="title">
              Веб-сайты
          </h4>
           {data && data.map((item: any, index: number) => (
              <a key={index} data-v-a2ede7f6 href={item.value} className="item">
                  <img className="icon icon-devkg"
                      src={webLogo}
                      alt=""
                  />
                  {item.label}
              </a>
           ))}
        </section>
       </section>
    </>
    )
}