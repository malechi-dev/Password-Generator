//list of all 91 possible characters available for passwords
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//set button ids as variables
let buttonOne = document.getElementById("button1")
let buttonTwo = document.getElementById("button2")
let copyMessage = document.getElementById("copymessage")
//passwords begin as empty lists
let passwordOne = []
let passwordTwo = []

//function called upon click in html
function generatePw() {
  //runs 15 times, once for each character. Generates a random character from the 91 in the characters list.
    for (i=0; i<16; i++) {
        let index = Math.floor(Math.random()*90)
        passwordOne[i] = characters[index]
    }
    //again for second password.
    for (i=0; i<16; i++) {
        let index = Math.floor(Math.random()*90)
        passwordTwo[i] = characters[index]
    }
    //new variable joins list into a string, and removes commas.
    let password1 = passwordOne.join().replace(/,/g,"")
    let password2 = passwordTwo.join().replace(/,/g,"")
    //buttons display passwords.
    buttonOne.textContent = password1
    buttonTwo.textContent = password2
}

//adds event listener to take content of first password button and copy to clipboard.
for (const elem of document.querySelectorAll("#button1")) {
  elem.addEventListener("click", e => {
    const ta = document.createElement("textarea");
    ta.innerText = e.target.innerText;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    copyMessage.textContent = "Password copied to clipboard!"
  });
}
//adds event listener to take content of second password button and copy to clipboard.
for (const elem of document.querySelectorAll("#button2")) {
  elem.addEventListener("click", e => {
    const ta = document.createElement("textarea");
    ta.innerText = e.target.innerText;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    copyMessage.textContent = "Password copied to clipboard!"
  });
}

