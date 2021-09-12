
import { Request , Response } from 'express';
import { pool } from '../connections/postgresql';
import { QueryResult } from 'pg';


class UsersController {


    public async getUsers (req: Request, res: Response): Promise<Response> {
        try {
            const response: QueryResult = await pool.query('SELECT * FROM public."users"');
            if (response.rowCount > 0) {
                return res.status(200).json(response.rows)
            } else {
                return res.status(404).json({text: "No hay usuarios"})
            }
           
        } catch (error) {
            console.log(error)
            return res.status(500).json("Internal Server Error")
        }
    }
    
    public async getUserbyId (req: Request, res: Response): Promise<Response>{
        try {
    
            console.log(req.params.id);
            const id = parseInt(req.params.id)
            const response: QueryResult = await pool.query('SELECT * FROM users where id = $1', [id]);
            if (response.rowCount > 0) {
                return res.status(200).json(response.rows)
            } else {
                return res.status(404).json({text: "El usuario no existe"})
            }
           
           
        } catch (error) {
            console.log(error)
            return res.status(500).json("Internal Server Error")
        }
    }

    public createUser = async(req: Request, res: Response): Promise<Response> => {
        try {
            console.log(req.body)
            const { name, email} = req.body;
    
            const response: QueryResult = await pool.query('INSERT INTO users (name, email) values ($1, $2)', [name, email]);
            return res.json({
                message: 'User create succesfull', 
                body: {
                    user: {
                        name,
                        email
                    }
                }
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json("Internal Server Error")
        }
    }
    
    
    public deleteUser = async(req: Request, res: Response): Promise<Response> => {
    
        try {
            const id = parseInt(req.params.id);
            const response: QueryResult = await pool.query('DELETE FROM users WHERE id = $1', [id]);
            return res.status(200).json(`User ${id} deleted successfully`)
           
        } catch (error) {
            console.log(error)
            return res.status(500).json("Internal Server Error")
        }
    }

    public updateUser = async(req: Request, res: Response): Promise<Response> => {

        try {
            const id = parseInt(req.params.id);
            const { name, email} = req.body;
    
            const response: QueryResult = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 ', [name, email, id]);
            return res.status(200).json(`User ${id} update successfully`)
           
        } catch (error) {
            console.log(error)
            return res.status(500).json("Internal Server Error")
        }
    }
    

}


const usersController = new UsersController();
export default usersController; // se esta exportando la instancia no la clase
