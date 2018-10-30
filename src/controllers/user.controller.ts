import * as mongoose from 'mongoose';
import { UserSchema } from '../models/user.model';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);

export class UserController {
    public addNewUser (req: Request, res: Response): void {
        let newUser = new User(req.body);

        newUser.save((err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public getUsers (req: Request, res: Response): void {
        User.find({}, (err, user): void => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public getUserByID (req: Request, res: Response): void {
        User.findById(req.params.userId, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public updateUser (req: Request, res: Response): void {
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public deleteUser (req: Request, res: Response) {
        User.remove({ _id: req.params.contactId }, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted user.'});
        });
    }
}