import express, {Router} from 'express';
import cors from 'cors';
import routes from './routes';
import './database/index.js';


class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.server.use(express.json());
        this.server.use(cors());
    }
    // middleware - serve como ponte de comunicação entre o sistema operacional e as funções de um aplicativo
    routes() {

        // rota para teste
        // const routes = new Router();
        // routes.get('/hello', (req,res) => {
        //     res.json({hello: 'world'});
        // });

        this.server.use(routes);

    }

}


export default new App().server;