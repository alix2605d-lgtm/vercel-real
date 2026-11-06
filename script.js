const addButtons = document.querySelectorAll(".add-button");
const cartMessage = document.getElementById("cartMessage");

let cartCount = 0;

addButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        cartCount++;

        const watchName = button.closest(".watch-card").querySelector("h3").textContent;
        cartMessage.textContent = watchName + " added to your bag. Items in bag: " + cartCount;
        button.textContent = "Added!";
    });
});
