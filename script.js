// 1. Inicializa o mapa centralizado em Lisboa
const map = L.map('map', {
    zoomControl: false 
}).setView([38.7222, -9.1393], 13);

// 2. Camada de mapa OpenStreetMap padrão (ou podemos aplicar um filtro CSS escuro nela)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 3. Carrega os dados do arquivo dados.json
fetch('dados.json')
    .then(response => response.json())
    .then(locais => {
        locais.forEach(local => {
            const marker = L.marker(local.coordenadas).addTo(map);

            const popupContent = `
                <div>
                    <h3>${local.titulo}</h3>
                    <p>${local.descricao}</p>
                    <hr style="border:0; border-top:1px solid #333; margin:8px 0;">
                    <span style="font-size:10px; color:#666;">REF: ${local.coordenadas[0]}, ${local.coordenadas[1]}</span>
                </div>
            `;

            marker.bindPopup(popupContent);
        });
    })
    .catch(error => console.error('Erro ao carregar os dados geográficos:', error));