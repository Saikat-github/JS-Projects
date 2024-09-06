// //Todo ; M+, M-, MC functional

// let string = "";
// let btns = document.querySelectorAll(".button");

// for(let btn of btns) {
//     btn.addEventListener("click", (e) => {
//         if(e.target.innerHTML === "=") {
//             string = eval(string);
//             document.querySelector('input').value = string;
//         } else if (e.target.innerHTML === "C") {
//             string = "";
//             document.querySelector('input').value = string;
//         } else if (e.target.innerHTML === "x") {
//             string = string + "*";
//             document.querySelector('input').value = string;
//         } else {
//             console.log("btn was clicked");
//             string = string + e.target.innerHTML;
//             document.querySelector('input').value = string;
//         }
//     })
// }





let string = "";
let btns = document.querySelectorAll(".button");

let input = document.querySelector("input");

for(let btn of btns) {
    btn.addEventListener("click", (e) => {
        if(btn.innerText === "=") {
            if(string) {
                string = eval(string);
                input.value = string
            } else {
                input.value = eval(input.value);
            }

        } else if (btn.innerText === "C") {
            string = ""
            input.value = string
        } else if (btn.innerText === "x") {
            string = string + "*";
            input.value = string;

        } else {
            string = string + btn.innerText;
            input.value = string;
        }
    })
}