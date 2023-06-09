import Navbar from "../../layout/NavBar/NavBar.js";
import Container from "../../layout/Container.js";
import './TelaInicial.css';
import iconDespensa from "../../../img/iconDespensa.png";
import iconTodosOsProdutos from "../../../img/Todos os Produtos.png";
import iconListaDeCompras from "../../../img/iconListaDeCompras.png";
import iconCategorias from "../../../img/iconCategorias.png";
import iconItensAVencer from "../../../img/iconItensAVencer.png";
import iconItensVencidos from "../../../img/iconItensVencidos.png";
import iconSetaCards from "../../../img/Seta cards.png";
import { Link, useParams } from "react-router-dom";

function Menu (){

    const { id } = useParams();

    return(
        <div className="container-menu">
            <Navbar />
            <Container containerMod='colorTelaPrincipal'> 
              <div className="PrimeiraLinha">
                    <div className="cards">
                        <div className="titleImgCard">
                            <img src={iconDespensa} width={75}></img>
                            <h1 className="titleCard">Despensa</h1>
                        </div>
                        <div className="BtnCardSeta">
                            <Link to={`/despensas/${id}`}><img src={iconSetaCards} /></Link>
                        </div>
                    </div>
                    
                    <div className="cards">
                        <div className="titleImgCard">
                            <img src={iconTodosOsProdutos} width={75}></img>
                            <h1 className="titleCard">Todos os Produtos</h1>
                        </div>
                        <div className="BtnCardSeta">
                            <Link to={`/produtos/${id}`}><img src={iconSetaCards} /></Link>
                        </div>
                    </div>

                    <div className="cards">
                        <div className="titleImgCard">
                            <img src={iconListaDeCompras} width={75}></img>
                            <h1 className="titleCard">Lista de Compras</h1>
                        </div>
                        <div className="BtnCardSeta">
                            <Link to={`/listadecompras/${id}`}><img src={iconSetaCards} /></Link>
                        </div>
                    </div>
                </div>         

                <div className="SegundaLinha">
                <div className="cards">
                    <div className="titleImgCard">
                        <img src={iconCategorias} width={75}></img>
                        <h1 className="titleCard">Categorias</h1>
                    </div>
                    <div className="BtnCardSeta">
                        <Link to={`/categorias/${id}`}><img src={iconSetaCards} /></Link>
                    </div>
                </div>

                <div className="cards">
                    <div className="titleImgCard">
                        <img src={iconItensAVencer} width={75}></img>
                        <h1 className="titleCard">Itens a Vencer</h1>
                    </div>
                    <div className="BtnCardSeta">
                        <Link to={`/produtos/AVencer/${id}`}><img src={iconSetaCards} /></Link>
                    </div>
                </div>

                <div className="cards">
                    <div className="titleImgCard">
                        <img src={iconItensVencidos} width={75}></img>
                        <h1 className="titleCard">Itens Vencidos</h1>
                    </div>
                    <div className="BtnCardSeta">
                        <Link to={`/produtos/vencidos/${id}`}><img src={iconSetaCards} /></Link>
                    </div>
                </div>
                </div>

            </Container>
        </div>
    )
};

export default Menu;

