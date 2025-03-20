const express = require('express');
const path = require('path'); // Para facilitar a localização de arquivos
const cors = require('cors');

const app = express();
const port = 3000;

// Servir arquivos estáticos do diretório 'frontend'
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Dados dos pontos de reciclagem
const points = require('./pontos-reciclagem.json');

// Habilitar CORS para permitir solicitações do frontend
app.use(cors());

// Rota para buscar pontos de reciclagem
app.get('/search', (req, res) => {
  const { material, location } = req.query;

  const filteredPoints = points.filter(point =>
    point.materials.includes(material) &&
    point.location.toLowerCase().includes(location.toLowerCase())
  );

  res.json(filteredPoints);
});

// Rota para servir a página inicial (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
