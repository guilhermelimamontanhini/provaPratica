const buscarRegistrosModelo = require("../modelos/buscarRegistrosModelo");

const retornarRegistros = (request, response) => {
    modelo = buscarRegistrosModelo.todosRegistros();

    return response.status(200).json(modelo);
};

module.exports = {
    retornarRegistros
};