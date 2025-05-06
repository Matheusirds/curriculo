function validarFormulario() {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let tel = document.getElementById("telefone").value;
  let mensagem = document.getElementById("mensagem").value;

  if (
    nome.trim() === "" ||
    email.trim() === "" ||
    tel.trim() === "" ||
    mensagem.trim() === ""
  ) {
    alert("Por favor, preencha todos os campos obrigatórios: Nome, Email, Telefone e Mensagem.");
    return false;
  } else {
    alert("Formulário enviado com sucesso!");
    alterarBotao();
    return true;
  }
}

function alterarBotao() {
  document.getElementById("botaoEnviar").value = "Enviado!";
}
window.onload = function() {
  setTimeout(function() {
    document.getElementById("welcomeMessage").style.display = "none"; // Esconde a tela de boas-vindas
    document.querySelector(".content").classList.add("show"); // Exibe o conteúdo
  }, 3000); // 3 segundos para mostrar a tela de boas-vindas antes de esconder
};

    
 