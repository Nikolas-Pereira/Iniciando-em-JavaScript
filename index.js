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









    