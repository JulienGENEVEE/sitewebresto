let entree = getElementById("entree");
let plat = getElementById("plat");
let dessert = getElementById("dessert");


function entree(){
    if ()
}

var users = [
    {email: "AAAAA@gmail.fr", mdp:"ZZZZZ"},
    {email: "BBBBB@hotmail.be", mdp:"YYYYY"},
    {email: "CCCCC@yahoo.com", mdp:"XXXXX"},
    {email: "DDDDD@msn.net", mdp:"WWWWW"},
    {email: "EEEEE@orange.fr", mdp:"VVVVV"},
]

function verifCompte(){
    let emailTxt = document.getElementById("email").value;
    let mdpTxt = document.getElementById("mdp").value;
    let info = document.getElementById("connexionInfo");

    validageEmail()
 
    for (let i=0; i<users.length;i++){
        if(users[i].email == emailTxt && users[i].mdp == mdpTxt){
            info.innerHTML="Connexion";
            break;
        }
        else if(users[i].email != emailTxt || users[i].mdp != mdpTxt){
            info.innerHTML="Email ou mot de passe incorrectes";
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