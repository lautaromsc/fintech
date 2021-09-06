
import { Request , Response } from 'express';
import { hexaToIso8583 } from '../services/iso8583';


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
}


export const fintechController = new FintechController();


