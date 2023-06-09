import Navbar from "../../layout/NavBar/NavBar";
import AdicionarDespensa from "../../layout/AdicionarDespensa";
import "./AdicionarDespensas.css"

const AdicionarDespensas = () =>{

    return (
        <div className="ContainerAdicionarCategoria">
                <Navbar />
                <AdicionarDespensa tela="Cadastrar Despensa" placeholderName="Nome Despensa"  placeholderImg="Escolher Icone" textButton="Adicionar"/>
        </div>
    )
}

export default AdicionarDespensas;