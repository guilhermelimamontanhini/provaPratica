const fs = require('fs');
const path = require('path');

const todosRegistros = () => {
    try {
        // Lê o conteúdo do arquivo dados.json de forma síncrona
        const filePath = path.join(__dirname, 'dados.json');
        const data = fs.readFileSync(filePath, 'utf8');
        const registros = JSON.parse(data);
        return registros;
    } catch (error) {
        console.error('Erro ao buscar registros:', error);
        return [];
    }
};

module.exports = {
    todosRegistros
};