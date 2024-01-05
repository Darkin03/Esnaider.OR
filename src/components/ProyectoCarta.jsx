// components/ProyectoCarta.js


export const ProyectoCarta = (props) => {
  return (
    <a href={props.link} className="proyect">
      <div className="pintureContainer">
        <img className="pinture" src={props.pinture} alt={props.name} />
      </div>

      <div className="content">
        <h3 className="title">{props.name}</h3>
        <p className="description">{props.description}</p>
      </div>
    </a>
  );
};

