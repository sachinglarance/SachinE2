// Odd or Even
// let num=prompt("Enter the number");
// if(num%2==0){
//     console.log("The given number "+ num +" is Even.");
// }
// else{
//     console.log("The given number "+ num +" is Odd.");
// };



//prime or not
// let num=prompt("Enter the number");
// let isprime=0;
// if(num===1){
//     console.log("Not a prime Number");
// }
// else if(num >2){
//     for (let i = 2; i < num; i++) {
//         if(num%i==0){
//             isprime=1;
//             break;
//         }

//     }
//     if(isprime===0){
//         console.log("prime Number");
//     }
//     else{
//         console.log("Not a prime Number");
//     }
// }
// else{
//     console.log("Given Number is negative");
// }



//fibonacci series
let num=prompt("Enter n");
let t1=0;
let t2=1;
let t3=t1+t2;
if(num==1){
    console.log(t1);
}
else{
console.log(t1);
console.log(t2);
for (let i = 3; i <=num; i++) {
    console.log(t3);
    t1=t2;
    t2=t3;
    t3=t1+t2;
}
}


//sum and average of array
// let numbers=[2,-9,0,5,12,-25,22,9,8,12];
// let total=0;
// let average=0;
// for (let i = 0; i < numbers.length; i++) {

//     total+=numbers[i] ; 
//     average=total/numbers.length;

// }
// console.log(total);
// console.log(average);

//patterns
// let num=prompt("Enter number");
// let total= "";
// for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <=i; j++) { 
//         total+=j;
//     }
//     total+="\n";   
// }
// console.log(total);





// let num=prompt("Enter number");
// let total= "";
// for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <=i; j++) { 
//         total+="*";
//     }
//     total+="\n";   
// }
// console.log(total);




// let num=prompt("Enter number");;
// let total= "";
// let count=1;
// for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <=i; j++) { 
//         total+=count;
//         count++;
//     }
//     total+= "\n";   
// }
// console.log(total);



// let num = prompt("Enter number");
// let total = "";
// for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num - i; j++) {
//         total += " ";
//     }
//     for (let k = 0; k < i; k++) {

//         total += "*";
//     }
//     total += "\n";
// }
// console.log(total);


