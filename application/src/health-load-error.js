const axios = require("axios");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const URL = "http://localhost:3001/error";

async function callError() {
  // quantidade de requisições a serem enviadas (entre 1 e 100)
  const requestsCount = getRandomInt(1, 100);
  console.log(`[${new Date().toISOString()}] Enviando ${requestsCount} requisições para /error...`);

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
      console.error(`[${new Date().toISOString()}] Enviado: ${randomNumber} | Erro:`, err.message);
    }
  }

  // espera aleatória de 1 a 3 minutos antes da próxima execução
  const delay = getRandomInt(60_000, 90_000); // entre 1min e 2min
  console.log(`Próxima execução em ${(delay / 1000).toFixed(0)}s...\n`);

  setTimeout(callError, delay);
}

callError();
