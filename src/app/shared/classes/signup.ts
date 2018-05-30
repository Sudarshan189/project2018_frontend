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


export class KWHUpdate {
  rr_num: any;
  current: any;
  voltage: any;
  kwh: any;
  updated_at: any;

  constructor(obj2?:any) {
    this.rr_num = obj2 && obj2.rr_num || " ";
    this.current = obj2 && obj2.current || "0";
    this.voltage = obj2 && obj2.voltage || "0";
    this.kwh = obj2 && obj2.kwh || "0";
    this.updated_at = obj2 && obj2.updated_at || " ";
  }
}

export class Bill {
  rr_num: any;
  account_id: any;
  mtr_read_code: any;
  name: any;
  address : any;
  tariff: any;
  sanct_load: any;
  from_date: any;
  to_date: any;
  reading_date: any;
  bill_num: any;
  meter_sl_num: any;
  present_read: any;
  previous_read: any;
  constant: any;
  consumption: any;
  average: any;
  recorded_md: any;
  power_factor: any;
   rebates_tod_charges : any;
   pf_penalty : any;
   ex_load_md_penalty : any;
   interest : any;
   others : any;
   tax : any;
   current_bill_amt : any;
   arrears : any;
   credits_adj : any;
   gov_subsidy : any;
   net_amt_due : string;
   due_date :  any;
   paid : boolean;
   email: any;
   phone: any;

   constructor(obj3?:any) {
    this.rr_num = obj3 && obj3.rr_num || " ";
    this.account_id = obj3 && obj3.account_id || " ";
    this.mtr_read_code = obj3 && obj3.mtr_read_code || " ";
    this.name = obj3 && obj3.name || " ";
    this.address = obj3 && obj3.address || " ";
    this.tariff = obj3 && obj3.tariff || " ";
    this.sanct_load = obj3 && obj3.sanct_load || " ";
    this.from_date = obj3 && obj3.from_date || " ";
    this.to_date = obj3 && obj3.to_date || " ";
    this.reading_date = obj3 && obj3.reading_date || " ";
    this.bill_num = obj3 && obj3.bill_num || " ";
    this.meter_sl_num = obj3 && obj3.meter_sl_num || " ";
    this.present_read = obj3 && obj3.present_read || " ";
    this.previous_read = obj3 && obj3.previous_read || " ";
    this.constant = obj3 && obj3.constant || " ";
    this.consumption = obj3 && obj3.consumption || " ";
    this.average = obj3 && obj3.average || " ";
    this.recorded_md = obj3 && obj3.recorded_md || " ";
    this.power_factor = obj3 && obj3.power_factor || " ";
    this.rebates_tod_charges = obj3 && obj3.rebates_tod_charges || " ";
    this.pf_penalty = obj3 && obj3.pf_penalty || " ";
    this.ex_load_md_penalty = obj3 && obj3.ex_load_md_penalty || " ";
    this.interest = obj3 && obj3.interest || " ";
    this.others = obj3 && obj3.others || " ";
    this.tax = obj3 && obj3.tax || " ";
    this.current_bill_amt = obj3 && obj3.current_bill_amt || " ";
    this.arrears = obj3 && obj3.arrears || " ";
    this.credits_adj = obj3 && obj3.credits_adj || " ";
    this.gov_subsidy = obj3 && obj3.gov_subsidy || " ";
    this.net_amt_due = obj3 && obj3.net_amt_due || " ";
    this.due_date = obj3 && obj3.due_date || " ";
    this.paid = obj3 && obj3.paid || false;
    this.email = obj3 && obj3.email || " ";
    this.phone = obj3 && obj3.phone || 0;
  }
}

export class Switch {
rr_num: any;
socket_id: any;
soc_status: any;
updated_at: any;

constructor(obje?:any) {
  this.rr_num = obje && obje.rr_num || " ";
  this.socket_id = obje && obje.socket_id || " ";
  this.soc_status = obje && obje.soc_status || " ";
  this.updated_at = obje && obje.updated_at || " ";
}

}
