function loadXMLDoc() {
	var matricula = document.getElementById('matricula').value;
	var nome = document.getElementById('nome').value;
	var tipousuario = document.getElementById('tipousuario').value;
	var email = document.getElementById('email').value;
	var senha = document.getElementById('senha').value;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4){ //&& xmlhttp.status==200) {
			document.getElementById("secao1").innerHTML = xmlhttp.responseText;
		}
	}
  xmlhttp.open("POST", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_cadastro_usuario", true);
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send('_data={"matricula": "'+ matricula +'", "nome": "'+nome+'", "tipo": "'+tipousuario+'", "email": "'+email+'", "senha":"'+senha+'"}');
}
