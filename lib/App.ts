import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

import { productRoutes } from './routes/ProductRoutes';

class App {

    public app: express.Application;
    public mongoUrl: string: 'mongodb://localhost:27017/teste';

    constructor() {
        this.app = express();
        this.config();
        this.configRoutes();
        this.configMong();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private configRoutes(): void {
        this.app.use("/api", productRoutes);
    }

    private configMongo(): void {
        mongoose
            .connect(this.mongoUrl, {useNewUrlParser: true})
            .then(() => "MongoDB iniciado")
            .catch(err => console.log(err));
    }
}

export default new App().app;