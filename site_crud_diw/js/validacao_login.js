var xmlhttp = new XMLHttpRequest();
function processarRequisicao() { //Função para processar a requisição
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
    var login_validar = "";
    var senha_validar = "";
    var a = JSON.parse(xmlhttp.responseText);
    var num = a.restify.rows.length;
    console.log(num);
    for (j = 0; j < num; j++) {
      var id = a.restify.rows[j].values.id.value;
      var login = a.restify.rows[j].values.login.value;
      var senha = a.restify.rows[j].values.senha.value;
      if (id==1){
        login_validar = login;
        senha_validar = senha;
      }
  }
    console.log(login_validar,senha_validar);
    Validar_Login(login_validar,senha_validar);
  }

}


function ExecutaAjax() { //Função para Executar o Ajax
  xmlhttp.onreadystatechange = processarRequisicao;
  xmlhttp.open("GET", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_seguranca", true);
  xmlhttp.send();
}

function Validar_Login (x,y){
  var login1 = document.getElementById('login').value;
  var senha1 = document.getElementById('senha').value;
  console.log("SENHAS DIGITADAS:",login1,senha1);
  if ((x==login1) && (y==senha1)) {
         window.location="index.html";
  }
  else {
    alert("Usuário ou senha incorretos, tente novamente");
  }
}


//{ window.location="index.html";}
