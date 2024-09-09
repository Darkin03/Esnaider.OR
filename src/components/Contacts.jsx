import { Item, SectionContentLinks } from "./ComponentUtils";
import { CiInstagram, CiLinkedin, CiPhone, CiTwitter } from "react-icons/ci";
import webDeveloper from "../images/CallingFlatline.webp";
import '../style/contacts.css'
import { NavLink } from "./LinksShorts";



export function Contacts (){
  return (
    <SectionContentLinks
      img={webDeveloper}
      title="Contactos"
      icon={<CiPhone  className="icon"/>}
    >

      <NavLink fontsize={'65px'} color={'red'} > 
        <Item>
          <a  target="_blank" href="https://www.linkedin.com/in/esnaideror/"><CiLinkedin className="icon"/></a>
        </Item>

        <Item>
          <a  target="_blank" href="https://www.instagram.com/esnaider.or/"><CiInstagram className="icon"/></a>
        </Item>

        <Item>
          <a  target="_blank" href="https://twitter.com/SnaiderOrtega10"><CiTwitter className="icon"/></a>
        </Item>
      </NavLink>
    </SectionContentLinks>
  );
};
