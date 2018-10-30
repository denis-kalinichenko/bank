import {Request, Response} from "express";

import { UserController } from "../controllers/user.controller";
import { AccountController } from "../controllers/account.controller";
import { TransactionController } from "../controllers/transaction.controller";
import { CategoryController } from "../controllers/category.controller";

export class Routes {
    public userController: UserController = new UserController();
    public accountController: AccountController = new AccountController();
    public transactionController: TransactionController = new TransactionController();
    public categoryController: CategoryController = new CategoryController();

    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'Bank API'
                })
            });

        // User
        app.route('/user')
            .post(this.userController.addNewUser)
            .get(this.userController.getUsers);

        app.route('/user/:userId')
            .get(this.userController.getUserByID)
            .put(this.userController.updateUser)
            .delete(this.userController.deleteUser);

        // Account
        app.route('/account')
            .post(this.accountController.addNewAccount)
            .get(this.accountController.getAccounts);

        app.route('/account/:accountId')
            .get(this.accountController.getAccountByID)
            .put(this.accountController.updateAccount)
            .delete(this.accountController.deleteAccount);

        // Transaction
        app.route('/transaction')
            .post(this.transactionController.addNewTransaction)
            .get(this.transactionController.getTransactions);

        app.route('/transaction/:transactionId')
            .get(this.transactionController.getTransactionByID)
            .put(this.transactionController.updateTransaction)
            .delete(this.transactionController.deleteTransaction);

        // Category
        app.route('/category')
            .get(this.categoryController.getCategories);

        app.route('/category/:categoryId')
            .get(this.categoryController.getCategoryByID);
    }
}