const fs = require('fs');
const path = require('path');

/**
 * 
 * @author Guilherme Lima Montanhini
 * @description Função para retornar a quantidade de cada um dos status e a quantidade total de 
 * registros. 
 * @returns {qtdStatusProcessando, qtdStatusPendente, qtdStatusAprovado, 
 * qtdStatusCancelado, qtdTotalPedidos}
 */
const quantidadeStatus = () => {
    try {
        // Lê o conteúdo do arquivo dados.json de forma síncrona
        const filePath = path.join(__dirname, 'dados.json');
        const data = fs.readFileSync(filePath, 'utf8');
        const registros = JSON.parse(data);

        // Inicializando as variaveis para cada status
        let qtdStatusProcessando = 0;
        let qtdStatusPendente = 0;
        let qtdStatusAprovado = 0;
        let qtdStatusCancelado = 0;

        // Loop através dos registros para contar os status
        registros.forEach((pedido) => {
            if (pedido.status === 'PROCESSANDO') {
            qtdStatusProcessando++;
            } else if (pedido.status === 'PENDENTE') {
            qtdStatusPendente++;
            } else if (pedido.status === 'APROVADO') {
            qtdStatusAprovado++;
            } else if (pedido.status === 'CANCELADO') {
            qtdStatusCancelado++;
            }
        });
  
        // Calcula a quantidade total de pedidos
        const qtdTotalPedidos = registros.length;
  
        // Retorna o objeto com as quantidades
        return {
            qtdStatusProcessando,
            qtdStatusPendente,
            qtdStatusAprovado,
            qtdStatusCancelado,
            qtdTotalPedidos,
        };
    } catch (error) {
        console.error('Erro ao buscar a quantidade de status:', error);
        return [];
    }
}

module.exports = {
    quantidadeStatus
};