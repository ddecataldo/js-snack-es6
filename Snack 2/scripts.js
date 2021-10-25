/*
* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
* Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
* Generare numeri random al posto degli 0 nelle proprietà:
* Punti fatti e falli subiti.
* Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const squadreCalcio = [
    // Indice 0
    {
        nome: "Napoli",
        punti: 0,
        falli: 0
    },
    // Indice 1
    {
        nome: "Milan",
        punti: 0,
        falli: 0
    },
    // Indice 2
    {
        nome: "Inter",
        punti: 0,
        falli: 0
    },
    // Indice 3
    {
        nome: "Roma",
        punti: 0,
        falli: 0
    }
];

// Generare Numeri Random
// Creo una funzione che mi permetta di calcolare dei numeri random
function generateRandomNum(minNumber, maxNumber) {
    const numRandom = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    return numRandom;
}

for(i=0; i<squadreCalcio.length; i++){

    squadreCalcio[i].punti = generateRandomNum(0, 100);
    squadreCalcio[i].falli = generateRandomNum(0, 100);
   
    /* puntiSquadre = generateRandomNum(0, 100);
    falliSquadre = generateRandomNum(0, 50); */

    console.log(`I punti della squadra ${squadreCalcio[i].nome} sono ${squadreCalcio[i].punti}`);
    console.log(`I falli della squadra ${squadreCalcio[i].nome} sono ${squadreCalcio[i].falli}`);  

}

function newList(){

    const nuovaLista = [];

    for (let i = 0; i < squadreCalcio.length; i++) {

        const {nome, falli} = squadreCalcio[i];
        nuovaLista.push(`Squadra ${nome} - Falli ${falli}`);
    }

    console.log(nuovaLista);

}

newList();