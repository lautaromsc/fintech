import { Router } from 'express'

import usersController from '../controllers/users.controller';


class UsersRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', usersController.getUsers);
        this.router.get('/:id', usersController.getUserbyId)
        this.router.post('/', usersController.createUser)
        this.router.put('/:id', usersController.updateUser)
        this.router.delete('/:id', usersController.deleteUser)
    }
}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;

