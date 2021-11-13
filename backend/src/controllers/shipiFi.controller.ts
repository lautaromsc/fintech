
import { Request, Response } from 'express';
import { pool } from '../connections/postgresql';
import { hexaToIso8583 } from '../services/iso8583';
const jwt = require('jsonwebtoken');


class ShipiFiController {


    public async get(req: Request, res: Response): Promise<Response> {

        try {
            let uuid = require('uuid');

            let response = {
                status: true,
                errorCode: '00',
                msg: "Operacion correcta",
                data: {},
                transaccionId: uuid.v1(),
                timeStampnew: new Date().toLocaleDateString()
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
            //const { name, email, pwd } = req.body;

            //console.log(name)
            //console.log(email)
            //console.log(pwd)
            //const response = await pool.query('INSERT INTO users (name, email, pwd) values ($1, $2, $3)', [name, email, pwd]);
            //return res.json({
            //    message: 'User register successful',
            //    body: {
            //        user: {
            //            name,
            //            email
            //        }
            //    }
            //})
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
            //    return res.status(404).json({ text: "Usuario y/o contraseña incorrecta" })
            //}
        } catch (error) {
            console.log(error)
            return res.status(500).json("Internal Server Error")
        }
    }

}


export const shipiFiController = new ShipiFiController();


