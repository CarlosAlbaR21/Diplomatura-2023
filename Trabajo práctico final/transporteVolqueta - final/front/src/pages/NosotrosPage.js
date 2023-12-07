const NosotrosPage = (props) => {
    return (
        <>
        <div>
            <div className="image-section">
                <img src="./img/interna-ap-2.jpg" alt="Imagen de Apertura" />
                <h1>NOSOTROS</h1>
            </div>
            <div className="breadcrumb">
                <a href="./index.html">Inicio</a> &gt;
                <span>Nosotros</span>
            </div>

            <div className="sectionApertura">
                <h2>SAM-SAN Tu Compañía de Transporte</h2>
                <p>
                    Contamos con más de 25 años en obras de construcción, SAM-SAN sobresale como
                    experta en transporte de materiales. Nuestra posición de liderazgo se cimenta
                    en una historia de excelencia, ofreciendo soluciones de transporte confiables y
                    eficientes. Confía en nosotros para llevar adelante tus proyectos con la
                    experiencia que solo décadas en el sector pueden ofrecer. Contamos con una
                    flota moderna de volquetas y vehículos especializados que cumplen con los más
                    altos estándares de seguridad y rendimiento. Nuestro compromiso es brindar un
                    servicio de calidad que supere las expectativas de nuestros clientes en cada
                    proyecto.
                </p>
                <p>
                    Desde proyectos modestos hasta megaobras, en SAM-SAN nos comprometemos a atender
                    todas las demandas de transporte de materiales en la industria de la construcción.
                    Deposita tu confianza en nosotros para una entrega precisa y segura de tus
                    materiales, sin importar la magnitud del proyecto. Nuestra experiencia y enfoque
                    meticuloso garantizan resultados superiores en cada paso del camino.
                </p>
            </div>

            {/* Repetir este bloque para cada columna */}
            <div className="mi-div">
                <div className="row text-center">
                    <div className="col" id="tarjeta1">
                        <img src="./img/usuario1.png" alt="Usuario 1" />
                        <h2>titulo 1</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut aut
                            blanditiis quod reiciendis tempore itaque atque qui earum beatae officiis
                            similique, labore inventore, provident ad doloremque, omnis quaerat
                            architecto.
                        </p>
                    </div>
                    {/* Repetir este bloque para cada columna */}
                    <div className="col" id="tarjeta2">
                        <img src="./img/usuario2.png" alt="Usuario 2" />
                        <h2>titulo 2</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut aut
                            blanditiis quod reiciendis tempore itaque atque qui earum beatae officiis
                            similique, labore inventore, provident ad doloremque, omnis quaerat
                            architecto.
                        </p>
                    </div>
                    {/* Repetir este bloque para cada columna */}
                    <div className="col" id="tarjeta3">
                        <img src="./img/usuario3.png" alt="Usuario 3" />
                        <h2>titulo 3</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut aut
                            blanditiis quod reiciendis tempore itaque atque qui earum beatae officiis
                            similique, labore inventore, provident ad doloremque, omnis quaerat
                            architecto.
                        </p>
                    </div>
                    {/* Repetir este bloque para cada columna */}
                    <div className="col" id="tarjeta4">
                        <img src="./img/usuario4.png" alt="Usuario 4" />
                        <h2>titulo 4</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut aut
                            blanditiis quod reiciendis tempore itaque atque qui earum beatae officiis
                            similique, labore inventore, provident ad doloremque, omnis quaerat
                            architecto.
                        </p>
                    </div>
                    {/* Repetir este bloque para cada columna */}
                    <div className="col" id="tarjeta5">
                        <img src="./img/usuario5.png" alt="Usuario 5" />
                        <h2>titulo 5</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut aut
                            blanditiis quod reiciendis tempore itaque atque qui earum beatae officiis
                            similique, labore inventore, provident ad doloremque, omnis quaerat
                            architecto.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
        
        
        );
    }
    
    export default NosotrosPage; 