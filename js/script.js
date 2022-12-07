console.log(' JS OK');
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
// - per i multipli di 3 stampi “Fizz” al posto del numero
// - per i multipli di 5 stampi “Buzz” al posto del numero.
// - Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.


// Creo il ciclo del conteggio numeri da 1 a 100
for (let number = 1; number <= 100; number++) {
   
     if (number % 3 == 0 && number % 5 == 0) {
        console.log( 'FizzBuzz');
    }
     else if (number % 3 == 0){
        console.log('Fizz');
    }
     else if (number % 5 == 0 ){
        console.log('Buzz');
    }
        else {
            console.log(number);
        }
   
 
     

}