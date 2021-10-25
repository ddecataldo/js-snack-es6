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
    }
];

let biciLeggera = 0;

for (let i = 0; i < bici.length; i++) {
    
    let singolaBici = bici[i].peso;

    if(biciLeggera <= singolaBici){
        console.log("La tua bici è più leggera");
    } else {
        console.log("La tua bici è più pesante");
    }

}

console.log(biciLeggera);