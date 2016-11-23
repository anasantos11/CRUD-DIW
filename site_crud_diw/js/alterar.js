function Alterar(id,matricula,nome,tipo,email,senha,data) {


	//  FORMATANDO DATA
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
	datacorrigida = ano + "-" + mes + "-" + dia;
 //  FIM FORMATANDO DATA
	console.log(id,matricula,nome,tipo,email,senha,data, datacorrigida, dia, mes, ano);

	if (confirm ("Tem certeza que deseja alterar os dados?") ){
		document.getElementById("texto").innerHTML = "<br> <h4 class='lead text-center'> Preencha os campos abaixo e clique em enviar para alterar os dados da tabela: </h4>"
		document.getElementById("tabela").innerHTML =
		"<div class='table-responsive'>"  +
				"<table class='table table-hover'>" +
					"<thead>" +
					 	"<tr>" +
								"<th class='text-center'>ID</th>" +
								"<th class='text-center'>Matrícula</th>" +
								"<th class='text-center'>Nome</th>" +
								"<th class='text-center'>Tipo de usuário</th>" +
								"<th class='text-center'>E-mail</th>" +
								"<th class='text-center'>Senha</th>" +
								"<th class='text-center'>Data</th>" +
								"</tr>" +
						"</thead>" +
						"<tbody>" +
							"<tr>" +
									'<td id="id"> '+id+'</td>' +
									'<td > <input class="form-control input-sm" type="number" placeholder="Matrícula" id="matricula" value="'+matricula+'" ></td>'+
									'<td > <input class="form-control input-sm" type="text"  placeholder="Nome" id="nome" value="'+nome+'"> </td>'+
									'<td > <select class="form-control input-sm" placeholder="Selecione o tipo de usuário." id="tipousuario" >'+
										'<option selected="">'+tipo+'</option>'+
										'<option>Aluno</option>'+
										'<option>Professor</option>'+
										'</select>    </td>'+
									'<td > <input class="form-control input-sm" type="email" placeholder="E-mail" id="email" value="'+email+'" ></td>'+
									'<td > <input class="form-control input-sm" type="senha" placeholder="Senha" id="senha" value="'+senha+'"></td>'+
									'<td > <input class="form-control input-sm" type="date" id="data" value="'+datacorrigida+'"></td>'+
								"</tr>"+
							"</tbody>" +
					"</table>" +
			"</div>" +
			'<button class="btn btn-primary btn-lg "type="button" name="button" onclick="alterarDados()"> Alterar dados</button>'
		}


}
