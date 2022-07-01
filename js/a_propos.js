let b_restaurant = document.getElementById("bouton_restaurant");
let b_restaurateur = document.getElementById("bouton_restaurateur");

let restaurant = document.getElementById("restaurant");
let restaurateur = document.getElementById("restaurateur");

b_restaurant.addEventListener("click", () => {
    restaurant.style.display = "block";
    restaurateur.style.display = "none";
}
)

b_restaurateur.addEventListener("click", () => {
    restaurant.style.display = "none";
    restaurateur.style.display = "block";
}
)