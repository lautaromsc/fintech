
import { Request, Response } from 'express';
import { pool } from '../connections/postgresql';
import { hexaToIso8583 } from '../services/iso8583';
const jwt = require('jsonwebtoken');


class ShipiFiController {


    public async get(req: Request, res: Response): Promise<Response> {

        try {
            const seguimiento = req.params.seguimiento;
            console.log(seguimiento);

            const exist = await pool.query('SELECT * FROM pagos_informados where seguimiento = $1', [seguimiento]);
            console.log(exist);

            let response = {
                ...exist
            }

            return res.status(200).json(response)

        } catch (error) {
            console.log(error)
            return res.status(500).json("Internal Server Error")
        }

    }

    public async informarPago(req: Request, res: Response): Promise<Response> {

        try {
            console.log("LLEGOOOOOO informarPago")
            console.log(req.body)
            const { email } = req.body;
            const paid = true
            const response = await pool.query('INSERT INTO pagos_informados (email, pago) values ($1, $2, $3)', [email, paid]);
            console.log(response)

            return res.json({
                message: 'Informed payment',
                body: {
                    payment: {
                        email,
                        paid
                    }
                }
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json("Internal Server Error")
        }
    }

    public async obtenerEstadoPago(req: Request, res: Response): Promise<Response> {

        try {
            console.log("LLEGOOOOOO OBTENER ESTADO PAGO")
            //let name = req.body.username;
            //let pwd = req.body.password;

            //console.log(name);
            //console.log(pwd);
            //const exist = await pool.query('SELECT * FROM users where name = $1 and pwd = $2', [name, pwd]);
            //if (exist.rowCount > 0) {
            //    const token = jwt.sign({ name, pwd }, 'test')
            //    return res.status(200).json({
            //        message: token,
            //        body: exist.rows[0].ID
            //    });
            //} else {
            //    return res.status(404).json({ text: "Usuario y/o contrase�a incorrecta" })
            //}
        } catch (error) {
            console.log(error)
            return res.status(500).json("Internal Server Error")
        }
    }

}


export const shipiFiController = new ShipiFiController();


