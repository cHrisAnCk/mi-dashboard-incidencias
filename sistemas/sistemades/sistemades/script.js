document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const content = document.getElementById("system-content");

  // Generar menú
  sistemas.forEach((s, i) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${s.id}`;
    a.dataset.index = i;

    if (s.iconSvg) {
      a.innerHTML = `<img src="${s.iconSvg}" class="menu-icon-svg" alt="${s.nombre}"> <span>${s.nombre}</span>`;
    } else {
      a.innerHTML = `<i class="fas ${s.icon || 'fa-cube'}"></i> <span>${s.nombre}</span>`;
    }

    li.appendChild(a);
    menu.appendChild(li);
  });

  // Renderizar sistema
  const renderSistema = (index) => {
    const s = sistemas[index];
    content.innerHTML = `
      <div class="system-header">
        ${s.iconSvg
          ? `<img src="${s.iconSvg}" class="system-icon-svg" alt="${s.titulo}">`
          : `<i class="fas ${s.icon || 'fa-cube'} system-icon"></i>`
        }
        <div class="system-info">
          <h2>${s.titulo} <span>${s.subtitulo}</span></h2>
          <p>${s.descripcion}</p>
        </div>
        <button class="btn-regresar" onclick="window.location.href='../../sistemas.html'">REGRESAR</button>
      </div>

      ${s.guias?.length > 0 ? `
        <div class="section">
          <h3>Guías</h3>
          <div class="guides">
            ${s.guias.map(g => {
              const isDoc = g.url.includes("docs.google.com");
              const viewUrl = isDoc ? g.url : `https://drive.google.com/file/d/${g.url.split('/d/')[1].split('/')[0]}/view`;
              const downloadUrl = isDoc ? g.url + "&export=download" : `https://drive.google.com/uc?export=download&id=${g.url.split('/d/')[1].split('/')[0]}`;
              return `
                <a href="${viewUrl}" target="_blank" class="guide-item">
                  <span>${g.nombre}</span>
                  <i class="far fa-eye"></i>
                  <i class="fas fa-download" onclick="event.stopPropagation(); window.open('${downloadUrl}', '_blank')"></i>
                </a>
              `;
            }).join('')}
          </div>
        </div>
      ` : ''}

      ${s.videos?.length > 0 ? `
        <div class="section">
          <h3>Videos</h3>
          <div class="videos">
            ${s.videos.map(v => `
              <div class="video-item" onclick="window.open('https://drive.google.com/file/d/${v.id}/preview', '_blank')">
                <img src="https://drive.google.com/thumbnail?id=${v.id}&sz=w400" alt="${v.nombre}" class="thumbnail">
                <p>${v.nombre}</p>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      ${s.contactos?.length > 0 ? `
        <div class="section">
          <h3>Números de contacto</h3>
          <div class="table-container">
            <table class="contact-table">
              <thead>
                <tr>
                  <th>NRO</th><th>NOMBRES Y APELLIDOS</th>
                  <th>CELULAR</th><th>ANEXO</th><th>ODPE ASIGNADAS</th><th>CORREO GENÉRICO</th>
                </tr>
              </thead>
              <tbody>
                ${s.contactos.map(row => `<tr>${row.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}
              </tbody>
            </table>
            <div class="pagination">
              <span>Items por página</span>
              <select><option>10</option></select>
              <span>1-10 de 10</span>
              <button disabled><i class="fas fa-chevron-left"></i></button>
              <button><i class="fas fa-chevron-right"></i></button>
            </div>
          </div>
        </div>
      ` : ''}
    `;

    // Resaltar menú activo
    document.querySelectorAll(".menu a").forEach((a, i) => {
      a.classList.toggle("active", i === index);
    });
  };

  // Eventos
  menu.addEventListener("click", e => {
    const a = e.target.closest("a");
    if (a?.dataset.index) {
      e.preventDefault();
      renderSistema(parseInt(a.dataset.index));
      history.pushState(null, null, a.href);
    }
  });

  // Carga inicial
  const hash = location.hash.substring(1);
  const index = sistemas.findIndex(s => s.id === hash);
  renderSistema(index >= 0 ? index : 0);
});