import * as mongoose from 'mongoose';
import { TransactionSchema } from '../models/transaction.model';
import { Request, Response } from 'express';

const Transaction = mongoose.model('Transaction', TransactionSchema);

export class TransactionController {
    public addNewTransaction (req: Request, res: Response): void {
        let newTransaction = new Transaction(req.body);

        newTransaction.save((err, transaction) => {
            if(err){
                res.send(err);
            }
            res.json(transaction);
        });
    }

    public getTransactions (req: Request, res: Response): void {
        Transaction.find({}, (err, transaction): void => {
            if(err){
                res.send(err);
            }
            res.json(transaction);
        });
    }

    public getTransactionByID (req: Request, res: Response): void {
        Transaction.findById(req.params.transactionId)
            .populate('sender')
            .populate('recipient')
            .populate('accountSender')
            .populate('accountRecipient')
            .populate('category')
            .exec((err, transaction) => {
            if(err){
                res.send(err);
            }
            res.json(transaction);
        });
    }

    public updateTransaction (req: Request, res: Response): void {
        Transaction.findOneAndUpdate({ _id: req.params.transactionId }, req.body, { new: true }, (err, transaction) => {
            if(err){
                res.send(err);
            }
            res.json(transaction);
        });
    }

    public deleteTransaction (req: Request, res: Response) {
        Transaction.remove({ _id: req.params.transactionId }, err => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted transaction.'});
        });
    }
}