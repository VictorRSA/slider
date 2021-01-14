//using object literal to define an object(key/value pair) and accessing specific elements of an Array/Objects
var todayDate= new Date();
var names =prompt("Enter your names:");
var last_name =  prompt("Enter your surname:");
///why dont i make a lopp to keep on asking for family mebers,but first it  needs to  know how many memebrs are the to iterate properly
var siblings =new Array(prompt("Enter your family member's names:"));
occupation = prompt("Enter your occupation");
married = prompt("Are you married ,(y/n)");
var getDate = prompt("Please enter your date of birth.")



var person = {
    firstName:names,
    lastSurname:last_name,    

    birthYear:getDate,
    family :siblings,
    job :occupation,
    isMarried :married
    // ,dateOfBirth


};

for(var i = person.length-1;i>=0;i--){
    console.log("Looping backwards")
};