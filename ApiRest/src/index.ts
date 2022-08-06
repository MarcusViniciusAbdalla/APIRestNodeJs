import express, {Request, Response, NextFunction} from "express";
import usersRoute from "./routes/users.route";

const app = express();

// Configuração da aplicação
app.use(express.json());

// Configuração de rotas
app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Sucesso!' });
});

// Inicialização do servidor
app.listen(3000, () => {
   console.log('Aplicação executando na porta 3000');
});