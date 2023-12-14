// Build a simple loop, inside a function, that takes an array and prints the value of the array to the console

function myFunction(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}
let furniture = ["table", "bed", "chair", "cupboard"]
myFunction(furniture);