import Portflolio from '../images/Proyects/Portflolio.jpeg'
import WikiWatch from '../images/Proyects/Wikiwatch.jpeg'

export function ProyectsList(){
    return(
        <section className="proyects">
            <a href='https://github.com/Darkin03/Esnaider.OR' className="proyect">
                <div className="pintureContainer">
                    <img className="pinture" src={Portflolio}  />
                </div>
  
                <div className="content">
                    <h3 className="title">Portafolio</h3>
                    <p className="description">Portafolio donde está toda la información de mi</p>
                </div>
            </a>

            <a href='https://code-world-co.github.io/WikiWatch/' className="proyect">
                <div className="pintureContainer">
                    <img className="pinture" src={WikiWatch} />
                </div>

                <div className="content">
                    <h3 className="title">Portflolio</h3>
                    <p className="description">WikiPedia de peliculas y series</p>
                </div>
                </a>
        </section>
    )
}