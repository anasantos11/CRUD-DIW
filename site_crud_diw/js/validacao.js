
function Validacao_Formulario() {
	var valor_login = document.getElementById('login').value;
	var valor_senha = document.getElementById('senha').value;
	if ((valor_login !="") && (valor_senha !="")) {
   			ExecutaAjax();
  }
  else {
    alert("Verifique se todos os campos estão preenchidos corretamente.");
  }
}

function Validacao_Formulario_inserir() {
	var matricula = document.getElementById('matricula').value;
	var nome = document.getElementById('nome').value;
	var data = document.getElementById('data').value;
	var tipo = document.getElementById('tipousuario').value;
	var email = document.getElementById('email').value;
	var senha = document.getElementById('senha').value;
	if ((matricula !="") && (nome !="") && (data !="") && (tipo !="Selecione o tipo de usuário") && (email !="") && (senha !="")   ) {
   			Insert();
  }
  else {
    alert("Verifique se todos os campos estão preenchidos corretamente.");
  }
}


function Validacao_Formulario_alterar() {
	var matricula = document.getElementById('matricula').value;
	var nome = document.getElementById('nome').value;
	var data = document.getElementById('data').value;
	var tipo = document.getElementById('tipousuario').value;
	var email = document.getElementById('email').value;
	var senha = document.getElementById('senha').value;
	if ((matricula !="") && (nome !="") && (data !="") && (tipo !="Selecione o tipo de usuário") && (email !="") && (senha !="")   ) {
   			alterarDados();
  }
  else {
    alert("Verifique se todos os campos estão preenchidos corretamente.");
  }
}
