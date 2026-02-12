import { CustomerDef } from "./CustomerDef";
import pool from "../db/dbconnection";

export class Customer extends CustomerDef {
  constructor(firstname: string, lastname: string, phone: string) {
    super();
    this.setFirstName(firstname);
    this.setLastName(lastname);
    this.setPhone(phone);
  }

  getCustomerId(): number { return this.customerid; }
  getFirstName(): string { return this.firstname; }
  getLastName(): string { return this.lastname; }
  getPhone(): string { return this.phone; }

  setCustomerId(id: number): void { this.customerid = id; }
  setFirstName(firstname: string): void { this.firstname = firstname; }
  setLastName(lastname: string): void { this.lastname = lastname; }
  setPhone(phone: string): void { this.phone = phone; }

  async addCustomer(): Promise<number> {
    const result = await pool.query(
      `INSERT INTO customers (firstname, lastname, phone)
       VALUES ($1, $2, $3) RETURNING customerid`,
      [this.firstname, this.lastname, this.phone]
    );
    this.setCustomerId(result.rows[0].customerid);
    return this.getCustomerId();
  }
}
