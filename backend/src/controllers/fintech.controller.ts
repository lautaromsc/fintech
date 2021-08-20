
import { Request , Response } from 'express';


class FintechController {

   
    public async get (req: Request, res: Response): Promise<Response> {

        try {

            return res.status(200).json(`JUAN SE LA COME`)
           
        } catch (error) {
            console.log(error)
            return res.status(500).json("Internal Server Error")
        }

    }


    public async getIsoMap (req: Request, res: Response): Promise<Response>{
        try {



            const iso8583 = require('iso_8583');
            let data = {
                0: "0100",
                2: "4761739001010119",
                3: "000000",
                4: "000000005000",
                7: "0911131411",
                12: "131411",
                13: "0911",
                14: "2212",
                18: "4111",
                22: "051",
                23: "001",
                25: "00",
                26: "12",
                32: "423935",
                33: "111111111",
                35: "4761739001010119D22122011758928889",
                41: "12345678",
                42: "MOTITILL_000001",
                43: "My Termianl Business                    ",
                49: "404",
                52: "7434F67813BAE545",
                56: "1510",
                123: "91010151134C101",
                127: "000000800000000001927E1E5F7C0000000000000000500000000000000014A00000000310105C000128FF0061F379D43D5AEEBC8002800000000000000001E0302031F000203001406010A03A09000008CE0D0C840421028004880040417091180000014760BAC24959"
            };
             
            let customFormats = {
                '3': {
                  ContentType: 'n',
                  Label: 'Processing code',
                  LenType: 'fixed',
                  MaxLen: 9
                }
              };
             
            let isopack = new iso8583(data,customFormats);

            console.log(req.params.numero);
            const id = parseInt(req.params.numero)

            if (req.params.numero.length > 0) {
                return res.status(200).json( isopack.getBitMapFields() )
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


