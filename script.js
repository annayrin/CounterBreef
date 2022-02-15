let quantity = document.getElementById("quantity");
let answer = document.getElementById("answer");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let addNum = document.getElementById("addNum");
let subtractNum = document.getElementById("subtractNum");
let multiplyNum = document.getElementById("multiply");
let divideNum = document.getElementById("divide");
let clear = document.getElementById("clear");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let interval = document.getElementById("interval");

document.getElementById("add").addEventListener("click", ()=> {
    quantity.value++;
})
document.getElementById("subtract").addEventListener("click", ()=> {
    quantity.value--;
})

addNum.addEventListener("click", () => {
    answer.value = add(num1.value)(num2.value);
    }
)

subtractNum.addEventListener("click", () => {
        answer.value = subtract(num1.value)(num2.value);
    }
)

multiplyNum.addEventListener("click", () => {
        answer.value = multiply(num1.value)(num2.value);
    }
)

divideNum.addEventListener("click", () => {
        answer.value = divide(num1.value)(num2.value);
    }
)
function add(a) {
    return (b) => Number(a) + Number(b);
}
function subtract(a) {
    return (b) => a - b;
}
function multiply(a) {
    return (b) => a * b;
}
function divide(a) {
    return (b) => a / b;
}

clear.addEventListener("click", () => {
        answer.value = "";
        num1.value = "";
        num2.value = "";
    }
)

let intro;

function startInterval() {
      intro = setInterval(() => {
         interval.value++;
     }, 1000)
}

function stopInterval(){
    clearInterval(intro);
    interval.value="";
}

start.addEventListener("click", startInterval);
stop.addEventListener("click", stopInterval);

function fibo(n) {
   if (n === 0 || n === 1) {return n;}
   else {
       return fibo(n - 1) + fibo(n - 2);
   }
}

let n = 0;

let introNew;

function startNewInterval() {
    introNew = setInterval(() => {
        document.getElementById("fibonachi").value += fibo(n)+ " ";
        n++;
    }, 1000)
}

function stopNewInterval(){
    if (introNew) {
        clearInterval(introNew);
    }
    document.getElementById("fibonachi").value ="";
    n=0;
}

document.getElementById("addFibo").addEventListener("click", ()=>{
    document.getElementById("fibonachi").value += fibo(n)+ " ";
    n++;
})
document.getElementById("startFibo").addEventListener("click", startNewInterval)
document.getElementById("clearFibo").addEventListener("click", stopNewInterval)