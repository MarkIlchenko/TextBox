
let popupText = document.getElementById('popup-text');
let popupMessage = document.getElementById('popup-message');

popupText.addEventListener('blur', function() {
    popupMessage.style.display = 'none';
});

popupText.addEventListener('mouseout', function() {
    popupMessage.style.display = 'none';
});
