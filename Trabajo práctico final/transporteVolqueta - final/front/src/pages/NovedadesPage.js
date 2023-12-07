import { useState,useEffect } from "react";
import axios from 'axios';
import NovedadItem from "../components/novedades/NovedadItem";

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    },[]);

    return (
        
        <section className="holder">
            <h2>Novedades</h2>
            { loading ? (
                <p>Cargando...</p>
            ) : (
                novedades.map(item => <NovedadItem key = {item.id}
                title={item.titulo} subtitle={item.subtitulo} 
                imagen={item.imagen} body={item.cuerpo} />)
            )
            }
            </section>
    )
            
        };
   

/*
    return (
        <>
        <div>
            <div className="image-section">
                <img src="./img/interna-ap-2.jpg" alt="Imagen de Apertura" />
                <h1>NOVEDADES</h1>
            </div>
            <div className="breadcrumb">
                <a href="./index.html">Inicio</a> &gt;
                <span>Novedades</span>
            </div>

            <div className="sectionApertura">
                <h2>Novedades de Transporte</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum similique
                    quibusdam nesciunt ut? Repellat illo rem libero sequi voluptate aspernatur ullam
                    sunt est cum velit, eligendi iste, iure alias! Illum!
                </p>
            </div>

            {/* Repetir este bloque para cada fila }
            <div className="novedades">
                <h2>TITULO 1</h2>
                <div className="info">
                    <h3>subtitulo</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut aut
                        blanditiis quod reiciendis tempore itaque atque qui earum beatae officiis
                        similique, labore inventore, provident ad doloremque, omnis quaerat
                        architecto.
                    </p>
                    <hr />
                </div>
            </div>

            { /*Repetir este bloque para cada fila }
            <div className="novedades">
                <h2>TITULO 2</h2>
                <div className="info">
                    <h3>subtitulo</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut aut
                        blanditiis quod reiciendis tempore itaque atque qui earum beatae officiis
                        similique, labore inventore, provident ad doloremque, omnis quaerat
                        architecto.
                    </p>
                    <hr />
                </div>
            </div>

            { /*Repetir este bloque para cada fila }
            <div className="novedades">
                <h2>TITULO 3</h2>
                <div className="info">
                    <h3>subtitulo</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut aut
                        blanditiis quod reiciendis tempore itaque atque qui earum beatae officiis
                        similique, labore inventore, provident ad doloremque, omnis quaerat
                        architecto.
                    </p>
                    <hr />
                </div>
            </div>

            { /*Repetir este bloque para cada fila }
            <div className="novedades">
                <h2>TITULO 4</h2>
                <div className="info">
                    <h3>subtitulo</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut aut
                        blanditiis quod reiciendis tempore itaque atque qui earum beatae officiis
                        similique, labore inventore, provident ad doloremque, omnis quaerat
                        architecto.
                    </p>
                    <hr />
                </div>
            </div>
        </div>
        </>
        
        
        );
    }
    */
    export default NovedadesPage; 