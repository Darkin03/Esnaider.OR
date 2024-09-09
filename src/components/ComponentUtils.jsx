import React, {useState} from 'react';

export const SectionContent = ({img, title, text, icon, children}) => {
    const [active, setActive] = useState(false);
    const handleMouseOver = () => {
        setActive(true);
    };
    const handleMouseOut = () => {
        setActive(false);
    };
    return (
        <div className="container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className={active ? "activeContent" : ""} id='content'>
                <div className='into'>
                    {img && (
                        <div className='pintureContainer'>
                            <img className="pinture" src={img} />
                        </div>
                    )}
                    <div className="titleContainer">
                        <h1 className='title'>{title}</h1>
                        
                        {icon}
                        
                    </div>
                </div>
                <p>{text}</p>
                {children}
            </div>
        </div>
    );
}

export const SectionContentLinks = ({img, title, text, icon, children}) => {
  const [active, setActive] = useState(false);
  const handleMouseOver = () => {
      setActive(true);
  };
  const handleMouseOut = () => {
      setActive(false);
  };
  return (
      <div className="container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <div className={active ? "active" : ""} id='content'>
             <div className='content'>
                <div className='pintureContainer'>
                {img && (
                        <div className='pintureContainer'>
                            <img className="pinture" src={img} />
                        </div>
                    )}
                </div>
                <div className='textContainer'>
                    <h1 className='title'>{title} <div>{icon}</div> </h1>
                    {children}
                </div>
             </div>
          </div>
      </div>
  );
}
  
  export const Item = ({icon,children})=>{
    const [active,setActive] = useState(false);
    const handleMouseOver = ()=>{
      setActive(true);
    }
    const handleMouseOut = ()=>{
      setActive(false);
    }
    return(
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className= {active? 'active':''}>
        <div className="item">
          {icon}{children}
        </div>
      </div>
    )
  }

