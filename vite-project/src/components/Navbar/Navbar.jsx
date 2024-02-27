import Logo from "./assets/Logo.jpg"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg nav-bar-personal justify-content-center">
            <img src={Logo} alt="logo"></img>
            <h3>Virtual Farmacy</h3>
            <div>
            <Link to="/medicamentos">
            <button className="btn btn-primary m-4">Medicamentos</button>
            </Link>
            <Link to="/suplementos">
            <button className="btn btn-secondary m-4">Suplementos</button>
            </Link>
            <Link to="/cosmeticos">
            <button className="btn btn-primary m-4">Cosméticos</button>
            </Link>
            </div> 
            <CartWidget></CartWidget>
        </nav>
    )
}

export default Navbar
