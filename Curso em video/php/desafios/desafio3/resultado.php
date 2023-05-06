<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conversor de Moeda</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
        <h1>Conversor de Moeda v1.0</h1>
        
        <?php 
            $dinheiroReal = $_POST['dinheiro'];
            $dinheiroDolar = $dinheiroReal / 4.9;
            $dinheiroDolar = number_format($dinheiroDolar, 2, ",");

            echo "<p>Seus R$ $dinheiroReal equivalem a <strong>U$ $dinheiroDolar</strong></p>";
            echo "<p><strong>Cotação fixada de R$4,9</strong> informada no código</p>";
        ?>

        <a href="javascript:history.go(-1)"><input type="button" value="Voltar"></a>
    </main>
</body>
</html>