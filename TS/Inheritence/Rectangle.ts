import { Shape } from "./Shape";

export class Rectangle extends Shape{
    constructor(X: number, Y: number, private _length: number, private _width: number){
        super(X,Y);
    }

    getInfo(): string {
        return super.getInfo() + ` length = ${this._length} and width = ${this._width}`;
    }

    calculateArea(): number {
        return this._length*this._width;
    }
}