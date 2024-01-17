// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// cerco il bottone per generare la griglia
const btnPlayHtml=document.getElementById('play')
// associo la griglia
const grigliaHtml=document.getElementById('griglia')
// associo la scelta dell'utente
const scelta=document.getElementById('scelta')
// creo l'evento
btnPlayHtml.addEventListener('click', function(){
    // associo il valore della scelta utente ad un 
    // numero intero utilizzato poi per la creazione della griglia
    let valore=parseInt(scelta.value)
    // console.log(valore)
    // resetto il valore della griglia
    grigliaHtml.innerHTML=""
    // genero la griglia
    for (let i = 0; i < valore; i++) {

        let divBox = document.createElement("div")
        if (valore===49){
            divBox.style.width="calc( 100% / 7)"
            divBox.style.height="calc(100% / 7)"
        }else if (valore===100){
            divBox.style.width="calc(100% / 10)"
            divBox.style.height="calc(100% / 10)"
        }else if(valore===81){
            divBox.style.width="calc( 100% / 9)"
            divBox.style.height="calc(100% / 9)"
        }
        divBox.classList.add("box")
        divBox.innerHTML=`<span>${i+1}</span>`
        grigliaHtml.appendChild(divBox)
        divBox.addEventListener('click', function(){
            let span=this.querySelector('span')
            this.classList.toggle("active")
        })
    }
   
})

