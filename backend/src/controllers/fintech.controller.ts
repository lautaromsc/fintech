
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
                message: 'User register successful', 
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
            let name = req.body.username;
            let pwd = req.body.password;

            console.log(name);
            console.log(pwd);
            const exist = await pool.query('SELECT * FROM users where name = $1 and pwd = $2', [name, pwd]);
            if (exist.rowCount > 0) {
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

    public async createTransfer (req: Request, res: Response): Promise<Response>{
        try {
            let { fromCvu, toCvu, amount } = req.body;
            console.log(fromCvu);
            console.log(toCvu);
            console.log(amount);
            // ORIGEN
            const accountFrom = await pool.query('SELECT * FROM accounts where cvu = $1', [fromCvu]);
            console.log(accountFrom);
            if(!accountFrom[0]){
                return res.json({
                    message: 'La cuenta de origen no existe.', 
                }) 
            }
            if(accountFrom[0].amount < amount){
                return res.json({
                    message: 'Saldo de cuenta origen insuficiente.', 
                })
            }
            // DESTINO
            const accountTO = await pool.query('SELECT * FROM accounts where cvu = $1', [toCvu]);
            console.log(accountTO);
            if(!accountTO[0]){
                return res.json({
                    message: 'La cuenta de destino no existe.', 
                })
            }
            const newAmountFrom = accountFrom[0].amount - amount;
            await pool.query('UPDATE accounts SET amount = $1 WHERE cvu = $2', [newAmountFrom, fromCvu]);
            const newAmountTO = accountTO[0].amount + amount;
            await pool.query('UPDATE accounts SET amount = $1 WHERE cvu = $2', [newAmountTO, toCvu]);

            // REGISTRA MOVIMIENTO DE CUENTAS
            const response = await pool.query('INSERT INTO transfers (from_cvu, to_cvu, amount) values ($1, $2, $3)', [fromCvu, toCvu, amount]);
            console.log(response)
            return res.json({
                message: 'Transfer successful', 
                body: {
                    transfer: {
                        fromCvu,
                        toCvu,
                        amount
                    }
                }
            })
        } catch (error) {
            return res.status(403).json({text: "unauthorized."})
        }

    }

    public async getTransfer (req: Request, res: Response): Promise<Response>{
        try {
            let { cvu } = req.params;
            console.log(cvu);
            const transfersSend = await pool.query('SELECT * FROM transfer where from_cvu = $1', [cvu]);
            console.log(transfersSend);
            const transfersReceived = await pool.query('SELECT * FROM transfer where to_cvu = $1', [cvu]);
            console.log(transfersReceived);
            return res.json({
                message: 'Transfer successful', 
                body: {
                    transfersSend: {
                        ...transfersSend
                    },
                    transfersReceived: {
                        ...transfersReceived
                    }
                }
            })
        } catch (error) {
            return res.status(403).json({text: "unauthorized."})
        }
    }

    public async createAccount (req: Request, res: Response): Promise<Response>{
        try {
            let { userId } = req.params;
            console.log(userId);
            
            const cvu =`00000277${Math.floor(1000000000000 + Math.random() * 9000000000000)}`;
            console.log(cvu);
            const words = ["hola", "zorro", "kilogramo","viento", "diente", "cabello", "fuego", "lluvia", "manteca", "salchicha", "milanesa", "papu", "maestro", "choclo", "pierna", "sanguche", "mandrina", "mesa", "termo", "pensamiento", "vaso", "celular", "lapicera", "auricular", "monitor", "dragon", "trifuerza", "hombre", "mujer", "araña"]
            const alias = `${words[Math.floor(Math.random()*words.length)]}.${words[Math.floor(Math.random()*words.length)]}.${words[Math.floor(Math.random()*words.length)]}`;
            console.log(alias);
            const response = await pool.query('INSERT INTO transfers (cvu, alias, amount) values ($1, $2, $3)', [cvu, alias, '10000']);
            console.log(response);
            return res.json({
                message: 'accounts created', 
                body: {
                    ...response
                }
            })
        } catch (error) {
            return res.status(403).json({text: "unauthorized."})
        }
    }

    public async getAccount (req: Request, res: Response): Promise<Response>{
        try {
            let { userId } = req.params;
            console.log(userId);
            const response = await pool.query('SELECT * FROM accounts where userid = $1', [userId]);
            console.log(response);
            return res.json({
                message: 'accounts created', 
                body: {
                    ...response
                }
            })
        } catch (error) {
            return res.status(403).json({text: "unauthorized."})
        }
    }


}


export const fintechController = new FintechController();


