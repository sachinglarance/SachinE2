// var a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// var b=[];
// var remainder = 0;
// for (let i = 0; i < a.length; i++) {
//     remainder = 0;
//     for (let j = 2; j < a[i]/2; j++) {

//         if (a[i]%j ==0) {
//             remainder ++;
//             break;
//         }
//     } 
//     if(i > 1 && remainder==0){
//         b.push(a[i]);
//         i++;
//         console.log(b);
//     } 

    
// }

// let num = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let result = [];
// function isPrime(num) {
//   if(num <=2) return false;

//   for (let k = 2; k < num; k++){
//     if(num % k == 0){
//       return false;
//     }
//   }
//   return true;
// }
// result=num.filter(isPrime)
// console.log(result)


// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");
// function setUserName() {
//   const myName = prompt("Please enter your name.");
//   if (!myName) {
//     setUserName();
//   } else {
//     localStorage.setItem("name", myName);
//     myHeading.textContent = `Mozilla is cool, ${myName}`;
//   }
// }

// if (!localStorage.getItem("name")) {
//   setUserName();
// } else {
//   const storedName = localStorage.getItem("name");
//   myHeading.textContent = `Mozilla is cool, ${storedName}`;
// }
// myButton.onclick = () => {
//   setUserName();
// };

// var name= prompt("what is your name");
// console.log ("Hello"+ name +"!");


// odd or even 

// const num=prompt("Enter the number");
// if(num%2 ==0){
//   console.log("Given number " + num +" is Even");
// }
// else{
//   console.log("Given number "+ num + " is Odd");
// }
var alphabets =/^[A-Za-z]+$/;
function upperCase(){
let x;
x=document.getElementById("fname");
x.value=x.value.toUpperCase();
}

function validateForm() {
  let x = document.getElementById("fname").value;
  if (x == "alp") {
    alert("FirstName must be filled out");
    return false;
  };
  let y = document.getElementById("fname").value;
  if (y == "") {
    alert("FirstName must be filled out");
    return false;
  }
}

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.myForm.email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.myForm.email.focus();
return false;
}
}

