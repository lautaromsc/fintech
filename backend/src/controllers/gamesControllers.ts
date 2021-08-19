import  { Request, Response } from 'express';

import pool from '../connections/database'

class GamesController {

    public async list(req: Request, res: Response) {
        const games = await pool.query('SELECT * FROM games');
        res.json(games);
    } 

    public async getOne (req: Request, res: Response)  { 
        const { id } = req.params;
        console.log(id)
        const game = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
        if (game.length > 0){
            return res.json(game[0]);
        }
        res.status(404).json({text: "El juego no existe"});
    }

    public async create (req: Request, res: Response): Promise<void> { 
        console.log(req.body);
        await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({message: 'Juego guardado'});
    }

    public async update (req: Request, res: Response): Promise<void>  { 
        //res.json({text: 'actualizando un juego ' + req.params.id });
        const { id } = req.params;
        await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id] )
        res.json({message: 'El juego ' + id + ' fue actualizado'})
    }

    public async delete (req: Request, res: Response): Promise<void> { 
        //res.json({text: 'Deleting a game ' + req.params.id });
        const { id } = req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [id] )
        res.json({message: 'La data del juego ' + id + ' fue borradada'})
    }



}

export const gamesController = new GamesController();
export default gamesController;