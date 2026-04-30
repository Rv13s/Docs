let year = 2000;

// divisible by 4
// divisible by 100 ? divisible by 400

if (year%4 ==0){
    if(year%100 ==0){
        if(year%400 ==0){
            console.log('Leap Year');
        }
        else{
            console.log("Not a leap Year");
        }
    }
    else{
        console.log("Not a Leap Year")
    }
}
else{
    console.log('Not a leap year');
}