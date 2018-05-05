export class Signup {

  id: any;
  name: string;
  address: string;
  phone: any;
  email: string;
  rr_num: string;
  meter_no: any;
  tariff: string;
  sanct_load: string;
  password:string;

  constructor(obj?: any) {
    this.id = obj && obj.id || 0;
    this.name = obj && obj.name || '';
    this.address = obj && obj.address || '';
    this.phone = obj && obj.phone || 0;
    this.email = obj && obj.email || '';
    this.rr_num = obj && obj.rr_num || '';
    this.meter_no = obj && obj.meter_no || 0;
    this.tariff = obj && obj.tariff || '';
    this.sanct_load = obj && obj.sanct_load || '';
    this.password = obj && obj.password || '';
  }
}

export class StatusRespons {

  state: any;
  message: string;
  constructor(obj1?:any) {
    this.state = obj1 && obj1.state || 15;
    this.message = obj1 && obj1.message || "Blank";
  }


}
