export abstract class Shape {
    constructor (private _x:number, private _y:number){

    }

    public get X(): number{
        return this._x;
    }

    public get Y(): number{
        return this._y;
    }

    public set X(x:number){
        this._x=x;
    }

    public set Y(y:number){
        this._y=y;
    }

    getInfo(): string{
        return `x= ${this._x} and y= ${this._y}`;
    }

    abstract calculateArea(): number;

}