import NavBarProdutos from "../layout/NavBarProdutos";
import AdiconarProdutos from "../layout/AdicionarProdutos";
import Container from "../layout/Container";

const AdicionarProduto = () => {

    return (

        <div> 
        <Container>
            <NavBarProdutos />
            <AdiconarProdutos tela="Adicionar Produto" textButton="Adicionar"/>
        </Container>
        </div>

    )
}

export default AdicionarProduto;