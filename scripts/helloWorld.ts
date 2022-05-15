var pg = document.createElement('p');
var ola: string = "Test de element";
pg.textContent = ola;
document.body.appendChild(pg);


var pId1 = document.getElementById('pg1');
var pId2 = document.getElementById('pg2');
let plist1 = document.getElementById('plist1');
let plist2 = document.getElementById('plist2');
let ptup = document.getElementById('ptup');
pId1.innerText = 'Testando o Typescritp!!!';


const bool = true;
let vr = 5;

// utiliser le declaration de variable comme let pour que la variable soit utiliser dans un bloque 
if (bool) {
    let i: number;
    for (i = 0; i <= vr; i++) {
        pId2?.innerText = `${i}`
        if (i >= 3) {
            pId2?.style.color = 'red';
            pId2?.style.backgroundColor = 'blue';
            pId2?.style.width = '200px';
            pId2?.style.fontSize = '30pt'
            pId2?.style.textAlign = 'center';
            pId2?.style.margin = '0px 0px 0px 40px'

        }

    }
}

// Array et Tuple
let list1 = [1, 2, 3, 'Test']; //Declaration d'un array
let list2: number[] = [5, 2, 3]; //Declaration d'un array du type number
let Tuple: [string, number]; //Declaration d'une tuple

let numlist = document.write(`testando imprimir arrays ${list1.length}`)


function imprmer() {
    for (let i = 0; i <= list2.length; i++) {
       console.log(list2[i])
       pId1?.innerHTML = document.write(`<br/> Array ${list2[i]}`);
      

    }

}

 


pId1?.innerHTML = document.write(`<br/> icii ${list1.length}`);
pId1?.innerHTML = document.write(`<br/> icii ${imprmer()}`)


