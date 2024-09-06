//Step 2-show
let table = document.querySelector("table");
let inputs = document.querySelectorAll("input");

const showPasswords = () => {
    let tb = `
                <tr>
                <th>Website</th>
                <th>Username</th>
                <th>Password</th>
                <th>Delete</th>
            </tr>`
    let str = "";
    let res = JSON.parse(localStorage.getItem("passwords"));
    if(res === null || res.length === 0) {
        table.innerHTML = `<h4>No Data Found</h4>`
    } else {
        for(let element of res) {
            str += `<tr>
            <td>${element.website} <img onclick="copyText('${element.website}')" src="./copy2.svg" alt="Copy Button" width="10" width="20" height="10"></td>

            <td>${element.username} <img onclick="copyText('${element.username}')" src="./copy2.svg" alt="Copy Button" width="10" width="20" height="10"></td>

            <td>${maskPassword(element.password)} <img onclick="copyText('${element.password}')" src="./copy2.svg" alt="Copy Button" width="10" width="20" height="10"></td>

            <td><button onclick="deletePassword('${element.website}')" class="delBtn" id="${element.website}">Delete</button></td>
        </tr>`
        }
        table.innerHTML = tb + str;
    }

}


//Step 3
const maskPassword = (arg) => {
    let str = ""
    for (let i = 0; i < arg.length; i++) {
        str += "*"
    }
    return str;
}


//Step 4
const copyText = (text) => {
    window.navigator.clipboard.writeText(text).then(() => {
        //copy succesful
        document.querySelector("#copy").classList.remove("copy");
        setTimeout(() => {
            document.querySelector("#copy").classList.add("copy");
        }, 2000);
    },
() => {
    // copy failed
    alert("Clipboard copying failed")
});

}


//Step 5
const deletePassword = (website) => {
    let res = JSON.parse(localStorage.getItem("passwords"));
    res = res.filter((e) => e.website != website)
    localStorage.setItem("passwords", JSON.stringify(res))
    showPasswords()
}

showPasswords()
//Step 1
document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault()
    let passwords = JSON.parse(localStorage.getItem("passwords"));
    if(passwords === null) {
        let json = [];
        json.push({website: website.value, username: username.value, password: password.value});
        localStorage.setItem("passwords", JSON.stringify(json))
    } else {
        let json = JSON.parse(localStorage.getItem("passwords"));
        json.push({website: website.value, username: username.value, password: password.value});
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    for(let input of inputs) {
        input.value = ""
    }
    showPasswords()
})


