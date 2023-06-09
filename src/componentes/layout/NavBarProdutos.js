import '../layout/NavBarProdutos.css';
import icon from '../../img/Logo.png';
import hamburguer from "../../img/Hamburger_icon 2.png"
import { Link } from 'react-router-dom';


const NavBarProdutos = () => {

    return(
        <div className='container-navbar'>
            <nav className="navbar">
                <div className='container-icon'>
                    <Link className='tagAForicon' href='/home'><img src= {icon} width={60} alt='IconeDespensa'></img></Link>                    
                    <h1>Despensa</h1>
                        <div className="hamburguer">
                            <button className='ContainerHamburguer' onClick={'clickMenu()'}><img src={hamburguer} width={30} alt='Botão Hamburguer'/></button>
                        </div>         
                </div>     
            </nav>
        </div>
    ) 
}

export default NavBarProdutos;