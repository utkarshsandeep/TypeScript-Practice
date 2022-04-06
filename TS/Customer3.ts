class Customer3{
    private _firstname: string;
    private _lastname: string;

    public get firstn(): string{
        return this._firstname;
    }

    public set firstn(first: string){
        this._firstname=first;
    }
    constructor(first: string, last:string){
        this._firstname = first;
        this._lastname=last;
    }
}

//Use
let object3 = new Customer3("C","D");
object3.firstn="Brook";
console.log(object3.firstn);
// compile code : tsc --target ES5 --noEmitOnError Customer3.ts