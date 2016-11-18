//Executar Ajax para demonstrar tabela
// Mostrar os departamentos em forma de tabela
  var xmlhttp = new XMLHttpRequest();
  function processarRequisicao() { //Função para processar a requisição
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      var a = JSON.parse (xmlhttp.responseText);
      var str = "";
      var num = a.restify.rows.length;
      for (j = 0; j < num; j++) {
        var id = a.restify.rows[j].values.id.value;
        str =  str + "<thead> <tr>" + "<td>" + id + "</td>" +
             "<td>" + a.restify.rows[j].values.matricula.value + "</td>" +
             "<td>" + a.restify.rows[j].values.nome.value + "</td>"+
             "<td>" + a.restify.rows[j].values.tipo.value + "</td>" +
             "<td>" + a.restify.rows[j].values.email.value + "</td>"+
             "<td>" + a.restify.rows[j].values.senha.value + "</td>" +
             "<td>" + "<button type='button' class='btn btn-success'>Alterar</button>" +
                      "<button type='button' class='btn btn-danger delete' onclick='deleteXMLDoc("+id+")' id='"+id+"'>Excluir</button>" +
                      "</td>" + "</tr> </thead>";
      }
     document.getElementById("tabela").innerHTML = "<table class='table table-hover'> <thead> <tr>" +
     "<th class='text-center'>ID</th>" + "<th class='text-center'>Matrícula</th>" +"<th>Nome</th>" +"<th class='text-center'>Tipo de usuário</th>" +
     "<th class='text-center'>E-mail</th>" + "<th class='text-center'>Senha</th>" + "<th class='text-center'>Ações</th>" + str + "</tr> </thead> </table>" ;
       }
  }
  window.onload = function ExecutaAjax() { //Função para Executar o Ajax
    xmlhttp.onreadystatechange = processarRequisicao;
    xmlhttp.open("GET", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_cadastro_usuario", true);
    xmlhttp.send();
  }
