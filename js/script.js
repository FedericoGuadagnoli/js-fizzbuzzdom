console.log(' JS OK');
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
// - per i multipli di 3 stampi “Fizz” al posto del numero
// - per i multipli di 5 stampi “Buzz” al posto del numero.
// - Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.


// Prendo l'elemento dalla pagina
const board = document.getElementById('board');

// Creo una lista da inserire nella pagina
const list = document.createElement('ul');

// Creo il ciclo del conteggio numeri da 1 a 100
for (let number = 1; number <= 100; number++) {

    //Creo gli elementi della lista da inserire nella pagina
    const listElement = document.createElement('li');
    list.appendChild(listElement);

    //Calcolo i multipli di 3 e 5 e stampo FizzBuzz al posto del numero, poi li aggancio all'elemento della lista
     if (number % 3 == 0 && number % 5 == 0) {
        console.log('FizzBuzz');
        listElement.append('FizzBuzz');
    }

    //Calcolo il multiplo di 3 e stampo Fizz al posto del numero, poi lo aggancio all'elemento della lista
     else if (number % 3 == 0){
        console.log( 'Fizz');
        listElement.append('Fizz');
    }

    //Calcolo il multiplo di 5 e stampo Buzz al posto del numero, poi lo aggancio all'elemento della lista
     else if (number % 5 == 0 ){
        console.log( 'Buzz');
        listElement.append('Buzz');
    }

    //Stampo tutti i restanti numeri e li aggancio all'elemento della lista
        else {
            console.log(number);
            listElement.append(number);
        }
}

board.appendChild(list);