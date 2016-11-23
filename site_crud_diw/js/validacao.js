
function Valida_Form() {
	var matricula = document.getElementById('matricula').value;
	var nome = document.getElementById('nome').value;
	var tipousuario = document.getElementById('tipousuario').value;
	var email = document.getElementById('email').value;
	var senha = document.getElementById('senha').value;
	var data = document.getElementById('data').value;

  if( (matricula !="") && (nome !="") && (tipousuario !="Selecione o tipo de usuário") && (email !="") && (senha !="") && (data !="")){
    Insert();
  }
  else {
    alert("Verifique se todos os campos estão preenchidos corretamente.");
			document.getElementById('matricula').focus();

  }
}
