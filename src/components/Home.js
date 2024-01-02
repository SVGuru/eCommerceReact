const Home = () => {
    return ( 

        <div className="container-fluid">
       
        {/* Home, About, Topics,Downloads,FAQ,Contact Us */}

        <h1 className="display-1"> Welcome to pets garden!</h1>


        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
                <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
                <li data-bs-target="#carouselId" data-bs-slide-to="3" aria-label="Fourth slide"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <img src="imgs/p3.JPG" className="w-100 d-block" alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img src="imgs/2.png" className="w-100 d-block" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img src="imgs/3.png" className="w-100 d-block" alt="Third slide"/>
                </div>                
                <div className="carousel-item">
                    <img src="imgs/4.png" className="w-100 d-block" alt="Fourth slide"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        </div>

     );
}
 
export default Home;