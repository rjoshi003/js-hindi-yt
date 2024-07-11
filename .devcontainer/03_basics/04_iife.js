//Immediately Invoked Function Expressions (IIFE)


(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})();

( function aurcode() {
    console.log(`DB CONNECTED TWO`);
} )();

(  () => {
    //simple iifee
    console.log(`DB CONNECTED TWO`);
})();

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');