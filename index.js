const inputField = document.getElementById("inputField");
const message = document.getElementById("message");

inputField.addEventListener("focus", () => {
    message.style.display = "block";
});

inputField.addEventListener("blur", () => {
    message.style.display = "none";
});
