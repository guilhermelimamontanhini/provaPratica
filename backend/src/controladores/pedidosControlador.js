const buscarRegistrosModelo = require("../modelos/pedidosModelo");

const retornarRegistros = (request, response) => {
    listaRegistros = buscarRegistrosModelo.todosRegistros();

    return response.status(200).json(listaRegistros);
};

module.exports = {
    retornarRegistros
};