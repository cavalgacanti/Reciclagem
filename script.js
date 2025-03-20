document.getElementById('recycleForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const material = document.getElementById('material').value;
  const location = document.getElementById('location').value;

  const response = await fetch(`http://localhost:3000/search?material=${material}&location=${location}`);
  const results = await response.json();

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
});
