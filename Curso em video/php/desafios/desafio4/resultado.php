<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conversor de Moeda 2.0</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
        <h1>Conversor de Moeda v2.0</h1>
        
        <?php 
            $inicio = date("m-d-Y" , strtotime("-7 days")); //Pega o dia atual e volta 7 dias antes
            $fim = date("m-d-Y");  

            $url = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial=\''.  $inicio .'\'&@dataFinalCotacao=\''. $fim .'\'&$top=1&$orderby=dataHoraCotacao%20desc&$format=json&$select=cotacaoCompra,dataHoraCotacao';



            $dados = json_decode(file_get_contents($url) , true); //Esse true faz com que a cotação fique dentro de um ARRAY não de um OBJETO

            $cotacao = $dados["value"][0]["cotacaoCompra"];

            $dinheiroReal = $_POST['dinheiro'];
            $dinheiroDolar = $dinheiroReal / $cotacao;

            $padraoFormatacaoNum = numfmt_create("pt_BR" , NumberFormatter::CURRENCY); //Está falando que vai formatar no padrão BR com uma formatação de CURRENCY (dinheiro)

            $dinheiroReal = numfmt_format_currency($padraoFormatacaoNum, $dinheiroReal, "BRL");

            $dinheiroDolar = numfmt_format_currency($padraoFormatacaoNum, $dinheiroDolar, "USD");

            echo "<p>Seus $dinheiroReal equivalem a <strong>$dinheiroDolar</strong></p>";
            echo "<p>Cotação pega do site do <a href='https://bcb.gov.br'>Banco Central do Brasil</a></p>";
        ?>

        <a href="javascript:history.go(-1)"><input type="button" value="Voltar"></a>
    </main>
</body>
</html>