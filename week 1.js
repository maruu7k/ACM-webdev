                                
 // ----------------------------  Week 1 Challenge #1  ----------------------------    

// 1. Create a boolean variable called 'myBoolean and set it to true

const myBoolean = true;

//2. Create a string variable called myString and set it to hello world

const myString = 'hello world'

// 3. Create a number variable called 'firstNumber and set it equal to '20'.

const firstNumber= 20;

// 4. Create another number variable called secondNumber and set it equal to '40'.

let secondNumber = 40;

// 5. Re-assign secondNumber and set it equal to '80'
secondNumber = 80;

// 6. Create an array called myArray and put 'myBoolean' at index 0, and myString at index 1.

const myArray =[myBoolean, myString];

/* 7. Create an object called myObject and assign myArray to a property called firstProperty, 
and the sum of 'firstNumber' and secondNumber to a property called sumProperty' 
(hint: we didn't cover how to do this here) */

const myObject = {
    firstProperty : myArray, 
    sumProperty: firstNumber + secondNumber};

// 8. Print 'myObject to the console.
console.log(myObject);

// 9. Print the sumProperty of 'myobject to the console.
console.log(myObject.sumProperty);

// 10. Print the value at index 1 of 'firstProperty

console.log(myObject.firstProperty [1]);

 // ----------------------------  Challenge #2  ----------------------------  

 //find three things wrong in the code


 //mistake 1: there cannot be space between variable name.
 //mistake 2: there is missing semi colon when variable initialized.
 //mistake 3: you cannot change the value stored in a const variable as it's fixed. 

  // ----------------------------  Challenge #3  ----------------------------  

  //the result will be 2040 and data type will be string. 
  // 20 is number and 40 is string, they both will be printed together. 
  // they cannot be added as variable 2 is a string. 


 // ----------------------------  Challenge #4  ----------------------------
 
 /*const objectVariable = {
    property1: 'i am property 1';
    property2: 'i am property 2';
    property3: [20,30,40];
 };
 console.log (objectVariable.property3[2]);
*/
// in this code semi color are place wrong, it should be replaced with comma
 const objectVariable = {
    property1: 'i am property 1',
    property2: 'i am property 2',
    property3: [20,30,40],
 };
 console.log (objectVariable.property3[2]);

 // ----------------------------  Challenge #5  ----------------------------  

/*const myArray1 = [20,30,40];
console.log (myArray1 [3]); 
*/

/* The array doesn't have any value in index number 3. so we need to add value in index 
3 in order to print that */ 

const myArray1 = [20,30,40,50];
console.log (myArray1 [3]);



