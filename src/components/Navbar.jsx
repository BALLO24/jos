import { Link } from "react-router-dom"
import '../assets/navbar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import { Badge } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
export default function Navbar() {

    const [burgerIcon,setBurgerIcon]=useState(true)

    return (
        <div>
            <nav className="navbar">
                <h2>Logo Jos</h2>
                <div className={burgerIcon ? "nav-links" : "nav-links burger-nav"}>
                    <Link to="/">Accueil</Link>
                    <Link to="/">Produit</Link>
                    <Link to="/">Services</Link>
                </div>
                <div className="burger" onClick={()=>setBurgerIcon(!burgerIcon)}>{burgerIcon ? <MenuIcon className="burgerIcon"color="#e8eaf6"/> :<CloseIcon className="burgerIcon"color="#e8eaf6"/> }</div>
                <div className="nav-icons">
                    <LoginIcon className="icons" color="#e8eaf6" />
                    <Badge className="icons" badgeContent={4} color="primary">
                        <FavoriteIcon color="#e8eaf6" />
                    </Badge>
                    <ShoppingCartIcon className="icons" color="#e8eaf6" />
                    <span className="fcfa">
                        <input type="text" contentEditable='false' readOnly value={1222} /><span>F CFA</span>
                    </span>
                </div>
            </nav>
        </div>
    )
}