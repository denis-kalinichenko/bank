import * as mongoose from 'mongoose';
import { AccountSchema } from '../models/account.model';
import { Request, Response } from 'express';

const Account = mongoose.model('Account', AccountSchema);

export class AccountController {
    public addNewAccount (req: Request, res: Response): void {
        let newAccount = new Account(req.body);

        newAccount.save((err, account) => {
            if(err){
                res.send(err);
            }
            res.json(account);
        });
    }

    public getAccounts (req: Request, res: Response): void {
        Account.find({}, (err, account): void => {
            if(err){
                res.send(err);
            }
            res.json(account);
        });
    }

    public getAccountByID (req: Request, res: Response): void {
        Account.findById(req.params.accountId).populate('user').exec((err, account) => {
            if(err){
                res.send(err);
            }
            res.json(account);
        });
    }

    public updateAccount (req: Request, res: Response): void {
        Account.findOneAndUpdate({ _id: req.params.accountId }, req.body, { new: true }, (err, account) => {
            if(err){
                res.send(err);
            }
            res.json(account);
        });
    }

    public deleteAccount (req: Request, res: Response) {
        Account.remove({ _id: req.params.accountId }, err => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted account.'});
        });
    }
}