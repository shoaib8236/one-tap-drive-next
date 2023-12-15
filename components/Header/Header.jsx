import Image from "next/image";
import cl from "./header.module.scss";

const Header = () => {
  return (
    <header className={cl.layout}>
      <div className={`content_wrap`}>
        <div className={cl.top_content}>
          <div className={cl.logo}>
            <Image
              height={26.09}
              width={180}
              src={"/logo.png"}
              layout="responsive"
            />
          </div>
          <div className={cl.links_container}>
            <ul>
              <li>
                <a href="">Rent A Car</a>
                <ul className={cl.dropdown}>
                  <li>
                    <a href="">Dubai</a>                 
                      <ul className={cl.sub_dropdown}>
                        <li>
                        <a href="">Airport transfer</a>
                        </li>
                        <li>
                        <a href="">Hourly base</a>
                        </li>
                      </ul>
                    
                  </li>
                  <li>
                    <a href="">Abu Dhabi</a>
                   
                      <ul className={cl.sub_dropdown}>
                        <li>
                        <a href="">Airport transfer</a>
                        </li>
                        <li>
                        <a href="">Hourly base</a>
                        </li>
                      </ul>
                    
                  </li>
                  <li>
                    <a href="">Al ain</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Car brand</a>
                <ul className={cl.dropdown}>
                  <li>
                    <a href="">Dubai</a>                 
                      <ul className={cl.sub_dropdown}>
                        <li>
                        <a href="">Airport transfer</a>
                        </li>
                        <li>
                        <a href="">Hourly base</a>
                        </li>
                      </ul>
                    
                  </li>
                  <li>
                    <a href="">Abu Dhabi</a>
                   
                      <ul className={cl.sub_dropdown}>
                        <li>
                        <a href="">Airport transfer</a>
                        </li>
                        <li>
                        <a href="">Hourly base</a>
                        </li>
                      </ul>
                    
                  </li>
                  <li>
                    <a href="">Al ain</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Car with driver</a>
                <ul className={cl.dropdown}>
                  <li>
                    <a href="">Dubai</a>                 
                      <ul className={cl.sub_dropdown}>
                        <li>
                        <a href="">Airport transfer</a>
                        </li>
                        <li>
                        <a href="">Hourly base</a>
                        </li>
                      </ul>
                    
                  </li>
                  <li>
                    <a href="">Abu Dhabi</a>
                   
                      <ul className={cl.sub_dropdown}>
                        <li>
                        <a href="">Airport transfer</a>
                        </li>
                        <li>
                        <a href="">Hourly base</a>
                        </li>
                      </ul>
                    
                  </li>
                  <li>
                    <a href="">Al ain</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
