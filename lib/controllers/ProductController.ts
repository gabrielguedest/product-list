import * as mongoose from 'mongoose';
import { Product } from '../models/Product';
import { Request, Response } from 'express';

export class ProductController {
    public getProducts(req: Request, res: Response) {
        res.json({ route: "getProducts"});
    } 

    public addProduct(req: Request, res: Response) {
        res.json({ route: "addProducts" });
    }
}