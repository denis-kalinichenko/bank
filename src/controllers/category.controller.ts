import * as mongoose from 'mongoose';
import { CategorySchema } from '../models/category.model';
import { Request, Response } from 'express';

const Category = mongoose.model('Category', CategorySchema);

export class CategoryController {
    public getCategories (req: Request, res: Response): void {
        Category.find({}, (err, categories): void => {
            if(err){
                res.send(err);
            }
            res.json(categories);
        });
    }

    public getCategoryByID (req: Request, res: Response): void {
        Category.findById(req.params.categoryId, (err, category) => {
            if(err){
                res.send(err);
            }
            res.json(category);
        });
    }
}