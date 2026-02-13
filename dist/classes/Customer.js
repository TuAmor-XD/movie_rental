"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const CustomerDef_1 = require("./CustomerDef");
const dbconnection_1 = __importDefault(require("../db/dbconnection"));
class Customer extends CustomerDef_1.CustomerDef {
    constructor(firstname, lastname, phone) {
        super();
        this.setFirstName(firstname);
        this.setLastName(lastname);
        this.setPhone(phone);
    }
    getCustomerId() { return this.customerid; }
    getFirstName() { return this.firstname; }
    getLastName() { return this.lastname; }
    getPhone() { return this.phone; }
    setCustomerId(id) { this.customerid = id; }
    setFirstName(firstname) { this.firstname = firstname; }
    setLastName(lastname) { this.lastname = lastname; }
    setPhone(phone) { this.phone = phone; }
    async addCustomer() {
        const result = await dbconnection_1.default.query(`INSERT INTO customers (firstname, lastname, phone)
       VALUES ($1, $2, $3) RETURNING customerid`, [this.firstname, this.lastname, this.phone]);
        this.setCustomerId(result.rows[0].customerid);
        return this.getCustomerId();
    }
}
exports.Customer = Customer;
