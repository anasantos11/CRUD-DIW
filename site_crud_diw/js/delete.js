
		function deleteXMLDoc(x) {
			if (confirm ("Tem certeza que deseja excluir?") ){
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange=function() {
				if (xmlhttp.readyState==4 && xmlhttp.status==200) {
					window.alert("Os dados foram excluídos com sucesso.");
					window.location.reload();
				}
				if (xmlhttp.readyState==4 && xmlhttp.status>=400) {
					window.alert("Ocorreu algum erro na exclusão, atualize a página e tente novamente.");
					//window.alert(xmlhttp.responseText);
					window.location.reload();
				}
			}
      xmlhttp.open("DELETE", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_cadastro_usuario/"+x, true);
			xmlhttp.send();
		}
		}
