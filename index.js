/*const nama ="Mochammad Avien Chiena";
let alamat = "Tebet";

console.log(nama);
console.log(alamat);

const numbers = [45,4,9,16,25];
for (let x in numbers){
    console.log(numbers[x])
}

const person ={fname:"John", lname:"Doe", age:25};

for(let x in person){
    console.log(person[x])
}

const cars = ["BMW","Volvo", "Mini"];
for(let x of cars){
    console.log(x)
}

let language = "JavaScript";
for(let x of language){
    console.log(x)
}*/

/*const names = ["azka","mike","famo","nia","aqshol"];
let nama = '';
let i = 0
while(i<names.length && nama !='nia'){
    nama = names[i];
    console.log(nama);
    i++;
}*/

/*let i=11;
if (i % 2 === 1){
    if (i>10){
        console.log('ganjil besar');
    } else {
        console.log('ganjil kecil');
    }
    console.log('ganjil');
}else{
    console.log('genap');
}*/

/*let nama = 'aqshol';
switch(nama){
    case 'aqshol':
        console.log('Ya Aqshol');
        break;


    default:
        console.log('Bukan Aqshol');
        break

}*/

// function tambah(angka1,angka2){
//     return angka1 + angka2;
// }

// const hasil = tambah(2,3)
//     console.log(hasil);

// function kurang(angka1,angka2){
//     return angka1 - angka2;
// }

// let angka1 = 5;
// let angka2 = 2;

// if(angka1 < angka2){
//     console.log(tambah(angka1,angka2));
// } else {
//     console.log(kurang(angka1,angka2));
// }

/*class User {
    constructor (name){
        this.name = name;
    }
    sayHi (){
        console.log(this.name);
    }
    getName(){
        return this.name;
    }
    
    setName(value){
        if(value.lenght <4){
            console.log("Name is too short");
            return;
        }
        this.name = value;
    }
}

let user = new User("John");
//user.sayHi();
user.setName('JohnDoe');
console.log(user.getName());
*/

/*class Animal {
    constructor(name){
        this.speed = 0;
        this.name = name;
    }

    run(speed){
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);

    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}


class Rabbit extends Animal{
    hide() {
        console.log(`${this.name} hides!`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} override stands still.`);
    }
}

let rabbit = new Rabbit("White Rabbit");
let animal = new Animal("Other Animal");
rabbit.run(5);
rabbit.hide();
*/

class CoffeeMachine {
  #waterLimit = 200;
  #fixWaterAmount(value) {
    if(value < 0) return 0;
    if (value > this.#waterLimit) {
      return this.#waterLimit;
    }else{
      return value;
    }
  }
  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value);
    
    return this.#waterLimit;
  }
}
let coffeeMachine = new CoffeeMachine();

console.log(coffeeMachine.setWaterAmount(150));
// tidak bisa mengakses property private dari sebuah class

// coffeeMachine.#fixWaterAmount(123); // Error
// coffeeMaching.#waterLimit = 1000; // Error
