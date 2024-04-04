//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
function sortedArr(){
       let newArr=[];
      let arr = ["can","Samaon ","Garry","Priscilla ","John"];
       arr.forEach(item => {
         if(item[0] == "c"||item[0]== "P"){
            let x = item.split("").sort().join("");
                    newArr.push(x);
                    let newarra = item.split("").reverse().join('');
                    newArr.push(newarra);
         }
         
       })
       console.log(newArr)
}
sortedArr()

//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function checker(arr){
    arr.forEach(element => {
        if(element > 0){
            console.log("positive");
        }
        else if (element < 0) {
            console.log("negative");
        } 
        else{
            console.log('zero');
        }
    })

}
checker([2,4,5,0,-2,-4,-6,-8,-9,22]);
    

//Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
function employeeObjects(){
 let arr =[{name:"Canary",id:"22",salary:2000000000},
           {name:"Priscilla", id:"32",salary:300000000},
           {name:"Elijah",id:"90",salary:40000000}]
           return (arr.sort((x,y)=>x.salary-y.salary))
}
console.log(employeeObjects());
 //Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function items(arr){
    arr.forEach(num => {
        let multiply = num*2
        console.log(multiply)
    })
}
items([22,3,12,43,5,6,1,4,7,10]);
//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function items(arr){
    let newarr = [];
    for (x = arr[0];x < arr[4];x++){
        let m = x*8;
        console.log({m});
        newarr.push(m);
            }
            for (z = arr[4]; z < arr[6];z++){
               let y= z+5
        console.log({y});
        newarr.push(y);
            }
            console.log({newarr});
}
items([1,2,3,4,5,6,7,8,9])