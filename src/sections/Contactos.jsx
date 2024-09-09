
import { useState } from "react";
import { CiInstagram, CiLinkedin, CiPhone, CiTwitter } from "react-icons/ci";
import webDeveloper from "../images/Calling_Flatline.svg";
import '../style/contacts.css'
import { SectionContent } from "../components/utils";
import { NavLink } from "../components/Enlace";
import { Item } from "../components/utils";

export function Contacts (){
  return (
    <SectionContent
      img={webDeveloper}
      title="Contactos"
      icon={<CiPhone  className="icon"/>}
    >

      <NavLink fontsize={'75px'} color={'red'} > 
          <Item icon={<CiLinkedin className="icon"/>}>
            <a  target="_blank" href="https://www.linkedin.com/in/esnaideror/"></a>
          </Item>
         
          <Item icon={<CiInstagram className="icon"/>}>
            <a  target="_blank" href="https://www.linkedin.com/in/esnaideror/"></a>
          </Item>
         
          <Item icon={<CiTwitter className="icon"/>}>
            <a  target="_blank" href="https://www.linkedin.com/in/esnaideror/"></a>
          </Item>
         
      </NavLink>
    </SectionContent>
  );
};
