import {Link} from 'react-router-dom';
import '../style.css';

const EmcNavBar = () => {
    return ( 

        <div className="container-fluid">
    
        <nav className="navbar navbar-expand-sm navbar-dark bg-success sticky-top">
            <Link className="navbar-brand" to="/Contactme"><img src="imgs/p1.JPG" alt="LOGO"/></Link>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/Home" aria-current="page">Home <span className="visually-hidden">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Faqs">FAQ</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Topics">Topics</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contactme">ContactUs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Gallery">Gallery</Link>
                    </li>
                   
                </ul>         
                <div className="d-flex me-2">
                    <button type="button" className="btn btn-warning btn-lg" data-bs-toggle="modal" data-bs-target="#modalId"> Login </button>
                </div>        
            </div>
        </nav>


            {/* bs5-modal-default */}
            {/* Modal trigger button
            <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
                Launch
            </button> 
            */}

            {/* Modal Body */}
            {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
            <div className="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalTitleId">Login </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Body
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Optional: Place to the bottom of scripts */}
            <script>
                const myModal = new bootstrap.Modal(document.getElementById('modalId'), options)
            </script>


        </div>

     );
}
 
export default EmcNavBar;