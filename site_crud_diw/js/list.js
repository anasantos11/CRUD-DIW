//Executar Ajax para demonstrar tabela
  var xmlhttp = new XMLHttpRequest();
  function processarRequisicao() { //Função para processar a requisição
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      var a = JSON.parse (xmlhttp.responseText);
      var str = "";
      var num = a.restify.rows.length;
      for (j = 0; j < num; j++) {
        var id = a.restify.rows[j].values.id.value;
        var matricula = a.restify.rows[j].values.matricula.value;
        var nome = a.restify.rows[j].values.nome.value;
        var tipo = a.restify.rows[j].values.tipo.value;
        var email = a.restify.rows[j].values.email.value;
        var senha = a.restify.rows[j].values.senha.value;
        var data = a.restify.rows[j].values.data.value;
        // FORMATANDO DATA
        var datacorrigida = new Date(data);
        var dia = datacorrigida.getDate();
        var mes =  datacorrigida.getMonth()+1;
        var ano =  datacorrigida.getFullYear();
        if (dia < 10){
          dia = "0" + dia;
        }
        if (mes < 10){
          mes = "0" + mes;
        }
        datacorrigida = dia + "/" + mes + "/" + ano;
       //  FIM FORMATANDO DATA
        str =  str + "<tbody> <tr>" + "<td>" + id + "</td>" +
             "<td>" + matricula + "</td>" +  "<td>" + nome+ "</td>"+
             "<td>" + tipo + "</td>" + "<td>" + email + "</td>"+
             "<td>" + senha + "</td>" + "<td>" + datacorrigida + "</td>" +
             "<td>" +   '<button type="button" class="btn btn-success" onclick="Alterar('+id+','+matricula+', \'' + nome + '\', \'' + tipo + '\', \'' + email + '\',\'' + senha + '\',\'' + data + '\' );">Alterar</button>' +
                "<button type='button' class='btn btn-danger' onclick='deleteXMLDoc("+id+")'>Excluir</button>" +
                "</td>" + "</tr> </tbody>";
      }
     document.getElementById("tabela").innerHTML = "<div class='table-responsive'>" + "<table class='table table-hover'> <thead> <tr>" +
     "<th class='text-center'>ID</th>" + "<th class='text-center'>Matrícula</th>" +"<th class='text-center'>Nome</th>" +"<th class='text-center'>Tipo de usuário</th>" +
     "<th class='text-center'>E-mail</th>" + "<th class='text-center'>Senha</th>" + "<th class='text-center'>Data</th>" +
     "<th class='text-center'>Ações</th>" + "</tr> </thead>" + str +" </table> </div>" ;
       }
  }
  window.onload = function ExecutaAjax() { //Função para Executar o Ajax
    xmlhttp.onreadystatechange = processarRequisicao;
    xmlhttp.open("GET", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_cadastro_usuario", true);
    xmlhttp.send();
  }

// <input class='form-control input-sm' type='text'  placeholder=''" id="nome"> </td>
