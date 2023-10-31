const quantidadeStatus = require("../modelos/statusModelo");

const retornarResumoStatus = (request, response) => {
    listaQuantidadeStatus = quantidadeStatus.quantidadeStatus();

    return response.status(200).json(listaQuantidadeStatus);
};

module.exports = {
    retornarResumoStatus
};