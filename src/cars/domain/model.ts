/* Model of the app decoupled of DB */

export class Cars {
    public readonly id: string;
    public readonly brand: string;
    public readonly model: string;
    public readonly year: string;
    public readonly fuel: string;

    constructor({
        _id,
        brand,
        model,
        year,
        fuel
    }) {
        this.id = _id;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.fuel = fuel;
    }
}