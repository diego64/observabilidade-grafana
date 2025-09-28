const axios = require('axios');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function callUsers() {
  const requestsCount = getRandomInt(1, 100);
  console.log(`[${new Date().toISOString()}] Enviando ${requestsCount} requisições...`);

  for (let i = 0; i < requestsCount; i++) {
    const randomNumber = getRandomInt(1, 200);

    try {
      const response = await axios.get(`http://localhost:3002/users?value=${randomNumber}`);
      const payload = response.data;

      console.log(
        `[${new Date().toISOString()}] Enviado: ${randomNumber} | Usuários retornados: ${payload.length}`
      );
    } catch (err) {
      console.error(`[${new Date().toISOString()}] Enviado: ${randomNumber} | Erro:`, err.message);
    }
  }

  // espera aleatória de 1 a 3 minutos antes da próxima execução
  const delay = getRandomInt(60_000, 180_000);
  console.log(`Próxima execução em ${(delay / 1000).toFixed(0)}s...\n`);

  setTimeout(callUsers, delay);
}

callUsers();
