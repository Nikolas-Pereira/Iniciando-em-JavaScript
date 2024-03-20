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

const serachInput = document.hetElementById('search-input');
const serachBrn = document.getElementById('serach-btn');

//adicionando evento ao clicar no botão de pesquisa
searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value;

});

searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const searchTerm = searchInput.value;
    }
})






    