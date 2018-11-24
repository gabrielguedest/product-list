import { Application, Router, Request, Response } from 'express';

import { ProductController } from '../controllers/ProductController';

class ProductRoutes {
    public router: Router = Router();
    public productController: ProductController = new ProductController();

    constructor() {
        this.config();
    }

    public config(): void {
        this.router.get('/products', this.productController.getProducts);
        this.routeer.post('/products', this.productController.addProducts);
    }
}

export const productRoutes = new ProductRoutes().router;