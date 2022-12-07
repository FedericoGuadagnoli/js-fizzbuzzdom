console.log(' JS OK');
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
// - per i multipli di 3 stampi “Fizz” al posto del numero
// - per i multipli di 5 stampi “Buzz” al posto del numero.
// - Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.


// Creo il ciclo del conteggio numeri da 1 a 100
for (let number = 1; number <= 100; number++) {
    
    //Calcolo i multipli di 3 e 5 e stampo FizzBuzz al posto del numero
     if (number % 3 == 0 && number % 5 == 0) {
        console.log( 'FizzBuzz');
    }

    //Calcolo il multiplo di 3 e stampo Fizz al posto del numero
     else if (number % 3 == 0){
        console.log('Fizz');
    }

    //Calcolo il multiplo di 5 e stampo Buzz al posto del numero
     else if (number % 5 == 0 ){
        console.log('Buzz');
    }

    //Stampo tutti i restanti numeri
        else {
            console.log(number);
        }
}