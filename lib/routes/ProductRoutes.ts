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
        this.router.post('/products', this.productController.addProduct);
        this.router.put('/products/:id', this.productController.editProduct);
        this.router.delete('/products/:id', this.productController.deleteProduct);
    }
}

export const productRoutes = new ProductRoutes().router;