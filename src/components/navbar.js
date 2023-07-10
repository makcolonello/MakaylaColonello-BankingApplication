
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
    return (
        <div className="nav-bar">
        <nav className="navbar navbar-expand-dark navbar-dark bg-dark">
            
            <div className="container-fluid">
            
             <Link className="navbar-brand" to="/">My Bank</Link>
             
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        </div>
        
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <div className="home">
                <CustomLink className="navbar-brand" to="/home">Home</CustomLink>
                </div>

                <div className="create-account">
                <CustomLink className="navbar-brand" to="/createaccount">Create Account</CustomLink>
                </div>

                <div className="deposit">
                <CustomLink className="navbar-brand" to="/deposit">Deposit</CustomLink>
                </div>

                <div className="withdraw">
                <CustomLink className="navbar-brand" to="/withdraw">Withdraw</CustomLink>
                </div>

                <div className="all-data">
                <CustomLink className="navbar-brand" to="/alldata">All Data</CustomLink>
                </div>
               
               
               
               
            </ul>
            </div>
           
           
     </nav>
     </div>

    

    );
}
    function CustomLink ({ to, children, ...props }) {
       const resolvedPath = useResolvedPath(to)
       const isActive = useMatch({ path: resolvedPath.pathname, end: true})
       
        return (
            <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
            </li>
        )

    }   




     