class Customer2{
    private firstname1: string;
    private lastname1: string;

    public getFirstName(): string {
        return this.firstname1;
    }

    public setFirstName(first: string): void{
        this.firstname1=first;
    }

    constructor(first: string, last:string){
        this.firstname1 = first;
        this.lastname1=last;
    }
}

//Use
let object2 = new Customer2("A","B");
object2.setFirstName("hello");
console.log(object2.getFirstName());

//Compile code: tsc --noEmitOnError Customer2.ts