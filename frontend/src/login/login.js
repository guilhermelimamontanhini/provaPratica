import React from 'react';
import './estilo.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../img/logoNegative.png';
import logoColorido from '../img/logoColor.png';
import { useNavigate  } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const handleRedirecionarParaPedidos = () => {
        navigate('/pedidos');
    };

    return (
        <div>
            <div className="conteudo col-md-4">
                <div className="imagem">
                    <div>
                        <img className="logo" src={logo} width="300" height="200"/>
                    </div>
                </div>
            </div>
            <div className="quadradoBranco col-md-8">
                <div style={{ margin: '0 257px' }}>
                    <div className='row'>
                        <img className="logoColorido" src={logoColorido}/>
                    </div>
                    <div className='row'>
                        <h5 className="acesso">Acesse o Painel de Monitoramento</h5>
                    </div>
                    <div className='row'>
                        <div className="mb-3 form">
                            <label htmlFor="email" className="tituloInput">Email:</label>
                            <input type="text" className="inputEmail form-control" aria-describedby="button-addon2" id="email"/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="input-group mb-3 form" style={{ display: 'grid' }}>
                            <label htmlFor="senha" className="tituloInput">Senha:</label>
                            <div style={{ display: 'flex' }}>
                                <input type="text" className="inputSenha form-control" aria-describedby="button-addon2" id="senha"/>
                                <div className="input-group-append">
                                    <button className="btn" style={{backgroundColor: '#002d32', color: 'white'}} type="button" id="button-addon2">Show</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <button type="button" className="btn" style={{backgroundColor: '#002d32', color: 'white'}} 
                            onClick={handleRedirecionarParaPedidos}>Entrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;