const buscarTotalVendas = require("../modelos/vendasModelo");

const retornandoQuantidadeVendas = (request, response) => {
    listaVentdasTotais = buscarTotalVendas.calculandoTotalVendas();

    return response.status(200).json(listaVentdasTotais);
};

module.exports = {
    retornandoQuantidadeVendas
};