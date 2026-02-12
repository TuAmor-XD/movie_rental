export abstract class CustomerDef {
  protected customerid!: number;
  protected firstname!: string;
  protected lastname!: string;
  protected phone!: string;

  abstract getCustomerId(): number;
  abstract getFirstName(): string;
  abstract getLastName(): string;
  abstract getPhone(): string;

  abstract setCustomerId(id: number): void;
  abstract setFirstName(firstname: string): void;
  abstract setLastName(lastname: string): void;
  abstract setPhone(phone: string): void;

  abstract addCustomer(): Promise<number>;
}
