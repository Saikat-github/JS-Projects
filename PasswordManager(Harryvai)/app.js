
//Step 2
// Building Logic
const showPasswords = () => {
    let tb = document.querySelector("table");
    let data = localStorage.getItem("passwords");
    let arr = JSON.parse(data);
    if (arr.length == 0) {
        tb.innerHTML = "<h3>No Data To Show</h3>"
    } else {
        tb.innerHTML =
            `<tr>
                <th>Website</th>
                <th>Username</th>
                <th>Password</th>
                <th>Delete</th>
            </tr>`
        let str = ""
        // for (let i = 0; i < arr.length; i++) {
        //     const element = arr[i];
        //     str +=
        //         `<tr>
        //         <td>${element.website} <img onclick="copyText('${element.website}')" src="./copy2.svg" alt="Copy Button" width="10" width="20" height="10"></td>

        //         <td>${element.username} <img onclick="copyText('${element.username}')" src="./copy2.svg" alt="Copy Button" width="10" width="20" height="10"></td>

        //         <td>${maskPassword(element.password)} <img onclick="copyText('${element.password}')" src="./copy2.svg" alt="Copy Button" width="10" width="20" height="10"></td>

        //         <td><button onclick="deletePassword('${element.website}')" class="delBtn" id="${element.website}">Delete</button></td>
        //     </tr>`
        // }
        for (element of arr) {
            str +=
            `<tr>
                <td>${element.website} <img onclick="copyText('${element.website}')" src="./copy2.svg" alt="Copy Button" width="10" width="20" height="10"></td>

                <td>${element.username} <img onclick="copyText('${element.username}')" src="./copy2.svg" alt="Copy Button" width="10" width="20" height="10"></td>

                <td>${maskPassword(element.password)} <img onclick="copyText('${element.password}')" src="./copy2.svg" alt="Copy Button" width="10" width="20" height="10"></td>

                <td><button onclick="deletePassword('${element.website}')" class="delBtn" id="${element.website}">Delete</button></td>
            </tr>`
        }
        tb.innerHTML = tb.innerHTML + str
    }
}


//Step 1
// Storing passwords
showPasswords()
const inputs = document.querySelectorAll("input");

document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();
    let passwords = localStorage.getItem("passwords");
    if (passwords == null) {
        let json = []
        json.push({ website: website.value, username: username.value, password: password.value });
        alert("Password saved")
        localStorage.setItem("passwords", JSON.stringify(json))
    } else {
        let json = JSON.parse(localStorage.getItem("passwords"));
        json.push({ website: website.value, username: username.value, password: password.value });
        alert("Password saved")
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    for (let input of inputs) {
        input.value = ""
    }
    showPasswords()
})


//Step 3
//Delete Logic
const deletePassword = (website) => {
    console.log("deletebtn clicked")
    let data = localStorage.getItem("passwords");
    let arr = JSON.parse(data);
    arr = arr.filter((e) => {
        return e.website != website
    })
    localStorage.setItem("passwords", JSON.stringify(arr))
    alert(`Succesfully deleted ${website}'s password`)
    showPasswords()

}



//Step 4
// Copy Text 
function copyText(txt) {
    navigator.clipboard.writeText(txt).then(() => {
        document.querySelector("#alert").style.display = "inline"
        setTimeout(() => {
            document.querySelector("#alert").style.display = "none"
        }, 2000);
    },
        () => {
            alert("Clipboard copying failed")
        })
}


//Step 5
// Mask Password
function maskPassword(pass) {
    let str = ""
    for (let i = 0; i < pass.length; i++) {
        str += "*"
    }
    return str
}