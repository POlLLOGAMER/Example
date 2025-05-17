const axios = require('axios');

const url = 'https://165c301a-f489-4cd5-bfc6-2bc5658349f0-00-227m0nhylus6k.riker.replit.dev:8080/'; // Reemplaza con tu URL

setInterval(() => {
  axios.get(url)
    .then(() => console.log(`[✔] Ping enviado a ${url}`))
    .catch((err) => console.error(`[✘] Error al hacer ping: ${err}`));
}, 1000); // Cada 1 segundo
