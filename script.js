document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.querySelector(".nav-item.dropdown");
    dropdown.addEventListener("mouseover", function() {
        var dropdownContent = this.querySelector(".dropdown-content");
        dropdownContent.style.display = "block";
    });
    dropdown.addEventListener("mouseout", function() {
        var dropdownContent = this.querySelector(".dropdown-content");
        dropdownContent.style.display = "none";
    });

    var form = document.getElementById("password-form");
    form.addEventListener("submit", function(event) {
        var newPassword = document.getElementById("new-password").value;
        var confirmPassword = document.getElementById("confirm-password").value;

        if (newPassword !== confirmPassword) {
            event.preventDefault();
            alert("As senhas não coincidem. Por favor, verifique e tente novamente.");
        } else if (!/(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(newPassword)) {
            event.preventDefault();
            alert("A nova senha deve ter no mínimo 8 caracteres e incluir pelo menos uma letra maiúscula e uma letra minúscula.");
        }
    });
});
