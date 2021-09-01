const cISO8583 = require('ciso8583');
let iso8583Parser = new cISO8583();

export const hexaToIso8583 = (hexa:string):any => {

    let unpacked = iso8583Parser.unpack(hexa);
    console.log(unpacked);
    return unpacked;
}
