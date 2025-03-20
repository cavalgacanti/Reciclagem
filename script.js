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
