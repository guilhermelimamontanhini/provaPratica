import React, { useState, useEffect } from 'react';
import api from '../api.js';
import logo from '../img/logoNegative.png';
import './estilo.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate  } from 'react-router-dom';

function Pedidos() {

    const [pedidos, setPedidos] = useState([]);

    const [statusPendente, setStatusPendente] = useState(0);
    const [statusProcessando, setStatusProcessando] = useState(0);
    const [statusAprovado, setStatusAprovado] = useState(0);
    const [statusCancelado, setStatusCancelado] = useState(0);
    const [statusTotalPedidos, setStatusTotalPedidos] = useState(0);

    const [vendas, setVendas] = useState(0.0);

    const navigate = useNavigate();

    const handleRedirecionarParaLogin = () => {navigate('/')};

    useEffect(() => {
        // Requisição para puxar todos os registros
        api.get('pedidos').then((response) => {
            const pedidosFormatados = response.data.map((pedido) => {
                const valorFormatado = pedido.valor.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                });
                return {
                  ...pedido,
                  valor: valorFormatado,
                };
              });
              setPedidos(pedidosFormatados);
        })
        .catch((error) => {
            console.error('Erro na requisição:', error);
        });

        // Requisição para trazer uma lista da quantidade dos status registrados
        api.get('pedidos/resumoStatus').then((response) => {
            setStatusPendente(response.data.qtdStatusPendente);
            setStatusAprovado(response.data.qtdStatusAprovado);
            setStatusProcessando(response.data.qtdStatusProcessando);
            setStatusCancelado(response.data.qtdStatusCancelado);
            setStatusTotalPedidos(response.data.qtdTotalPedidos);
        })
        .catch((error) => {
            console.error('Erro na requisição:', error);
        });

        // Requisição que retorna o valor total das vendas
        api.get('pedidos/totalVendas').then((response) => {
            const totalVendasFormatado = response.data.totalVendas.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
              });
            setVendas(totalVendasFormatado);
        })
        .catch((error) => {
            console.error('Erro na requisição:', error);
        });
        
    }, []);

    /**
     * 
     * @author Guilherme Lima Motanhini
     * @description Método para retornar a classe CSS com base no Status do registro
     * @param {*} status 
     * @returns {classe CSS}
     */
    const alterarCorComBaseNoStatus = (status) => {
        switch (status) {
          case 'APROVADO':
            return 'statusAprovado'; 
          case 'PROCESSANDO':
            return 'statusProcessando'; 
          case 'CANCELADO':
            return 'statusCancelado'; 
          case 'PENDENTE':
            return 'statusPendente'; 
          default:
            return '';
        }
      }
      
    return (
        <div className="wallpaper">

            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#002D32", height: "100px"}}>
                <div className="row" style={{width: '100%'}}>
                    <div className='col-md-3'><img className="logo" src={logo}/></div>

                    <div className="collapse navbar-collapse col-md-7" id="navbarSupportedContent">
                        <div className="navbar-nav mr-auto divMonitoramento">
                            <p className="monitoramento">MONITORAMENTO DE PEDIDOS</p>
                        </div>
                    </div>

                    <div className='col-md-2 posicaoBotao'>
                        <button className="btn my-2 my-sm-0 botaoSair" style={{backgroundColor: "#73B1B2"}} type="submit" 
                        onClick={handleRedirecionarParaLogin}>Sair</button>
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="row"> 
                    <div className='col-md-8 blocoBrancoStatus'>
                        <div className="linhaTitulo"><h4 className="textoConfiguracoes">Status pedidos</h4></div>
                        <div className="linhaStatus">
                            <div className='col-md-2'>
                                <h5 className="estiloNumeros" style={{color: '#FFCE00'}}>{statusProcessando}</h5>
                                <p className="estiloLegenda">Processando</p>
                            </div>
                            <div className='col-md-2'>
                                <h5 className="estiloNumeros" style={{color: '#2993CE'}}>{statusPendente}</h5>
                                <p className="estiloLegenda">Pendente</p>
                            </div>
                            <div className='col-md-2'>
                                <h5 className="estiloNumeros" style={{color: '#005A64'}}>{statusAprovado}</h5>
                                <p className="estiloLegenda">Aprovado</p>
                            </div>
                            <div className='col-md-2'>
                                <h5 className="estiloNumeros" style={{color: '#C73939'}}>{statusCancelado}</h5>
                                <p className="estiloLegenda">Cancelado</p>
                            </div>
                            <div className='col-md-2'>
                                <h5 className="estiloNumeros" style={{color: '#000000'}}>{statusTotalPedidos}</h5>
                                <p className="estiloLegenda">Total</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 blocoBrancoTotal'>
                        <div className="linhaTitulo"><h4 className="textoConfiguracoes">Total de vendas</h4></div>
                        <div className="linhaTitulo"><h4 className="textoVendas">{vendas}</h4></div>
                    </div>
                </div>
            </div>

            <div style={{maxWidth: "100% !important"}}>
                <div className="row linhaPrincipal">
                    {pedidos.map((pedido, index) => (
                        <div key={index} className="card proporcoesCard">
                            <div className="card-header" style={{display: 'flex', border: 'none'}}>
                                <p className="pedidos">Pedidos</p>
                                <button type="button" className="btn btnAcessar">Acessar</button>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item itensLista">
                                    <p className="tituloItem">Número</p>
                                    <p className="valorItem">{pedido.numero}</p>
                                </li>
                                <li className="list-group-item itensLista">
                                    <p className="tituloItem">Valor</p>
                                    <p className="valorItem">{pedido.valor}</p>
                                </li>
                                <li className="list-group-item itensLista">
                                    <p className="tituloItem">Status</p>
                                    <p className={`valorItem ${alterarCorComBaseNoStatus(pedido.status)}`}>{pedido.status}</p>
                                </li>
                                <li style={{listStyleType: 'none'}}></li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Pedidos;