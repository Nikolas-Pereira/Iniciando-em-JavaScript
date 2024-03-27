console.log("JavaScript funcionando!")

let firstName= 'Nikolas'
let lastName= 'Pereira'

console.log(firstName+lastName) 

let age = 27
age = 30

console.log(age)

let itemName = "pen"
let price = 3.99;
let itemAvaliable = true;    
let itemColor = null;

console.log(typeof price)
console.log(itemName,itemAvaliable,itemColor)

let pen = {
    itemName: 'pen',
    Price: 3.99,
    itemAvaliable: true, 
    itemColor: 'red'
}

pen.itemColor = 'blue'

console.log(pen)
console.log(pen.itemName)


//arrays
let cars = ['BMW', 'Uno', 'Celta']
console.log(cars[0])
cars[1] = 'Fusca'
console.log(cars)

//functions
function saleStatus(status, total){

    console.log('Transition: ' + status +'Total Amount $' + total)
        
}

saleStatus('Approved', 200)

function productDiscount(discount, total){
   
    return total-total*discount/100 
}  

console.log(productDiscount(15, 200))

function productFees(fees, total)
{
    return total+total*fees/100

}
console.log(productFees(10, 200))

let num1 = 1;
let num2 = 2;

console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)
console.log(num1%num2)
console.log(num1**num2)
console.log(Math.sqrt(25))

//operadores de atribuição

let num3 = 10;
console.log(num3 +=20); 
console.log(num3 -=20);
console.log(num3 *=20);
console.log(num3 /=20);

//operadores de comparação

let num4 = 10;

console.log(num4 > 0);
console.log(num4 < 0);
console.log(num4 >= 10);
console.log(num4 <= 10);
console.log(num4 == 10);

console.log(num4 != 10); //diferente ou igual

//operadores igualdade

let num5 = 1;
let num6 = '1';

console.log(num5 == num6);
console.log(num5 === num6); //identificar se o valor e o tipo são iguais

//operadores ternários

let driver = 120
let speed = driver>120 ? "aboove" : "below"

console.log(speed)

//operadores lógicos com strings

let temIdadeMinima = false;
let temTituloEleitor = true;

let podeVotar = temIdadeMinima && temTituloEleitor;

console.log(podeVotar);

let podeViajar = !podeVotar; //igual ou inverso

console.log(podeViajar);

let corCliente = undefined
let corEstoque = "black"
let corVendida = corCliente || corEstoque

console.log(corVendida)



//Precedência de operadores

let num7 = (3 + 4) * 2
console.log(num7)

//If....Else

let driverSpeed = 59

if(driverSpeed > 120){
    console.log("Above speed limit")
}

else if(driverSpeed >= 120 && driverSpeed <= 130){
    console.log(" Normaly speed limit")
    
}

else {
    console.log("Below speed limit")
}

//Switch case

let airPortName="GRU"

switch(airPortName){
    case "MCO":
        console.log("Orlando International Airport")
        break
    case "GRU":
        console.log("São Paulo-Guarulhos International Airport")
        break
    case "LAX":
        console.log("Los Angeles International Airport")
        break
    case "LHR":
        console.log("London Heathrow Airport")
        break
    case "LAS":
        console.log("Las Vegas International Airport")
        break   
    default:
        console.log("Airport not found")
        break
}

//for loop

for(i=1; i<=10; i++) {

    console.log("Número: ", i)
}

//while loop

// let index = 1
// while(index<=10){

//     console.log("Número: ", index)
//     index++
//}

//di while loop 

let index=1
    do{
        console.log("número: " ,index);
        index++;
    } 
    while (index<=10)

//for in loop

const myCar = {
    model: 'Chevrolet',
    year: 2012,
    color: 'black',
    km: 116000

}

for(let key in myCar){
    console.log(key, myCar[key])
}


