                                
//************************************************************************
//                                Week 1
//************************************************************************
 
//Further FIVE challenges. 

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

const myArray = [40,50,2];
const result = myObj.prop2 ===(myArray [0]/myArray[2]); 


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

            
