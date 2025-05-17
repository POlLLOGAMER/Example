const axios = require('axios');

const url = 'https://tu-link-de-replit.com'; // Reemplaza con tu URL

setInterval(() => {
  axios.get(url)
    .then(() => console.log(`[✔] Ping enviado a ${url}`))
    .catch((err) => console.error(`[✘] Error al hacer ping: ${err}`));
}, 1000); // Cada 1 segundo
