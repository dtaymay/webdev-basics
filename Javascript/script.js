// var number = 3; they don't use anymore; now use let

// let is the initialization.  to change the variable later, you don't need let again

let number =4 // in typescript, you add type and then do javascript
console.log("this i s astring");
let myboolean = true;
let mystring = "the test";
console.log(`${number}, \n ${myboolean}, \n ${mystring}, \n this should work`);


// shows you can't change a constant variable
// const word = "derek";
// console.log(word);
// word = "alex"
// console.log(word);


document.getElementById("box").innerText = "derek is awesome"
// this is bad.. don't do innerHTML if you can do innerText because of malicious stuff
// document.getElementById("box").innerHTML = "<h1>derek is awesome</h1>?"

number = 10;

if (number === 10) {
    console.log("yay")
} else if (number === 4) {
    console.log("boo! 4")
} else {
    console.log("neither")
}
// type and content, use === instead of == ; most cases just use === always as practice

for (let i = 0; i < 10; i++) {
    console.log(i)
} 

let arr = [1, 2, "three", "four", false]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
} 

arr.forEach((item) => {
    console.log(item)    
});

//alternative syntax
arr.forEach(function(item) {
    console.log(item)    
});

function testPrint (item) { 
    console.log(item)
}

testPrint("derek")

// alternative sytnax for creatign a function
const pritnItem = (item) => {
    console.log(item)
}


document.getElementById("box").addEventListener("click", function() {
    alert("I got clicked");
});

// this technical can go into css file; hoover and click pointer comes up
document.getElementById("box").style="cursor: pointer";