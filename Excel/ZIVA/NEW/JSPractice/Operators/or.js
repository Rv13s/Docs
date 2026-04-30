//OR




let age = 21; // 18 Not Eligible
let gender = 'M';
if (age>=21 || (age>=18 && gender=='F')){
    console.log('Eligible');
}
else{
    console.log('Not Eligible');
} 

console.log(1 || 12 );  // Print 1 first poistive short circuit (print the first positive value)
console.log(0 || 1 || 23); // Print 1 Truthy value (print the first positive value)