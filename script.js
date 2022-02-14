let quantity = document.getElementById("quantity");
let answer = document.getElementById("answer");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let submit = document.getElementById("submit");
let clear = document.getElementById("clear");
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

clear.addEventListener("click", ()=> {
        answer.value = "";
        num1.value = "";
        num2.value = "";
    }
)