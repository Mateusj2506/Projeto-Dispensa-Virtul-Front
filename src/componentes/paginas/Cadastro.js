import '../paginas/Cadastro.css';
import img from '../../img/7-removebg-preview.png';
import Container from '../layout/Container';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Cadastro = () =>{

    const [email, setEmail] = useState("");
    const [ConfirmeEmail, setConfirmeEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmePassword, setConfirmePassword] = useState("");

    const handleEmail = (event) =>{
        setEmail(event.target.value);
    };
    const handlePassword = (event) =>{
        setPassword(event.target.value);
    };
    const handleConfirmeEmail = (event) =>{
        setConfirmeEmail(event.target.value);
    };
    const handleConfirmePassword = (event) =>{
        setConfirmePassword(event.target.value);
    };


return (
    <Container>
    <div className='Container'>
        <form> 
        <div className='imgContainer'>
            <img src={img} width={100}/>
        </div>

        <div className='Seletores'>
            <Link className= "entrar" to='/'>Entrar</Link>
            <Link className= "cadastrar  select" to='/cadastro'>Cadastro</Link>
        </div>

        <div className='ContainerImp'>
            <input className="Ipt"type='email' name='email' required placeholder='Insira seu email' value={email} onChange={(e) => {handleEmail(e)} }/>
        </div>
        <div className='ContainerImp'>
            <input className="Ipt"type='email' name='emailConfirm' required placeholder='Confirme seu email' value={ConfirmeEmail} onChange={(e) => {handleConfirmeEmail(e)}}/>
        </div>
        <div className='ContainerImp'>
            <input className="Ipt" type='password' name='senha' required placeholder='Insira sua senha' value={password} onChange={(e) => {handlePassword(e)}}/>
        </div>
        <div className='ContainerImp'>
            <input className="Ipt" type='password' name='senhaConfirm' required placeholder='Confirme sua senha' value={confirmePassword} onChange={(e)=>{handleConfirmePassword(e)}}/>
        </div>        
        <div className='ContainerBtn'>
            <button className="btn" type='submit'>Cadastrar</button>
        </div>
        </form>
    </div>
    </Container>
)
}

export default Cadastro