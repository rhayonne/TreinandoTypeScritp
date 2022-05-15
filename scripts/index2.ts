const principal = document.getElementById('principal');
const p = document.createElement("p");
p.textContent = 'Hello Wolrd';
principal?.appendChild(p);

let itxt1 = document.getElementById('text1')
let resultat = document.getElementById('res');
let vlr1 = document.getElementById('num1');

let vlr2 = document.getElementById('num2');

let vl1: number = Number(itxt1.value); //convertion du valeur string à number
var num1: number = Number(vlr1.value); //convertion du valeur string à number
var num2: number = Number(vlr2.value); //convertion du valeur string à number




console.log(typeof (vlr1.value));


function calculer(num1: number, num2: number) {
    let res: number;
    var num1: number = Number(vlr1.value); 
    var num2: number = Number(vlr2.value); 
    res = num1 + num2;
    return resultat?.innerText = `Somme ${res} `

}

function msg() {

    let ms = itxt1.value;
    window.alert(`La menssage est: ${ms}`);


}

console.log(calculer(10, 25))

console.log(itxt1.value)
console.log(itxt1);

