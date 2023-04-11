// //===================ASSIGNMMENT 2==========================




// //=====================QUESTION 1============================
// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

// //==========creating closure 
// function parent_function(number_1){
//     return function child_function(number_2){
//         return number_1 + number_2;
//     }
// }

// //========assigning fnctions in variables
// let parent = parent_function(argument_1);
// let final = parent(argument_2);

// //=========printing
// console.log("the parent function's argument you entered is: ", argument_1);
// console.log("the child function's argument you entered is: ", argument_2);
// console.log("the addition of both of the given argumnets is: ",final );




// //=====================QUESTION 2============================
// // 2. Write a recursive function that searches an array for a specific value. The
// // function should return true if the value is found, and false if it is not. You
// // can assume that the array is not nested



// let no_to_search = +prompt("enter the number you want to search: ");
// let arr = [];
// //============random number generating and placing in array:
// for (let i = 1; i <= 30; i++) {
//     let random_no = Math.round(Math.random() * 100);
//     arr.push(random_no);
// }

// //============sorting array
// let sorted_array = arr.sort(function(a,b){
//     if(a>b) {
//         return b;
//     }
//     return -1;
// })

// //============variables
// array_length = sorted_array.length;
// console.log("the original array is:", sorted_array);
// console.log("the number you searched for is : ", no_to_search);

// //============main code + recursion
// let i = 0;

// //============function for recursion
// function recursion(array){
//     if (no_to_search === sorted_array[i]) {
//         return true;
//     }
//     else if(i < array_length-1){
//         i = i+1;
//         recursion();
//        }
//     else{ 
//         return;
//     }
// }

// //=========calling function
// recursion(sorted_array);

// //=========printing true and flase
// if (recursion()==true){
//     console.log("true");
// }
// else{
//     console.log("flase");
// }




// //=====================QUESTION 3============================
// // 3. Write a function that adds a new paragraph element to the bottom of an
// // HTML document. The function should take a string argument that will be
// // used as the text content of the new paragraph element.


// //======variables
// let contentOfPara = prompt("enter your content");
// let para_element = document.createElement("p");
// let parent = document.getElementsByTagName("html")[0];

// //=======main function
// function addingPara(String){
//     para_element.innerHTML = String;
//     parent.appendChild(para_element);
//     parent.insertAdjacentElement("afterbegin",para_element);
//     return para_element;
// }

// //========calling function
// console.log(addingPara(contentOfPara));




// //=====================QUESTION 4============================
// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.


// //=======taking input
// let list_content = prompt("enter list content:");

// //=======variables

// //=======creating ul inside body
// let first_parent = document.getElementsByTagName("body")[0];
// let new_unorderd_list = document.createElement("ul");

// first_parent.appendChild(new_unorderd_list);

// first_parent.insertAdjacentElement("afterbegin",new_unorderd_list);

// //=======creating li inside ul
// let creting_list = document.createElement("li");

// //=======main code ==> function
// function adding_content_in_list(string){
//     new_unorderd_list.appendChild(creting_list);
//     creting_list.innerHTML = string;
// }

// //========calling function
// adding_content_in_list(list_content);




// //=====================QUESTION 5============================
// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.


// //=======variables
// let heading_1 = document.querySelector("#heading1");
// let heading_2 = document.querySelector("#heading2");

// //=======creating function
// function changes(id ,color){
//     id.style.backgroundColor = color;
// }

// //=======calling function
// changes(heading_2,'green');




// //=====================QUESTION 6============================
// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.



// localStorage.clear();  // //=========clearing local storage 

// //===========creting object 1
// let object_1 = {
//     name:"sarah",
//     age: 20,
//     phone_no:"0382380234",
//     height:"5'4",
//     cnic: "23462464794920",
//     eng_marks:23,
//     urdu_marks:65,
//     maths_marks:100
// }

// //==========creting object 2
// let object_2 = {
//     name:"ayesha",
//     age: 15,
//     phone_no:"94500684",
//     height:"4'3",
//     cnic: "8058543456-9",
//     eng_marks:90,
//     urdu_marks:40,
//     maths_marks:80
// }

// //==========creting object 3
// let object_3 = {
//     name:"noor fatime",
//     age: 14,
//     phone_no:"94500684",
//     height:"5'6",
//     cnic: "8058543456-9",
//     eng_marks:50,
//     urdu_marks:80,
//     maths_marks:60
// }

// //===========creting function to save object in local storage
// function saving_object(key , value){
//     let new_object = JSON.stringify(value);
//     localStorage.setItem(key,new_object);
// }

// //==========calling function 3 times with different arguments
// saving_object("data of sarah",object_1);
// saving_object("data of ayesha",object_2);
// saving_object("data of noor",object_3);




// //=====================QUESTION 7============================
// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.


// localStorage.clear();  // //=========clearing local storage 

// //========creting object 1
// let object_1 = {
//     name:"sarah",
//     age: 20,
//     phone_no:"0382380234",
//     height:"5'4",
//     cnic: "23462464794920",
//     eng_marks:23,
//     urdu_marks:65,
//     maths_marks:100
// }

// //=======creting object 2
// let object_2 = {
//     name:"ayesha",
//     age: 15,
//     phone_no:"94500684",
//     height:"4'3",
//     cnic: "8058543456-9",
//     eng_marks:90,
//     urdu_marks:40,
//     maths_marks:80
// }

// //==========creting object 3
// let object_3 = {
//     name:"noor fatime",
//     age: 14,
//     phone_no:"94500684",
//     height:"5'6",
//     cnic: "8058543456-9",
//     eng_marks:50,
//     urdu_marks:80,
//     maths_marks:60
// }

// let i = 0;
// //==========saving the object
//  function saving_object(key , value){
//        i = i+ 1
//         let new_object = JSON.stringify(value);
//         localStorage.setItem(key,new_object);
//         console.log("CONVERTED OBJECT  ",i," INTO STRING FORM \n\n", new_object)
//     }

// let j =0;
// //===========retrieve(object_1)
// function retrieve(object_name){
//     j = j+1;
//     let retrieved_object = JSON.parse(localStorage.getItem(object_name));
//     console.log("CONVERTED OBJECT  ",j," INTO OBJECT FORM FROM STRING FORM \n\n", retrieved_object)
// }



// //===========calling saving and retrieving function 3 times with different arguments 
// saving_object("data of sarah",object_1);
// retrieve('data of sarah')
// saving_object("data of ayesha",object_2);
// retrieve('data of ayesha')
// saving_object("data of noor",object_3);
// retrieve('data of noor')




// //=====================QUESTION 8============================
// Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object.



// localStorage.clear()  // //==========clearing the local storage

// //=======create oject 1
// let object_1 = {
//     name:"sarah",
//     age: 20,
//     phone_no:"0382380234",
//     height:"5'4",
//     cnic: "23462464794920",
//     eng_marks:23,
//     urdu_marks:65,
//     maths_marks:100
// }

// //=========create oject 2
// let object_2 = {
//         name:"ayesha",
//         age: 15,
//         phone_no:"94500684",
//         height:"4'3",
//         cnic: "8058543456-9",
//         eng_marks:90,
//         urdu_marks:40,
//         maths_marks:80
//     }

// //=========create oject 3
// let object_3 = {
//         name:"noor fatime",
//         age: 14,
//         phone_no:"94500684",
//         height:"5'6",
//         cnic: "8058543456-9",
//         eng_marks:50,
//         urdu_marks:80,
//         maths_marks:60
//     }


// let arr;

// //=======function to save the object and all of its properties in local storage 
// function saving_object(key, value) {
//     let new_object = JSON.stringify(value);
//     localStorage.setItem(key, new_object);
//     arr = [object_1];
//     localStorage.setItem("name", JSON.stringify(arr[0]['name'])) ;
//     localStorage.setItem("age", JSON.stringify(arr[0]['age'])) ;
//     localStorage.setItem("phone no", JSON.stringify(arr[0]['phone_no'])) ;
//     localStorage.setItem("height", JSON.stringify(arr[0]['height'])) ;
//     localStorage.setItem("cnic", JSON.stringify(arr[0]['cnic'])) ;
//     localStorage.setItem("eng_marks", JSON.stringify(arr[0]['eng_marks'])) ;
//     localStorage.setItem("urdu_marks", JSON.stringify(arr[0]['urdu_marks'])) ;
//     localStorage.setItem("maths_marks", JSON.stringify(arr[0]['maths_marks'])) ;
//     console.log("object in string form \n", new_object)
// }




// function retrieve(object_name){
//     let retrieved_object = JSON.parse(localStorage.getItem(object_name));
//     console.log("object converted to object from string form\n\n" , retrieved_object)
// }


// //=======calling saving and retrieving function 3 times with different arguments 
// saving_object("data of sarah", object_1);
// retrieve('data of sarah')

// // ==========you can check the validness of code with these objects as well 
// // saving_object("data of ayesha", object_2);
// // retrieve('data of ayesha')

// // saving_object("data of noor", object_3);
// // retrieve('data of noor')



