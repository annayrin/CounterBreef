let quantity = document.getElementById("quantity");
let answer = document.getElementById("answer");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let submit = document.getElementById("submit");
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

submit.addEventListener("click", () => {

    answer.value = add(+num1.value)(+num2.value);
    }
)

function add(a) {
    return (b) => a+b;
}

clear.addEventListener("click", () => {
        answer.value = "";
        num1.value = "";
        num2.value = "";
    }
)

let intro;

function startTimeout() {
      intro = setInterval(() => {
         interval.value++;
     }, 1000)
}

function stopInterval(){
    clearInterval(intro);
    interval.value="";
}


start.addEventListener("click", startTimeout);
stop.addEventListener("click", stopInterval);