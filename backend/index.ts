import express from 'express';
import routes from './src/routes/routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});

//adicionar comentários após a implementação da autenticação por completo
