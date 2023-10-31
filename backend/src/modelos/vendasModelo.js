const fs = require('fs');
const path = require('path');

/**
 * 
 * @author Guilherme Lima Montanhini
 * @description Função para  calcular a quantidade total do valor das vendas, excluindo aquelas
 * que foram canceladas
 * @returns {totalVendas}
 */
const calculandoTotalVendas = () => {
    try {
        // Lê o conteúdo do arquivo dados.json de forma síncrona
        const filePath = path.join(__dirname, 'dados.json');
        const data = fs.readFileSync(filePath, 'utf8');
        const registros = JSON.parse(data);
    
        // Inicializa uma variável para armazenar a quantidade da soma total
        let totalVendas = 0;
    
        // Loop através dos registros para calcular a soma total, 
        // excluindo os pedidos com status "CANCELADO"
        registros.forEach((pedido) => {
          if (pedido.status !== 'CANCELADO') {
            totalVendas += pedido.valor;
          }
        });
    
        // Retorna o objeto com a soma total
        return {
          totalVendas
        };
      } catch (error) {
        console.error('Erro ao calcular a soma total de vendas:', error);
        return {};
      }
}

module.exports = {
    calculandoTotalVendas
};