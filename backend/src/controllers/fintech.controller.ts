
import { Request , Response } from 'express';
import { pool } from '../connections/postgresql';
import { hexaToIso8583 } from '../services/iso8583';
const jwt = require('jsonwebtoken');


class FintechController {

   
    public async get (req: Request, res: Response): Promise<Response> {

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


    public async getIsoMap (req: Request, res: Response): Promise<Response>{

        try {
            let hexToBinary = require('hex-to-binary');
            let hexString = req.params.numero;
            console.log(req.params.numero);
            console.log(hexToBinary(hexString));
            hexaToIso8583(hexString);
            const id = parseInt(req.params.numero)
            let responseArray = []; // empty Object
            responseArray.push(hexToBinary(hexString));
            responseArray.push(hexaToIso8583(hexString));

            if (req.params.numero.length > 0) {
                return res.status(200).json(responseArray)
            } else {
                return res.status(404).json({text: "Numero Invalido"})
            }
        } catch (error) {
            console.log(error)
            return res.status(500).json("Internal Server Error")
        }
    }

    public async register (req: Request, res: Response): Promise<Response>{

        try {
            console.log(req.body)
            const { name, email, pwd} = req.body;
            console.log(name)
            console.log(email)
            console.log(pwd)
            const response = await pool.query('INSERT INTO users (name, email, pwd) values ($1, $2, $3)', [name, email, pwd]);
            return res.json({
                message: 'User register succesfull', 
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

    public async login (req: Request, res: Response): Promise<Response>{

        try {
            let name = req.body.name;
            let pwd = req.body.pwd;
            const exist = await pool.query('SELECT * FROM users where name = $1 and pwd = $2', [name, pwd]);
            if (exist){
                const token = jwt.sign({name, pwd}, 'test')
            return res.status(200).json(token);
            } else {
                return res.status(404).json({text: "Usuario y/o contraseña incorrecta"})
            }
        } catch (error) {
            console.log(error)
            return res.status(500).json("Internal Server Error")
        }
    }

    public async verify (req: Request, res: Response): Promise<Response>{

        try {
            let token = req.body.token;
            console.log(token);
            const verify = await jwt.verify(token, 'test')
            console.log(verify)
            return res.status(200).json({ok: 'ok'});
        } catch (error) {
            return res.status(403).json({text: "Token Invalido, loguearse."})
        }
    }

}


export const fintechController = new FintechController();


