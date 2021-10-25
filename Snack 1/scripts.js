/* 
* Creare un array di oggetti:
* Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
* Stampare a schermo la bici con peso minore utilizzando destructuring e template literal 
*/

const bici = [
    // Indice 0
    {
        nome: "Alan",
        peso: 10
    },
    // Indice 1
    {
        nome: "Atala",
        peso: 20
    },
    // Indice 2
    {
        nome: "Scott",
        peso: 5
    }
];

let biciLeggera = bici[0];

for (let i = 0; i < bici.length; i++) {
    
    let singolaBici = bici[i]; 

    if(biciLeggera.peso > singolaBici.peso){
        biciLeggera = bici[i];
    }

}

const {nome, peso} = biciLeggera;

const container = document.querySelector(".container");
container.innerHTML += `<h1>La bici più leggerà è la <span style="color:green";>${nome}</span> con un peso di <span style="color:green";>${peso}</span> kg</h1>`;


