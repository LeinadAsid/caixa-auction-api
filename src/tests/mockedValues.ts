export const carregaListaCidades = `<option value=''>Selecione</option><option value='6981'>ABARRACAMENTO<option value='6987'>ANGRA DOS REIS`;
export const carregaListaImoveis = `<input type='hidden' name='hdnImov1' id='hdnImov1' value='01555532580855||01444410505954'><input type='hidden' name='hdnFiltro' id='hdnFiltro' value='RJ||6987||||||4||0,01||999999999,99||0||||0||||||||||||0||999999'><input type='hidden' name='hdnQtdPag' id='hdnQtdPag' value='1'><input type='hidden' name='hdnPagNum' id='hdnPagNum' value='1'><input type='hidden' name='hdnQtdRegistros' id='hdnQtdRegistros' value='2'><span class='legend-desc lighter milli'>Foram encontrados 2 imóveis.</span>`;

//example response from detalhe-imovel endpoint.
export const detalheImovel = `
<!DOCTYPE html>
<html lang="en-US">

<head>
	<meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
	
	
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-NDBHSL');</script>
	<!-- End Google Tag Manager -->	
	
	
    <link rel="shortcut icon" href="favicon.ico"/>
    <link rel="stylesheet" href="assets/css/normalize.css" media="screen"/>
    <link rel="stylesheet" href="assets/css/base.css?" media="screen"/>
    <!--link rel="stylesheet" href="assets/css/icons.css" media="screen"/-->
    <link rel="stylesheet" href="assets/css/wider.css" media="screen and (min-width: 500px)"/>
    <link rel="stylesheet" href="assets/css/form-flow.css" media="screen" />
    <link rel="stylesheet" href="assets/css/jquery-ui-1.8.11.custom.css?v=1.0" rel="stylesheet" />	
	<link rel="stylesheet" href="assets/css/imoveisavenda.css" media="screen"/>
    <link rel="stylesheet" href="assets/css/products.css" media="screen"/>
	<link rel="stylesheet" href="assets/css/global.css" media="screen"/>
	<link rel="stylesheet" href="assets/css/caixa.css" media="screen"/>
	<link rel="stylesheet" href="assets/css/icon-aewsome.css" media="screen"/>
	
    <title>Caixa - Imóveis à venda</title>
	
	<script src="assets/js/jquery-1.10.2.min.js"></script>
	<script src="assets/js/jquery-ui.js"></script>
	<script src="assets/js/global.js"></script>
	<script src="assets/js/jquery.mask.min.js"></script>
	<script src="assets/js/jquery.maskMoney.js"></script>
	<script src="assets/js/modernizr.js"></script>
	<script src="assets/js/products.js"></script>
	<script src="assets/js/simovUtil.js"></script>
	<script src="assets/js/simov_navegacao.js?v=1.0"></script>
	<script src="assets/js/form-flow.js"></script>
	
    <style type="text/css">
      .thumbnails img {
        height: 80px;
        border: 1px solid #eee;
        padding: 1px;
        margin: 0 10px 10px 0;
      }

      .thumbnails img:hover {
        border: 1px solid #ff7200;
        cursor:pointer;
      }

      .preview img {
        border: 1px solid #eee;
        padding: 1px;
        max-width: 95%;
      }
    </style>
	
	<script>
	
		jQuery(document).ready(
			function() {
				jQuery('.foto').click(function(e) {	
					e.preventDefault();
				});
				//jQuery('#minhalista').click(function(e) {	
				//	e.preventDefault();
				//});
				
				jQuery('#btn_buscarimoveis').click(function(e) {
					$('#frm_detalhe').attr('action','busca-imovel.asp').trigger('submit');
				});
				
				jQuery('#btn_disputas').click(function(e) {
					$('#frm_detalhe').attr('action','venda-online/disputas.asp').trigger('submit');
				});	
				
				jQuery('#btn_resultados').click(function(e) {
					$('#frm_detalhe').attr('action','venda-online/resultados.asp').trigger('submit');
				});
				jQuery('#btn_favoritos').click(function(e) {
					$('#frm_detalhe').attr('action','venda-online/favoritos.asp?acessodireto=1').trigger('submit');
				});	
				
				jQuery('#btn_dados').click(function(e) {
					$('#frm_detalhe').attr('action','venda-online/dados-proponente.asp?hdnimovel=01444410505954').trigger('submit');
				});
				
		});	
	
	</script>
	
</head>

<body class="produto imoveis-a-venda">


<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NDBHSL"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->


<div class="wrapper">
    
	<div class="section noprint" ></div>
	
    <div class="content-hero content-section section-index noprint">
        <p class="breadcrumb">
            <a href="http://www.caixa.gov.br/Paginas/home-caixa.aspx">Início</a> › <a href="http://www.caixa.gov.br/voce/Paginas/default.aspx">Produtos para você</a> › <a href="index.asp">Imóveis à venda</a> › Detalhe
        </p>
		<br />
		<div class="special2" style="padding-left: 40px; padding-right:40px;">
			<div class="section-index2">
				<ul class="menu-simov-direita no-bullets">
					<li>
						<button type="button" class="submit-d submit-orange submit-small" id="btn_buscarimoveis">Buscar<br/>imóveis</button>
					</li>
					<li>
						<button type="button" class="submit-d submit-orange submit-small" id="btn_disputas">Minhas<br/>disputas</button>
					</li>
					<li>
						<button type="button" class="submit-d submit-orange submit-small" id="btn_resultados">Meus<br/>resultados</button>
					</li>
					<li>
						<button type="button" class="submit-d submit-orange submit-small" id="btn_favoritos">Meus<br/>favoritos</button>
					</li>
					<li>
						<button type="button" class="submit-d submit-orange submit-small" id="btn_dados">Dados<br />cadastrais</button>
					</li>					
				</ul>
			</div>
		</div>			
    </div>
	<form method="post" id="frm_detalhe">
		<div id="dadosImovel" class="content-section section-text with-box" style="padding-top: 20px;">
			<a href="#" class="top-link visible-mobile">Topo</a>

			<div class='content-wrapper clearfix'>
			
					<div class='control-item control-span-12_12'>
						<h5 style="margin-bottom: 0.5rem; color: #006bae;">
							COND ACONCHEGO DE ANGRA II
							<input type="hidden" name="hdnNumTipoVenda" id="hdnNumTipoVenda" value="">
							<input type="hidden" name="hdn_tp_imovel" id="hdn_tp_imovel" value="">
							<input type="hidden" name="hdn_quartos" id="hdn_quartos" value="">
							<input type="hidden" name="hdn_vg_garagem" id="hdn_vg_garagem" value="">
							<input type="hidden" name="hdn_area_util" id="hdn_area_util" value="">
							<input type="hidden" name="hdn_faixa_vlr" id="hdn_faixa_vlr" value="">
							<input type="hidden" name="hdn_vlr_maximo" id="hdn_vlr_maximo" value="">
							<input type="hidden" name="hdn_estado" id="hdn_estado" value="">
							<input type="hidden" name="hdn_cidade" id="hdn_cidade" value="6987">
							<input type="hidden" name="hdn_bairro" id="hdn_bairro" value="">
							<input type="hidden" name="hdn_nobairro" id="hdn_nobairro" value="">
							<input type="hidden" name="hdn_nocidade" id="hdn_nocidade" value="">
							<input type="hidden" name="hdnImov1" id="hdnImov1" value="">
							<input type="hidden" name="hdnQtdPag" id="hdnQtdPag" value="">
							<input type="hidden" name="hdnPagNum" id="hdnPagNum" value="">
							<input type="hidden" name="hdnQtdRegistros" id="hdnQtdRegistros" value="">
							<input type="hidden" name="hdninteresse" id="hdninteresse" value="">
							<input type="hidden" name="hdnimovel" id="hdnimovel" value="01444410505954">

							<input type="hidden" name="hdnNumLicit" id="hdnNumLicit" value="">
							<input type="hidden" name="hdnSgComissao" id="hdnSgComissao" value="">
							<input type="hidden" name="frmVendaOnline" id="frmVendaOnline" value="">							
							<input type="hidden" name="hdnorigem" id="hdnorigem" value="detalhe">
							
							<input type="hidden" name="hdn_modalidade" id="hdn_modalidade" value="">
							
						</h5>
					</div>
					
				<div class='content'>
					<p style='font-size:14pt'>Valor de avaliação: R$ 279.000,00<br /><b>Valor mínimo de venda: R$ 205.846,20</b> ( desconto de 26,22%)</p>
					
					<div class='control-item control-span-6_12'>
						<p>
							<span>Tipo de imóvel: <strong>Casa</strong></span><br>
							<!--span>Situação: <strong>Desocupado</strong></span><br-->
							<span>Quartos: <strong>2</strong></span><br><span>Garagem: <strong>1</strong></span><br>
							<span>Número do imóvel: <strong>144441050595-4</strong></span><br>
							<span>Matrícula(s): <strong>22029</strong></span><br>
							<span>Comarca: <strong>ANGRA DOS REIS-RJ</strong></span><br>
							<span>Ofício: <strong>01</strong></span><br>
							<span>Inscrição imobiliária: <strong>02180820318002</strong></span><br>
							
							<span>Averbação dos leilões negativos: <strong>
							Averbado
							</strong></span><br>
						</p>
					</div>
					
					<div class='control-item control-span-6_12'>
						<p>
							<span>Área privativa = <strong>71,87m2</strong></span><br><span>Área do terreno = <strong>119,99m2</strong></span><br>
						</p>
					</div>
					
					<div class='control-item control-span-6_12'>
						<p>
						</p>
					</div>					
					
					
				</div>

				<div class="related-box" style="padding: 20px;">
				<div id='divContador'></div><p style='margin-bottom: 0.5em;'><strong>Endereço:</strong><br>ALAMEDA DOS TUCANOS (ANTIGA RUA L)   QD 28 LT 46 CS 03, PONTAL (CUNHAMBEBE) - CEP: 23900-000, ANGRA DOS REIS - RIO DE JANEIRO</p><br><span><a href='#' class='' onclick=javascript:ExibeDoc('/editais/matricula/RJ/1444410505954.pdf')>Baixar matrícula do imóvel</a></span><p style='margin-bottom: 0.5em;'><strong>Descrição:</strong><br>2  Quartos, 1 Vaga na Garagem,  Varanda/sacada,  Área de Serviço, 2 Wc,  Sala,  Cozinha.&nbsp;.</p><p><i class='fa fa-info-circle'></i>&nbsp;Imóvel NÃO aceita financiamento habitacional.<br /><i class='fa fa-info-circle'></i> Imóvel NÃO aceita parcelamento.<br /><i class='fa fa-info-circle'></i> Imóvel NÃO aceita consórcio.<br /></p></div>
					<div class='control-item control-span-6_12' style='padding-top:10px;'><ul class='form-set no-bullets' style="margin-top: 0px; margin-botton: 5px;width:80% !important;">
							<li class='' style='margin-top: 0px; margin-botton: 5px;'>	<span style='font-size:10pt;'><a href='javascript:regrasVendaOnline();' style='cursor:hand;'><img src='venda-online/images/icon-condicoes.jpg?v1.0' width='30px'>&nbsp;<strong>Regras da Venda Online</strong></a></span>&nbsp;	<span style='font-size:10pt;'><a href='javascript:formasPagamento();' style='cursor:hand;'><img src='venda-online/images/icon-pagamento.jpg?v1.0' width='30px'>&nbsp;<strong>Formas de pagamento</strong></a></span>	</li>	<li class=''>		<button type='button' class='submit-d submit-orange' onclick='javascript:Proposta()'>Fazer uma proposta</button>&nbsp;&nbsp;    	<span>&nbsp;ou&nbsp;<a href='javascript:Retornar();' style='cursor:hand;'>Voltar</a></span>	</li>
						</ul>
					</div>				
				</div></div>
		
		<div id="galeria-imagens" class="content-section section-slider">
			<a href="#" class="top-link visible-mobile">Topo</a>
			<h2>Galeria de fotos</h2>
			<!--div class="slider">
				<div class="slider-wrapper2">
					<ul class="slider-itens">
						
					</ul>
				</div>
			</div-->
			
			<div class="thumbnails" align="center">
				<img onclick='preview.src="/fotos/F144441050595421.jpg"' src='/fotos/F144441050595421.jpg' alt='Foto do imóvel' title='Foto do imóvel')><img onclick='preview.src="/fotos/F144441050595422.jpg"' src='/fotos/F144441050595422.jpg' alt='Foto do imóvel' title='Foto do imóvel')>
				<!--img onclick="preview.src='F000000000000141.jpg'" id="img3" src="F000000000000142.jpg" alt="Image Not Loaded"/>
				<img onclick="preview.src='F818860012403021.jpg'" id="img3" src="F818860012403021.jpg" alt="Image Not Loaded"/>
				<img onclick="preview.src='F818860012403022.jpg'" id="img3" src="F818860012403022.jpg" alt="Image Not Loaded"/>
				<img onclick="preview.src='F820131217308821.jpg'" id="img3" src="F820131217308821.jpg" alt="Image Not Loaded"/-->

				</div>
				<br/>

				<div class="preview" align="center">
					
					<!--img onclick="javascript:window.open(this.src, 'Foto', 'scrollbars=yes,width=700,height=600');" id="preview" src="/fotos/" alt=""/-->
					<img id="preview" src="/fotos/F144441050595421.jpg" alt="Foto do imóvel"/>
					
				</div>
				<br/>			
			</div>
		</div>
	</form>

    <div class="content-section section-related">

		<h2>Outros produtos Caixa</h2>

        <ul class="related-content">
            <li>
                <h3 class="zeta"><a href="http://www.caixa.gov.br/voce/credito-financiamento">Melhor crédito para você</a></h3>
                <p>Se você acredita que pode mais, a Caixa acredita com você.
                </p>
                <p class="see-more"><a href="http://www.caixa.gov.br/voce/credito-financiamento">Veja as opções &rsaquo;</a></p>
            </li>
            <li>
                <h3 class="zeta"><a href="http://www.caixa.gov.br/voce/habitacao">Casa própria</a></h3>
                <p>Venha para a Caixa e a realize o sonho da casa própria.</p>
                <p class="see-more"><a href="http://www.caixa.gov.br/voce/habitacao">Compre sua casa própria &rsaquo;</a></p>
            </li>
            <li>
                <h3 class="zeta"><a href="http://www.caixa.gov.br/voce/cartoes">Cartões Caixa</a></h3>
                <p>A Caixa tem sempre um cartão perfeito para você.</p>
                <p class="see-more"><a href="http://www.caixa.gov.br/voce/cartoes">Escolha agora o seu &rsaquo;</a></p>
            </li>
            <li>
                <h3 class="zeta"><a href="http://www.caixa.gov.br/voce/contas">Contas Caixa</a></h3>
                <p>As contas Caixa têm as menores tarifas do mercado.</p>
                <p class="see-more"><a href="http://www.caixa.gov.br/voce/contas">Abra sua conta &rsaquo;</a></p>
            </li>
        </ul>
    </div>	
	
    <footer id="footer" class="noprint"></footer>
</div>

<div class="grid-overlay">
    <div class="grid-overlay__wrapper clearfix">
        <div class="col-1"></div>
        <div class="col-1"></div>
        <div class="col-1"></div>
        <div class="col-1"></div>
        <div class="col-1"></div>
        <div class="col-1"></div>
        <div class="col-1"></div>
        <div class="col-1"></div>
        <div class="col-1"></div>
        <div class="col-1"></div>
        <div class="col-1"></div>
        <div class="col-1"></div>
    </div>
</div>

<script type="text/javascript">

function regrasVendaOnline(){
	//window.open("venda-online/comocomprar.pdf?v=011");
	window.open("/editais/regras-VOL/comocomprar.pdf?v=01");
	
}

function formasPagamento(){
	window.open("https://habitacao.caixa.gov.br/siopiweb-web/simulaOperacaoInternet.do?method=inicializarCasoUso", "Simulador", "scrollbars=yes,width=1001,height=800");
}

function Imovel_Ocupado()
{
	alert("Não é possível efetuar agendamento de visita para um imóvel ocupado.");
}

function exibefoto(nome){
	alert("<img src='" + nome + "'>");
}

function ExibeDoc(documento){
	window.open(documento,'Edital ' + documento);
}


exibeLances = function(msg) {

	$('#div_dialog_simov').html(msg)
	$( "#div_dialog_simov" ).dialog({
		resizable: false,
		dialogClass: "no_titlebar",
		height:580,
		width:440,
		modal: true,
		buttons: {
			"OK": function() {
				$( this ).dialog( "close" );
				$('#div_dialog_simov').html('');
				//timerTela = setTimeout( refreshTela, 1000);
			}
		}
	});
};	


function visualizarLances(nuProposta){

	NU_PROPOSTA = nuProposta;
	
	$.post("venda-online/carregaLances.asp",
	{
		p_hdnProposta: "",
		p_hdnImovel: "01444410505954"
	},
	function(data, status){
		if (status=="success") {
			if (consultaRealizada(data)) {
				//habilitaTimer = false;
				exibeLances(data);
			//} else {
			//	clearTimeout(timerTela);
			//	$('#listaPropostas').html('<div class="feedback feedback-warning"><span class="feedback-text">Nenhuma disputa em andamento.</span></div>');
			//	$('#listaPropostas').show();		
			}
		}
	});
}

function consultaRealizada(retorno){
	if (retorno.indexOf("Nenhum") > -1 || retorno.indexOf("Não há dados") > -1 || retorno.indexOf("Ocorreu") > -1 || retorno.indexOf("Fechar a seção") > -1){
		closePrompt();
		//if (retorno.indexOf("Fechar a seção") > -1) {
			//limpasessao();
			//logout2();
		//} else {
			if (retorno.indexOf("Não há dados") > -1 ) 
				alert("<h6>Não há lances registrados para o imóvel.</h6>");
		//}
		//habilitaTimer = false;
		return false;
	} else {
		return true;
	}
}


confirmacao = function() {
	jQuery('#div_dialog_simov').html("<span class='ui-icon ui-icon-alert' style='float:left; margin:0 7px 20px 0;'></span><h5>Este imóvel foi adicionado a sua lista com sucesso.</h5>Selecione uma das opções abaixo:<br>")
	$( "#div_dialog_simov" ).dialog({
		resizable: false,
		dialogClass: "no_titlebar",
		height:320,
		width:440,
		modal: true,
		buttons: {
			"Ir para a minha lista": function() {
				$( this ).dialog( "close" );
				jQuery('#div_dialog_simov').html('');
				$('#frm_detalhe').attr('action','minha-lista.asp').trigger('submit');
			},
			"Ver mais imóveis": function() {
				$( this ).dialog( "close" );
				jQuery('#div_dialog_simov').html('');
			}
		}
	});
};	

function Incluir_Lista(NumImovel)
{
	var iPos
	var sSelecao = jQuery('#hdninteresse').val();
	var sBase = "||" + sSelecao + "||";

	iPos = sBase.indexOf("||" + NumImovel + "||");
    if (iPos == -1)
	{
		if (sSelecao != "")
		{  
			sSelecao = sSelecao + "||";  
		}
		jQuery('#hdninteresse').val(sSelecao + NumImovel);
	}

	jQuery('#hdnimovel').val(NumImovel);
	confirmacao();

}

window.onload = function () {
	carregaContador();
}

function Agendar_Visita(NumImovel)
{
	var iPos
	var sSelecao = jQuery('#hdninteresse').val();
	var sBase = "||" + sSelecao + "||";

	iPos = sBase.indexOf("||" + NumImovel + "||");
    if (iPos == -1)
	{
		if (sSelecao != "")
		{  
			sSelecao = sSelecao + "||";  
		}
		jQuery('#hdninteresse').val(sSelecao + NumImovel);
	}
	jQuery('#hdnimovel').val(NumImovel);
	$('#frm_detalhe').attr('action','agendar-visita.asp').trigger('submit');
}


function Interesse(NumImovel)
{
	jQuery('#hdnimovel').val(NumImovel);
	$('#frm_detalhe').attr('action','tenho-interesse.asp').trigger('submit');
}

function Retornar()
{
	if (jQuery('#hdnorigem').val() == 'index')
		$('#frm_detalhe').attr('action','index.asp#destaques').trigger('submit')
	else {
		if (jQuery('#hdnorigem').val() == 'minhalista')
			$('#frm_detalhe').attr('action','minha-lista.asp').trigger('submit')
		else {
			if (jQuery('#hdnorigem').val() == 'favoritos')
				$('#frm_detalhe').attr('action','venda-online/favoritos.asp?hdnorigem=detalhe&hdnimovel=01444410505954&hdn_estado=&hdn_cidade=6987&hdn_bairro=&hdnQtdPag=&hdnPagNum=').trigger('submit')
			else {
				//jQuery('#hdnNumTipoVenda').val('0');
				//$('#frm_detalhe').attr('action','busca-imovel.asp?hdnNumTipoVenda=0').trigger('submit');
				$('#frm_detalhe').attr('action','busca-imovel.asp?hdnLocalidade=6987&hdnModalidade=&hdnValorSimulador=&hdnAceitaFGTS=&hdnAceitaFinanciamento=').trigger('submit');
			}
		}
	}
}

function Proposta()
{
	$('#frm_detalhe').attr('action','venda-online/index.asp?hdnimovel=01444410505954&hdn_estado=&hdn_cidade=6987&hdn_bairro=&hdnQtdPag=&hdnPagNum=').trigger('submit');
}


SiteLeiloeiro = function(site) {
	jQuery('#div_dialog_simov').html("<span class='ui-icon ui-icon-alert' style='float:left; margin:0 7px 20px 0;'></span><h5>Atenção</h5>Você será direcionado(a) para o site do Leiloeiro previsto no edital.")
	$( "#div_dialog_simov" ).dialog({
		resizable: false,
		dialogClass: "no_titlebar",
		height:320,
		width:440,
		modal: true,
		buttons: {
			"Ok": function() {
				
				$( this ).dialog( "close" );
				jQuery('#div_dialog_simov').html('');
				
				if (site.indexOf('http') == -1) {
					window.open('http://'+site);
				} else {
					window.open(site);
				}
			},
			"Cancelar": function() {
				$( this ).dialog( "close" );
				jQuery('#div_dialog_simov').html('');
			}
		}
	});
};	



var contaRefresh = 15;
function carregaContador(){
	
	if (contaRefresh == 15) {
		contaRefresh = 0;
		$.post("venda-online/carregaContador.asp",
		{
			strLista: "1@@" + "21/12/2023 18:00:00" + "@@" + "" + "||"
		},
		function(data, status){
			if (status=="success") {
				if (data != 'Fechar a seção') {
					$('#divContador').html(data.replace("||", ""));
					//if ("" == "")
					//	$('#divContador').html(data.replace("||", ""))
					//else
					//	$('#divContador').html("<div style='font-size: 10pt; color: #fff; background: #ff7200; padding: 5px; position: absolute; Top: " + ($('#divContador').position().top+20) + "px; Left: " + ($('#divContador').position().left+320) + "px;'><b>Imóvel em disputa</b></div>" + data.replace("||", ""));
				} else {
					logout2();
				}
			}
		});
	} else {
		var dias = $('#dias0').text().replace('DIAS', '').trim();
		var horas = $('#horas0').text().replace('HORAS', '').trim();
		var minutos = $('#minutos0').text().replace('MINUTOS', '').trim();
		var segundos = $('#segundos0').text().replace('SEGUNDOS', '').trim();
		
		//console.log(dias + ' - ' + horas + ' - ' + minutos + ' - ' + segundos);
		
		var prazo = (Number(dias) * 86400) + (Number(horas) * 3600) + (Number(minutos) * 60) + Number(segundos);
		var resto = 0;
		
		//console.log(prazo);
		prazo -= 1;
		//console.log(prazo);
		
		if (prazo > 0){
			if (prazo >= 86400){
				dias = prazo / 86400;
				resto = prazo % 86400;
			} else {
				resto = prazo;
			}
			//console.log(resto);
			if (resto >= 3600) {
				horas = resto / 3600;
				resto = resto % 3600;
			}
			//console.log(resto);
			if (resto >= 60) {
				minutos = resto / 60;
				resto = resto % 60;
			}
			//console.log(resto);
			segundos = resto
			
			//console.log(parseInt(dias) + ' - ' + parseInt(horas) + ' - ' + parseInt(minutos) + ' - ' + parseInt(segundos));
		} else {
			dias = 0;
			horas = 0;
			minutos = 0;
			segundos = 0;
		}
		
		var dias_s = '0' + String(parseInt(dias));
		var horas_s = '0' + String(parseInt(horas));
		var minutos_s = '0' + String(parseInt(minutos));
		var segundos_s = '0' + String(parseInt(segundos));

		$('#dias0').html('&nbsp' + dias_s.substring(dias_s.length-2, dias_s.length) + '&nbsp;<span class="time-part-label time-part-label-dias">DIAS</span>');
		$('#horas0').html('&nbsp' + horas_s.substring(horas_s.length-2, horas_s.length) + '&nbsp;<span class="time-part-label time-part-label-horas">HORAS</span>');
		$('#minutos0').html('&nbsp' + minutos_s.substring(minutos_s.length-2, minutos_s.length) + '&nbsp;<span class="time-part-label time-part-label-minutos">MINUTOS</span>');
		$('#segundos0').html('&nbsp' + segundos_s.substring(segundos_s.length-2, segundos_s.length) + '&nbsp;<span class="time-part-label time-part-label-minutos">SEGUNDOS</span>');
	}
	timerContador = setTimeout( carregaContador, 1000);
	contaRefresh++;
}

logout2 = function() {
	jQuery('#div_dialog_simov').html("<h5>Sua sessão expirou.</h5>Refaça a pesquisa de imóveis.");
	$( "#div_dialog_simov" ).dialog({
		resizable: false,
		dialogClass: "no_titlebar",
		height:300,
		width:340,
		modal: true,
		buttons: {
			"OK": function() {
				$( this ).dialog( "close" );
				jQuery('#div_dialog_simov').html('');
				$('#frm_detalhe').attr('action','busca-imovel.asp?hdnNumTipoVenda=').trigger('submit');
			}
		}
	});
};

</script>

</body>
</html>

`;
