import express, {Request, Response, NextFunction} from "express";
import usersRoute from "./routes/users.route";
import statusRoute from "./routes/status.route";

const app = express();

// Configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração de rotas
app.use(usersRoute);
app.use(statusRoute);

// Inicialização do servidor
app.listen(3000, () => {
   console.log('Aplicação executando na porta 3000');
});