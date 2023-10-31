const app = require('./app')
const port = process.env.PORT || 5000;

// Rotas e lógica do back-end aqui
app.listen(port, () => {
  console.log(`Servidor Express está rodando na porta ${port}`);
});

