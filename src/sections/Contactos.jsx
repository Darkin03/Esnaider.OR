import { useState } from "react";
import { CiInstagram, CiLinkedin, CiPhone, CiTwitter } from "react-icons/ci";
import webDeveloper from "../images/Calling_Flatline.svg";
import '../style/contacts.css'


export const Contacts = () => {
  const [active, setActive] = useState(false);
  const onMouseOver  = () => {
    setActive(true);
  };
  const onMouseOut = () => {
    setActive(false);
  };
  return (
    <section  className="contacts" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
       <div className="pintureContainer">
          <img src={webDeveloper} alt="webDeveloper" />
       </div>

       <div className="container">
          <div className="titleContainer">
            <h1 className={active ? "activeTitle" : ""}>Contactos</h1>
            <CiPhone id="icon" className={ active ? "activeIcon" : "inactiveIcon"}/>
          </div>
          
          <div className="contactList">
            <a className="link" href="https://www.linkedin.com/in/esnaideror/">
              <CiLinkedin className="icon"/>
            </a>
            
            <a className="link" href="">
              <CiInstagram className="icon"/>
            </a>

            <a className="link" href="">
              <CiTwitter className="icon"/>
            </a>
            
          </div>


       </div>
    </section>
  );
};
