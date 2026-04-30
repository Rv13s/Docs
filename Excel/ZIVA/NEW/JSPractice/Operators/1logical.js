//Logical ops in jS
// -OR, -AND, -NOT, -NUll Coalescing


// OR || 
console.log(1 || 12 );  // Print 1 first poistive short circuit (print the first positive value)
console.log(0 || 1 || 23); // Print 1 Truthy value (print the first positive value)

// AND &&

console.log(1 && 12 ); // print 12
console.log(0 && 12 ); // Print 0 ( First false)short circuit
console.log( 121 && 0 && 1232); //print 0

// NOT !

console.log(!1); //print 0
console.log(!0); //print 1
 

