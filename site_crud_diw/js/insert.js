function Insert() {
	if (confirm ("Tem certeza que deseja inserir os dados?") ){
	var matricula = document.getElementById('matricula').value;
	var nome = document.getElementById('nome').value;
	var tipousuario = document.getElementById('tipousuario').value;
	var email = document.getElementById('email').value;
	var senha = document.getElementById('senha').value;
	var data = document.getElementById('data').value;
	console.log(data);
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			window.alert("Os dados foram inclusos com sucesso.");
			window.location.reload();
			}
		if (xmlhttp.readyState==4 && xmlhttp.status>=400) {
			window.alert("Ocorreu algum erro. Atualize a página e tente novamente.");
			window.location.reload();
			}

		}
	}
  xmlhttp.open("POST", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_cadastro_usuario", true);
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send('_data={"matricula": "'+ matricula +'", "nome": "'+nome+'", "tipo": "'+tipousuario+'", "email": "'+
	email+'",  "senha":"'+senha+'", "data": "'+ data +'"}');
}
