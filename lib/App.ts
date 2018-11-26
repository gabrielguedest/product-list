import * as express from 'express';
import { Request ,Response } from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import * as path from 'path';

import { productRoutes } from './routes/ProductRoutes';

const keys = require('./config/keys');

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.configMongo();
        this.config();
        this.configRoutes();
    }

    private config(): void {
        this.app.use(express.static(path.join(__dirname, 'client/build')));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
    }

    private configRoutes(): void {
        this.app.use("/api", productRoutes);
        this.app.use('*', (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
        });
    }

    private configMongo(): void {
        mongoose
            .connect(keys.mongoURI, {
                useCreateIndex: true, 
                useNewUrlParser: true
            })
            .then(() => console.log("MongoDB iniciado"))
            .catch(err => console.log(err));
    }
}

export default new App().app;