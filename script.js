document.getElementById('recycleForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const material = document.getElementById('material').value;
  const location = document.getElementById('location').value;

  try {
    const response = await fetch('./pontos-reciclagem.json'); // Caminho ajustado
    const data = await response.json();

    const results = data.filter(point =>
      point.materials.includes(material) &&
      point.location.toLowerCase().includes(location.toLowerCase())
    );

    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';

    if (results.length > 0) {
      results.forEach(point => {
        const li = document.createElement('li');
        li.textContent = `${point.name} - Endereço: ${point.address}`;
        resultsList.appendChild(li);
      });
    } else {
      resultsList.innerHTML = '<li>Nenhum ponto de reciclagem encontrado.</li>';
    }
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
  }
});
