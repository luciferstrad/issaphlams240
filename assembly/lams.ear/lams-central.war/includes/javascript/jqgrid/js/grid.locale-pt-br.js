;(function($){
/**
 * jqGrid Brazilian-Portuguese Translation
 * Junior Gobira juniousbr@gmail.com
 * http://jnsa.com.br
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = {};

$.jgrid.defaults = {
	recordtext: "Registro(s)",
	loadtext: "Carregando...",
	pgtext : "/"
};
$.jgrid.search = {
    caption: "Procurar...",
    Find: "Procurar",
    Reset: "Resetar",
    odata : ['igual', 'diferente', 'menor', 'menor igual','maior','maior igual', 'come�ando com','terminando com','cont�m' ]
};
$.jgrid.edit = {
    addCaption: "Incluir",
    editCaption: "Alterar",
    bSubmit: "Enviar",
    bCancel: "Cancelar",
	bClose: "Fechar",
    processData: "Carregando...",
    msg: {
        required:"Campo � requerido",
        number:"Por favor, informe um n�mero v�lido",
        minValue:"valor deve ser igual ou maior que ",
        maxValue:"valor deve ser menor ou igual a",
        email: "este e-mail n�o � v�lido",
        integer: "Por favor, informe um valor inteiro",
		date: "Please, enter valid date value"
    }
};
$.jgrid.del = {
    caption: "Delete",
    msg: "Deletar registros selecionado(s)?",
    bSubmit: "Delete",
    bCancel: "Cancelar",
    processData: "Carregando..."
};
$.jgrid.nav = {
	edittext: " ",
    edittitle: "Alterar registro selecionado",
	addtext:" ",
    addtitle: "Incluir novo registro",
    deltext: " ",
    deltitle: "Deletar registro selecionado",
    searchtext: " ",
    searchtitle: "Procurar registros",
    refreshtext: "",
    refreshtitle: "Recarrgando Tabela",
    alertcap: "Aviso",
    alerttext: "Por favor, selecione um registro"
};
// setcolumns module
$.jgrid.col ={
    caption: "Mostrar/Esconder Colunas",
    bSubmit: "Enviar",
    bCancel: "Cancelar"
};
$.jgrid.errors = {
	errcap : "Erro",
	nourl : "Nenhuma URL defenida",
	norecords: "Sem registros para exibir"
};
})(jQuery);
