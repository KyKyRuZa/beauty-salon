const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware для обработки JSON
app.use(express.json());

// Простейший роут для проверки
app.get('/', (req, res) => {
  res.send('Сервер работает! 🚀');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});