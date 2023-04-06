                    // assignmnet 01

// ============================= QUESTION 1 ===================================
// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console


// let variable_1 = +prompt("enter first number: ")
// let variable_2 = +prompt("enter second number: ")
// if (variable_1 > variable_2){
//     console.log(variable_1 + " is greater than " + variable_2);
// }
// else{
//     console.log(variable_2 + " is greater than " + variable_1);
// }

// ============================= QUESTION 2 ===================================
// 2. Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -


// let number = +prompt("enter a number: ")
// if (number>=0){
//     console.log("number " + number + " has a + sign");
// }
// else{
//     console.log("number " + number + " has a - sign");
// }


// ============================= QUESTION 3 ===================================
// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.

// let var_1 = +prompt("enter number 1: ");
// let var_2 = +prompt("enter number 2: ");
// let var_3 = +prompt("enter number 3: ");
// let var_4 = +prompt("enter number 4: ");
// let var_5 = +prompt("enter number 5: ");

// if (var_1 > var_2 && var_1 > var_3 && var_1 > var_4 && var_1 > var_5 ){
//     console.log(var_1 + " is greates");
// }
// else if (var_2 > var_1 && var_2 > var_3 && var_2 > var_4 && var_2 > var_5 ){
//     console.log(var_2 + " is greates");
// }
// else if (var_3 > var_1 && var_3 > var_2 && var_3 > var_4 && var_3 > var_5 ){
//     console.log(var_3 + " is greates");
// }
// else if (var_4 > var_1 && var_4 > var_2 && var_4 > var_3 && var_4 > var_5 ){
//     console.log(var_4 + " is greates");
// }
// else if (var_5 > var_1 && var_5 > var_2 && var_5 > var_3 && var_5 > var_4 ){
//     console.log(var_5 + " is greates");
// }
// else{
//     console.log("no number is greatest you have enteres 2 same numbers");
// }


// ============================= QUESTION 4 ===================================
// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// for (i=0 ; i<=15; i++){
//     if (i%2 ==0){
//         console.log(i + " is even");
//     }
//     else{
//         console.log(i + " is odd");
//     }
// }


// ============================= QUESTION 5 ===================================
// 5. Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade.

// let marks = +prompt("enter your marks between 0 and 100");
// if (marks < 0){
//     console.log("you entered makrs " + marks + " which is invalid marks ")
// }
// else if(marks < 60){
//     console.log("your grade on marks " + marks + " is F");
// }
// else if(marks < 70){
//     console.log("your grade on marks " + marks + " is D");
// }
// else if(marks < 80){
//     console.log("your grade on marks " + marks + " is C");
// }
// else if(marks < 90){
//     console.log("your grade on marks " + marks + " is B");
// }
// else if(marks <= 100){
//     console.log("your grade on marks " + marks + " is A");
// }
// else if(marks > 100){
//     console.log("you entered makrs " + marks + " which is invalid marks ");
// }


// ============================= QUESTION 6 ===================================
// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".


// for (i = 1; i<=100 ; i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz")
//     }
//     else if (i%3==0){
//         console.log("Fizz");
//     }
//     else if (i%5==0){
//         console.log("Buzz");
//     }
    
// }

// ============================= QUESTION 7 ===================================
// 7. Write a JavaScript program to construct the following pattern, using a nested for loop.

// for(i = 1; i<=5; i++){
//     for(j = 1; j<=i; j++){
//        document.write("*");
//     }
//     document.write("<br>");

// }