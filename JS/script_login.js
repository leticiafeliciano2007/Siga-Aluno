document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    
    // Verifica se o username é 'aluno' ou um número de 11 dígitos
    var isValidUsername = (username === "aluno" || /^\d{11}$/.test(username));
    
    if (isValidUsername && password.length > 0) {
        window.location.href = "mural.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }
});

document.getElementById('esqueceuSenha').addEventListener('click', function() {
    alert('Usuário= aluno\nSenha= 123123');
});

document.getElementById('ajudaBtn').addEventListener('click', function() {
    alert('Ajuda indisponível no momento');
});
