
import React from "react";
import { Link } from "react-router-dom";
function Header(){
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg bg-info">
  <div className="container">
    <Link className="navbar-brand">REDUX TOOLKIT TUTORIAL</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/userlist" className="nav-link" >Userlist</Link>
        </li>   
        <li className="nav-item">
          <Link to="/adduser" className="nav-link" >Add User</Link>
        </li> 
      
      </ul>
      <form className="d-flex" role="search">
       <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </React.Fragment>
    );
}
export default Header;