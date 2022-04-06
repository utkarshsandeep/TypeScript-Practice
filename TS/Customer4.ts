export class Customer4{
    constructor(private _fname:string, private _lname:string){

    }

    public set firstn(first: string){
        this._fname=first;
    }
    public get firstn(): string{
        return this._fname;
    }
}