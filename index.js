//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
/*function sortedArray(arr){
    let newArr = arr.sort();
    console.log({newArr})
    let reverseArr = newArr.reverse();
    return {reverseArr,newArr}
}
console.log(sortedArray(["dog","cow","pig","goat","kid"]));

//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function check(numbers){
if(number > 0){
    num = positive
}
if ( num < 0){
    num = negative
}
else{
    num = 0
}
return numbers
}
console.log(check[2,-1,55,0,20,-4,-55,30]);*/

//Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
let employeeObjects = [
    {id: 55},
    {name: "Mikisa Priscilla"},
    {salary:[5000,4000,1000,6000,900000]},
];
 employeeObjects.sort(function(m,n){
    return (m.salary) - (n.salary);
 });
 employeeObjects.forEach((employee)=> console.log(employeeObjects.salary));
 console.log (employeeObjects);

 //Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
/*function square(numbers){
    numbers.forEach((num in numbers => {
        //console.log(num*2)

    }));
}
console.log(square(1,2,3,4,5,6,7,8,9,10))
//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function values(arr){
    let  firstFour = arr.slice(0,4).map(num => num*8);
    let Twonums = arr.slice(-2).map(num => num +5);
    const Array = firstFour.concat(Twonums);
    console.log(Array);
}
values(values[1,2,3,4,5,6,7]);*/

    


