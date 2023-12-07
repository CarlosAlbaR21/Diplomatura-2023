const ContactoPage = (props) => {
    return (
        <>
        <div>
      <div className="image-section">
        <img src="./img/interna-ap-2.jpg" alt="Imagen de Apertura" />
        <h1>CONTACTO</h1>
      </div>
      <div className="breadcrumb">
        <a href="./" >Inicio</a> &gt;
        <span>Contacto</span>
      </div>

      <div className="sectionApertura">
        <h2>Contacto</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum similique quibusdam nesciunt ut? Repellat illo rem libero sequi voluptate aspernatur ullam sunt est cum velit, eligendi iste, iure alias! Illum!
        </p>
      </div>
    </div>



    <div className="contacto">
      <div>
        <h2>Contacto Rápido</h2>
        <form action="" method="" className="formulario">
          <p>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" />
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </p>
          <p>
            <label htmlFor="telefono">Teléfono</label>
            <input type="text" name="telefono" id="telefono" />
          </p>
          <p>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea name="mensaje" id="mensaje"></textarea>
          </p>
          <p>
            <input type="submit" value="Enviar" />
          </p>
        </form>
      </div>
  
      <div className="datos">
        <h2>Otras vías de comunicación</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium maiores rem quam tenetur, eaque placeat aspernatur. Hic error consectetur explicabo, deserunt, quos temporibus magni recusandae, blanditiis distinctio possimus ab quo?
        </p>
        <ul>
          <li>Teléfono: 43242388</li>
          <li>Email: prueba@pruebam.com</li>
          <li>Twitter</li>
          <li>Facebook</li>
        </ul>
      </div>
    </div>
        </>
        
        
        );
    }
    
    export default ContactoPage; 