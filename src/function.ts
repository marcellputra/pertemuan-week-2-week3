function sapa(nama:string){
    console.log("Halo, aku" + nama);
    
}
sapa("Marcell!")

function calculate (a:number, b:number, c:number):number{
    return a + b + c
}
let hasil : number = calculate(3, 5, 1)
console.log("hasil penjumlahan: " + hasil);

//Arrow Function
let multiplication = (x:number, y:number) => {
    return x * y 
}
let result = multiplication(5,8) 
console.log("hasil perkalian: "+ result);

//soal Function Expression
function cube1 (num:number):number{
    return num ** 3
}
let hasilnya: number = (3)
console.log("hasil dipangkatkan tiga: " + hasilnya);

let cube = function (num:number){
    return num ** 3
}
console.log(cube(3));


//soal Function Greet
function greet(name:string){
    console.log("Hello" + name);
}
greet(" Marcell! ")

//soal arrow function
let mutiply = (a:number, y:number)=>{
    return x * y 
}


//object

let person2: {
    name: string,
    age: number,
    address: string
}
person2 = {
    name: "Marcell Mardiana",
    age: 20,
    address: "Tegal"
}
console.log(person2);


 
