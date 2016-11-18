
		function deleteXMLDoc() {
			var a = document.getElementById('x').value;
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange=function() {
				if (xmlhttp.readyState==4){ //&& xmlhttp.status==200) {
					document.getElementById("secao2").innerHTML = xmlhttp.responseText;
				}
			}
      xmlhttp.open("DELETE", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_cadastro_usuario/"+a, true);
			xmlhttp.send();
		}
	
