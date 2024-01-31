import Logo from "./assets/Logo.jpg"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
          <h3>Virtual Farmacy</h3>
            <img src={Logo} alt="logo"></img>
            <div>
            <button className="btn btn-primary m-4">Medicamentos</button>
            <button className="btn btn-secondary m-4">Suplementos</button>
            <button className="btn btn-primary m-4">Cosméticos</button>
            </div> 
            <CartWidget></CartWidget>
        </nav>
    )
}

export default Navbar
