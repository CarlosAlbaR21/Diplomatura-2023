
const HomePage = (props) => {
    return (
        <>
       
      <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./img/slider1.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./img/slider2.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./img/slider3.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

{/* // 3 columnas   */}
        <div className="mi-div">
            <div className="row text-center">
                <div className="col">
                    <h2>titulo 1</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut
                        aut blanditiis quod reiciendis tempore itaque atque qui earum beatae
                        officiis similique, labore inventore, provident ad doloremque, omnis quaerat
                        architecto.
                    </p>
                </div>
                <div className="col">
                    <h2>titulo 2</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut
                        aut blanditiis quod reiciendis tempore itaque atque qui earum beatae
                        officiis similique, labore inventore, provident ad doloremque, omnis quaerat
                        architecto.
                    </p>
                </div>
                <div className="col">
                    <h2>titulo 3</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut
                        aut blanditiis quod reiciendis tempore itaque atque qui earum beatae
                        officiis similique, labore inventore, provident ad doloremque, omnis quaerat
                        architecto.
                    </p>
                </div>
            </div>
        </div>
        </>
        
        
    );
}

export default HomePage; 