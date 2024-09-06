//Step1
// let btns = document.querySelectorAll(".box");
// let turn = true;
// let msg = document.querySelector("#msg");
// let msgContainer = document.querySelector(".show-result")
// let count = 0;


// const winningTurns = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8],
// ];


//Step5
// const disableBtn = () => {
//     for(let btn of btns) {
//         btn.disabled = true;
//     }
// };


//Step9
// const enableBtn = () => {
//     for(let btn of btns) {
//         btn.disabled = false;
//     }
// };


//Step6
// const showWinner = (winner) => {
//     msg.innerText = `Winner is ${winner}`;
//     msgContainer.classList.remove("hide");
// };



//Step3
// const checkWinner = () => {
//     for(let pattern of winningTurns) {
//         let pos1 = btns[pattern[0]].innerText;
//         let pos2 = btns[pattern[1]].innerText;
//         let pos3 = btns[pattern[2]].innerText;
    
//     if(pos1 != "" && pos2 != "" && pos3 != "") {
//         if(pos1 === pos2 && pos2 === pos3) {
//             showWinner(pos1);
//             disableBtn();
//             return true;
//         }
//     }
//     }
// };


//Step4
// const gameDraw = () => {
//     msg.innerText = `Game was a draw! Play again.`;
//     msgContainer.classList.remove("hide");
// };



//Step2
// for(let btn of btns) {
//     btn.addEventListener("click", () => {
//         if(turn) {
//             btn.innerText = "o";
//             turn = false
//         } else {
//             btn.innerText = "x";
//             turn = true;
//         }
//         btn.disabled = true;
//         count++;
//         let winner = checkWinner();
//         if(count === 9 && !winner) {
//             gameDraw()
//         }
//     })
// };


//Step8
// const resetGame = () => {
//     count = 0;
//     msgContainer.classList.add("hide");
//     enableBtn();
//     for(let btn of btns) {
//         btn.innerText = "";
//     }
//     turn = true;
// };


//Step7
// document.querySelector("#reset-btn").addEventListener("click", resetGame);
// document.querySelector("#new-btn").addEventListener("click", resetGame);




let btns = document.querySelectorAll(".btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnx = true;
let count = 0;


const winningTurns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const disableBtn = () => {
    for(let btn of btns) {
        btn.disabled = true;
    }
};


const enableBtn = () => {
    for(let btn of btns) {
        btn.disabled = false;
    }
}


const showWinner = (winner) => {
    msg.innerText = `Winner is - ${winner}`;
    msgContainer.classList.remove("hide");
};


const checkWinner = () => {
    for(let winner of winningTurns) {
        let pos1 = btns[winner[0]].innerText;
        let pos2 = btns[winner[1]].innerText;
        let pos3 = btns[winner[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                disableBtn();
                return true;
            }
        }
    }
};


const gameDraw = () => {
    msg.innerText = "Game was a draw! Play again."
    msgContainer.classList.remove("hide");
}


const btnPress = (btn) => {
    if(turnx) {
        btn.innerText = "x";
        turnx = false;
    } else {
        btn.innerText = "o";
        turnx = true;
    }
    btn.disabled = true;
    count++;
    let winner = checkWinner();
    if(count === 9 && !winner) {
        gameDraw()
    }
};


for(let btn of btns) {
    btn.addEventListener("click", () => {
        btnPress(btn);
    })
};


const resetGame = () => {
    count = 0;
    turnx = true;
    msgContainer.classList.add("hide");
    enableBtn();
    for(let btn of btns) {
        btn.innerText = ""
    };
}


document.querySelector("#reset-btn").addEventListener("click", resetGame);
document.querySelector("#new-btn").addEventListener("click", resetGame);

