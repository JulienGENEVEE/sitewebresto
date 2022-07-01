// bouton dans index //

let b_entree = document.getElementById("bouton_entree");
let b_plat = document.getElementById("bouton_plat");
let b_dessert = document.getElementById("bouton_dessert");

let entree = document.getElementById("entree");
let plat = document.getElementById("plat");
let dessert = document.getElementById("dessert");

b_entree.addEventListener("click", () => {
    entree.style.display = "block";
    plat.style.display = "none";
    dessert.style.display = "none";
}
)

b_plat.addEventListener("click", () => {
    entree.style.display = "none";
    plat.style.display = "block";
    dessert.style.display = "none";
}
)

b_dessert.addEventListener("click", () => {
    entree.style.display = "none";
    plat.style.display = "none";
    dessert.style.display = "block";
}
)

// e-mail verif //

var users = [
    {email: "AAAAA@gmail.fr"},
    {email: "BBBBB@hotmail.be"},
    {email: "CCCCC@yahoo.com"},
    {email: "DDDDD@msn.net"},
    {email: "EEEEE@orange.fr"},
]

function verifCompte(){
    let emailTxt = document.getElementById("email").value;
    let info = document.getElementById("connexionInfo");

    validageEmail()
 
    for (let i=0; i<users.length;i++){
        if(users[i].email == emailTxt){
            info.innerHTML="Connexion";
            break;
        }
        else if(users[i].email != emailTxt){
            info.innerHTML="Email incorrectes";
        }
    }
}

function validageEmail(){
    let verif = document.getElementById("email").value;
    let emailReg = new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/i);
    let valid = emailReg.test(verif);
    console.log(valid)
    if (!valid){
        return alert ("Email Invalide");
    }
    else {
        return alert ("Email Valide");
    }
}