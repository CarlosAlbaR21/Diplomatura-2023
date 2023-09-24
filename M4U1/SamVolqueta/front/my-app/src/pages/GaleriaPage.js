const GaleriaPage = (props) => {
    return (
        <>
        <div>
            <div className="image-section">
                <img src="./img/interna-ap-2.jpg" alt="Imagen de Apertura" />
                <h1>GALERIA</h1>
            </div>
            <div className="breadcrumb">
                <a href="./index.html">Inicio</a> &gt;
                <span>Galeria</span>
            </div>

            <div className="sectionApertura">
                <h2>Galeria de Transporte</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum similique
                    quibusdam nesciunt ut? Repellat illo rem libero sequi voluptate aspernatur ullam
                    sunt est cum velit, eligendi iste, iure alias! Illum!
                </p>
            </div>

            {/* Repetir este bloque para cada imagen de la galería */}
            <div className="galeria">
                <img src="./img/trasporte1.png" alt="descripcion" />
                {/* Repetir este bloque para cada imagen de la galería */}
                <img src="./img/trasporte1.png" alt="descripcion" />
                {/* Repetir este bloque para cada imagen de la galería */}
                <img src="./img/trasporte1.png" alt="descripcion" />
                {/* Repetir este bloque para cada imagen de la galería */}
                <img src="./img/trasporte1.png" alt="descripcion" />
                {/* Repetir este bloque para cada imagen de la galería */}
                <img src="./img/trasporte1.png" alt="descripcion" />
                {/* Repetir este bloque para cada imagen de la galería */}
                <img src="./img/trasporte1.png" alt="descripcion" />
                {/* Repetir este bloque para cada imagen de la galería */}
                <img src="./img/trasporte1.png" alt="descripcion" />
                {/* Repetir este bloque para cada imagen de la galería */}
                <img src="./img/trasporte1.png" alt="descripcion" />
                {/* Repetir este bloque para cada imagen de la galería */}
                <img src="./img/trasporte1.png" alt="descripcion" />
                {/* Repetir este bloque para cada imagen de la galería */}
                <img src="./img/trasporte1.png" alt="descripcion" />
            </div>
        </div>
        </>
        
        
        );
    }
    
    export default GaleriaPage; 