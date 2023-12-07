const ServiciosPage = (props) => {
    return (
        <>
        <div>
            <div className="image-section">
                <img src="./img/interna-ap-2.jpg" alt="Imagen de Apertura" />
                <h1>SERVICIOS</h1>
            </div>
            <div className="breadcrumb">
                <a href="./index.html">Inicio</a> &gt;
                <span>servicios</span>
            </div>

            <div className="sectionApertura">
                <h2>Servicios de Transporte</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum similique
                    quibusdam nesciunt ut? Repellat illo rem libero sequi voluptate aspernatur ullam
                    sunt est cum velit, eligendi iste, iure alias! Illum!
                </p>
            </div>

            {/* Repetir este bloque para cada fila */}
            <div className="servicios">
                <img src="./img/trasporte1.png" alt="titulo transporte1" />
                <div className="info">
                    <h3>titulo transporte1</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut aut
                        blanditiis quod reiciendis tempore itaque atque qui earum beatae officiis
                        similique, labore inventore, provident ad doloremque, omnis quaerat
                        architecto.
                    </p>
                </div>
            </div>

            {/* Repetir este bloque para cada fila */}
            <div className="servicios">
                <img src="./img/trasporte2.png" alt="titulo transporte2" />
                <div className="info">
                    <h3>titulo transporte2</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut aut
                        blanditiis quod reiciendis tempore itaque atque qui earum beatae officiis
                        similique, labore inventore, provident ad doloremque, omnis quaerat
                        architecto.
                    </p>
                </div>
            </div>

            {/* Repetir este bloque para cada fila */}
            <div className="servicios">
                <img src="./img/trasporte3.png" alt="titulo transporte3" />
                <div className="info">
                    <h3>titulo transporte3</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut aut
                        blanditiis quod reiciendis tempore itaque atque qui earum beatae officiis
                        similique, labore inventore, provident ad doloremque, omnis quaerat
                        architecto.
                    </p>
                </div>
            </div>

            {/* Repetir este bloque para cada fila */}
            <div className="servicios">
                <img src="./img/trasporte4.png" alt="titulo transporte4" />
                <div className="info">
                    <h3>titulo transporte4</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut aut
                        blanditiis quod reiciendis tempore itaque atque qui earum beatae officiis
                        similique, labore inventore, provident ad doloremque, omnis quaerat
                        architecto.
                    </p>
                </div>
            </div>
        </div>
        </>
        
        
        );
    }
    
    export default ServiciosPage; 