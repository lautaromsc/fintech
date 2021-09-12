import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path'

import indexRoutes from './routes/index-routes';
import usersRoutes from './routes/users-routes';
import litigiosRoutes from './routes/litigios.routes';
import fintechRoutes from './routes/fintech.routes';


class Server {

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'))     // this allow view the log request in the server console, it only a development dependencies
        this.app.use(cors());           // this allows angular makes request to this server
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));    
        this.app.use(express.static(path.join(__dirname, 'front')));
    }


    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/users', usersRoutes)
        this.app.use('/api/litigios', litigiosRoutes)
        this.app.use('/api/fintech', fintechRoutes)
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port`, this.app.get('port'))
        })
    }

}

const server = new Server();
server.start();