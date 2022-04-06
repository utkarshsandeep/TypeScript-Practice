class Customer {
    public firstname: string;
    public lastname: string;

    constructor(first: string, last:string){
        this.firstname = first;
        this.lastname=last;
    }
}

//Use
let object = new Customer("Peter", "Parker");
console.log(object.firstname);
console.log(object.lastname);