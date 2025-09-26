const axios = require("axios");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const URL = "http://localhost:3001/health";

async function callHealth() {
  // quantidade de requisições a serem enviadas (entre 1 e 100)
  const requestsCount = getRandomInt(1, 100);
  console.log(`[${new Date().toISOString()}] Enviando ${requestsCount} requisições...`);

  for (let i = 0; i < requestsCount; i++) {
    const randomNumber = getRandomInt(1, 200);

    try {
      const response = await axios.get(URL, {
        params: { value: randomNumber },
      });

      console.log(
        `[${new Date().toISOString()}] Enviado: ${randomNumber} | Resposta: ${response.data}`
      );
    } catch (err) {
      console.error(`[${new Date().toISOString()}] Erro:`, err.message);
    }
  }

  // espera aleatória de 0 a 10s antes da próxima execução
  const delay = getRandomInt(0, 10_000);
  console.log(`Próxima execução em ${(delay / 1000).toFixed(0)}s...\n`);

  setTimeout(callHealth, delay);
}

callHealth();
