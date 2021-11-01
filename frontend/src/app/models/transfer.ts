//import * as moment from 'moment';

export interface iTransfer {
  id?: string;
  from_cvu?: string;
  to_cvu?: string;
}

export class Transfer  {
  id?: string;
  from_cvu?: string;
  to_cvu?: string;

  constructor() {

  }

  matList(obj: Transfer[]): Transfer[] {
    const objArray: Transfer[] = [];
    obj.forEach((objeto) => {
      const obj = new Transfer();
      obj.id = objeto.id;
      obj.from_cvu = objeto.from_cvu;
      obj.to_cvu = objeto.to_cvu;
      objArray.push(obj);
    });
    return objArray;
  }



}
