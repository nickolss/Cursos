<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Resultado do Processamento</h1>
    </header>
    <main>
        <?php 
            // $_REQUEST = $_POST + $_GET
            $nome = $_POST['nome'] ?? "sem nome"; //Esse ?? é para caso não tenha um valor em $_POST['nome']. É chamado de operador de coalescência nula
            $sobreNome = $_POST['sobreNome'] ?? "sem sobrenome";  

            echo "<p>É um prazer te conhecer, $nome $sobreNome! Este é meu site.";
        ?>

        <p><a href="javascript:history.go(-1)">Voltar para a página inicial</a></p>
    </main>
</body>
</html>