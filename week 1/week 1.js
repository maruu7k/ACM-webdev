                                
//************************************************************************
//                                Week 1
//************************************************************************

/* git codes 

git add .
git status
git commit -m "week 1"
git push -u origin main

*/ 


//---------------------------- Challenge #1  ----------------------------    

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



                                
//_______________________________________________________________________________________
//                                 NEXT FIVE CHALLENGES
//_______________________________________________________________________________________
 


//---------------------------- Challenge #1  ------------------------------   

/* we can't change the value of value store in const so it should be let if we 
want increment in values. */


let numberVariable =0;
numberVariable ++;
numberVariable++;
numberVariable++;

console.log (numberVariable);



// ----------------------------  Challenge #2  ----------------------------  


//Snippet one 

/* const firstNumber = 20;
const secondNumber = '20';
const result = firstNumber === secondNumber;
console.log (result); */

//Snippet two

/* const firstNumber = 20;
const secondNumber = '20';
const result = firstNumber === secondNumber;
console.log (result); */





// ----------------------------  Challenge #3  ----------------------------  

/* const expression1 = 100%50;
const expression2= 100/50;
const expression3 = expression1 <expression2;
const expression4 = expression3 && 300+5 ===305;
const expression5 = !expression4;
console.log(expression5); */

// it will print false. 

// to write it in one line  to get same answer, we can write is as below

const expression5 = !(100%50<100/50 && 300 +5 ===305); 

// results in same answer as false


// ----------------------------  Challenge #4  ----------------------------
const myObj = {
    prop1: 'first value',
    prop2: 20
};

const myArray3 = [40,50,2];
const result = myObj.prop2 ===(myArray3 [0]/myArray3[2]); 


// result is true. 

/* the result will evaluate to true as my obj.prop2 results in 20 and myArray [0] 
gives value 40, myArray[2] gives value 2. so 40 divided by 2 gives 20. so since both are
numerical values and equals to same number hence it results true. */



// ----------------------------  Challenge #5  ----------------------------  

const myObj2 = {
    nestedObject1: {
        price:100,
        quantity:5
    },
    nestedObject2: {
        price:150,
        quantity:2
    }
};

const myArray2 = [myObj2.nestedObject1, myObj2.nestedObject2];
const result2 = (myArray2[0].price * myArray2[0].quantity) >
                (myArray2[1].price * myArray2[1].quantity) ;
                
                
//result is true 

/* The reason is that in Array at index 0 it's nested obj1 properties and 
at index 1 it has nested object 2 properties. Therefore while calculating object 1 
price multiply by quality results in 500 and obj 2 results in 300 which means that 500 is 
greater than 300. so it is TRUE.  */

            
