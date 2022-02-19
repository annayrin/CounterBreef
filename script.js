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
let container = document.getElementById("container");
let theme = document.getElementById("theme");
let span = document.getElementById("span");
let spinner = document.getElementById("spinner");
let spinning = document.getElementById("spinning");

let newCounter = new Counter(quantity.value);


document.getElementById("add").addEventListener("click",()=>{
    quantity.value = newCounter.up();
} )
document.getElementById("subtract").addEventListener("click", ()=> {
    quantity.value = newCounter.down();
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
start.addEventListener("click", startInterval);

stop.addEventListener("click", stopInterval);

function Counter(x) {

    this.count = x;

    this.up = function() {
        return ++this.count;
    };
    this.down = function() {
        return --this.count;
    };
}

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
        // interval.value++;
          span.value++;
          spinning.classList.add("spin");
     }, 1000)
}

function stopInterval(){
    clearInterval(intro);
    //interval.value="";
    span.value = "";
    spinning.classList.remove("spin");
}



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

function endNewInterval(){
    if (introNew) {
        clearInterval(introNew);
    }
    document.getElementById("fibonachi").value ="";
    n=0;
}

function stopNewInterval(){
    if (introNew) {
        clearInterval(introNew);
    }
}
document.getElementById("stopFibo").addEventListener("click", stopNewInterval);


document.getElementById("addFibo").addEventListener("click", ()=>{
    document.getElementById("fibonachi").value += fibo(n)+ " ";
    n++;
})
document.getElementById("startFibo").addEventListener("click", startNewInterval)
document.getElementById("clearFibo").addEventListener("click", endNewInterval);

document.getElementById("theme").addEventListener("click",()=>{
   if(container.classList.contains("light")) {
       container.classList.remove("light");
       container.classList.add("dark");
       theme.innerHTML = "Light Mode";
   }
   else{
       container.classList.add("light");
       container.classList.remove("dark");
       theme.innerHTML = "Dark Mode";
   }
})