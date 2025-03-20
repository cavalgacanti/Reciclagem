const data = [
  {
    "name": "ARPA - Alternativa de Reciclagem de Paulo Afonso",
    "address": "R. José Reinaldo De Souza - Pedra Comprida, Paulo Afonso - BA, 48604-710",
    "location": "Paulo Afonso",
    "materials": ["papel", "plastico", "metal", "vidro"]
  },
  {
    "name": "CRR - Centro de Reciclagem Rio Ltda",
    "address": "Av. Sen. Vitórino Freire, 365 - Coelho Neto, Rio de Janeiro - RJ, 21530-220",
    "location": "Rio de Janeiro",
    "materials": ["papel", "plastico", "metal", "vidro"]
  },
  {
    "name": "CRR- Centro de Reciclagem Rio Ltda",
    "address": "R. Magalhães Castro, 228 - Riachuelo, Rio de Janeiro - RJ, 20961-020",
    "location": "Rio de Janeiro",
    "materials": ["papel", "plastico", "metal", "vidro"]
  },
  {
    "name": "Ecoponto Sé",
    "address": "Rua Anita Garibaldi, 30",
    "location": "São Paulo",
    "materials": ["papel", "plastico", "metal", "vidro"]
  },
  {
    "name": "Ecoponto Lapa",
    "address": "Rua John Harrison, 95",
    "location": "São Paulo",
    "materials": ["papel", "plastico", "metal", "vidro"]
  },
  {
    "name": "COORES - Cooperativa de Reciclagem do Bairro Santa Maria",
    "address": "R. Ver. Manoel Nunes Resende, s/n - Santa Maria, Aracaju - SE",
    "location": "Aracaju",
    "materials": ["papel", "plastico", "metal", "vidro"]
  },
  {
    "name": "CARE - Cooperativa dos Agentes Autônomos de Reciclagem de Aracaju",
    "address": "R. A5, 150 - Santa Maria, Aracaju - SE, 49043-522",
    "location": "Aracaju",
    "materials": ["papel", "plastico", "metal", "vidro"]
  }
];

document.getElementById('recycleForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const material = document.getElementById('material').value;
  const location = document.getElementById('location').value.toLowerCase();

  const filteredResults = data.filter(
    point =>
      point.materials.includes(material) &&
      point.location.toLowerCase().includes(location)
  );

  const resultsList = document.getElementById('resultsList');
  resultsList.innerHTML = '';

  if (filteredResults.length > 0) {
    filteredResults.forEach(point => {
      const li = document.createElement('li');
      li.textContent = `${point.name} - Endereço: ${point.address}`;
      resultsList.appendChild(li);
    });
  } else {
    resultsList.innerHTML = '<li>Nenhum ponto de reciclagem encontrado.</li>';
  }
});
