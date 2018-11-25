import * as mongoose from 'mongoose';
import { Product } from '../models/Product';
import { Request, Response } from 'express';

import { validateProductInput, validateProductPut } from '../validation/product';

export class ProductController {
    public getProducts(req: Request, res: Response) {
        const limit = parseInt(req.query.limit) || 5;
        const page = req.query.page || 1;
        const skip = limit * page - limit;
        const query = req.query.query || "";

        const finalQuery = { "name": {$regex: query, $options: 'i'}};
      
        Product.countDocuments(finalQuery)
            .then(response => {
                const pageTotal = Math.ceil(response / limit);
                const totalItem = response;
            
                Product.find(finalQuery)
                    .skip(skip)
                    .limit(limit)
                    .then(result =>
                        res.json({
                            result: result,
                            currentPage: page,
                            pages: pageTotal,
                            results: totalItem
                        })
                    )
                    .catch(err => res.status(500));
            });
    } 

    public addProduct(req: Request, res: Response) {
        const { errors, isValid }: any = validateProductInput(req.body);

        if(!isValid) {
            return res.status(400).json(errors);
        }
        
        const newProduct = new Product(req.body);

        newProduct
            .save()
            .then(result => {
                res.status(200).json({result});
            })
            .catch(err => res.status(500));
    }

    public editProduct(req: Request, res: Response) {
        const { errors, isValid }: any = validateProductPut(req.body);

        if(!isValid) {
            return res.status(400).json(errors);
        }
        
        const product: any = {};

        if(req.body.name) product.name = req.body.name;
        if(req.body.price) product.price = req.body.price;
        if(req.body.discount) product.discount = req.body.discount;
        if(req.body.images) product.images = req.body.images;
        if(req.body.category) product.category = req.body.category;
        if(req.body.keywords) product.keywords = req.body.keywords;

        Product.findOneAndUpdate(
            { _id: req.params.id }, 
            { $set: product }, 
            { new: true }
        )
            .then(product => {
                res.status(200).json(product);
            })
            .catch(err => res.status(500));
    }

    public deleteProduct(req: Request, res: Response ) {
        Product.findOneAndRemove({ _id: req.params.id })
        .then(() => res.json({ success: true }))
        .catch(err => res.status(500));
    }
}