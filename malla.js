
fetch('malla_lic_diseño.json')
  .then(response => response.json())
  .then(data => {
    const app = document.getElementById('app');
    const container = document.createElement('div');
    container.id = 'malla';
    data.forEach(materia => {
      const div = document.createElement('div');
      div.className = 'box';
      div.style.background = materia.color;
      div.innerHTML = `<strong>${materia.nombre}</strong><br><small>${materia.anio}° año</small>`;
      container.appendChild(div);
    });
    app.appendChild(container);
  });
