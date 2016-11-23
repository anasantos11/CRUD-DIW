function Alterar(x) {
	var teste = x;
	console.log(teste);
	if (confirm ("Tem certeza que deseja alterar os dados?") ){
		var myWindow = window.open("", "myWindow", "width=200,height=100");
    myWindow.document.write("<p>This is 'myWindow'</p>");
    myWindow.opener.document.write("<p>This is the source window!</p>");
		}

}
/*
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
  xmlhttp.open("PUT", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_cadastro_usuario/"+x, true);
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send('_data={"matricula": "'+ matricula +'", "nome": "'+nome+'", "tipo": "'+tipousuario+'", "email": "'+
	email+'",  "senha":"'+senha+'", "data": "'+ data +'"}');
} */
