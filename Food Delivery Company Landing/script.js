function orderNow() {
    alert("Welcome to FoodExpress!\nYour order process has started.");
}

/* Change banner text automatically */
let messages = [
    "Delicious Food Delivered Fast",
    "Hot Meals At Your Doorstep",
    "Fresh Food Anytime Anywhere"
];

let index = 0;

setInterval(() => {
    document.querySelector(".banner h1").innerText = messages[index];
    index = (index + 1) % messages.length;
}, 3000);


/* Button hover message in console */
document.querySelector("button").addEventListener("mouseover", function () {
    console.log("User is ready to order food!");
});


/* Welcome popup when page loads */
window.onload = function () {
    alert("Welcome to FoodExpress Website!");
};