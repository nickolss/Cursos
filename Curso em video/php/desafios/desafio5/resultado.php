<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Analisador de número real</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
        <h1>Analisador de Número Real</h1>
        <?php 
            $numTotal = $_POST['num'];
            

            $numInteiro = (int) $numTotal; 

            $numFracional = $numTotal - $numInteiro;

            echo "<p>Analisando o número <strong>" . $numTotal = number_format($numTotal , 3 , "," , ".") ."</strong> informado pelo usuário:</p>";
            echo "<ul>";
            echo "<li>A parte inteira do número é $numInteiro</li>";
            echo "<li>A parte fracionária do número é " . $numFracional = number_format($numFracional, 3 , "," , ".")."</li>";
            echo "</ul>";
        ?>
        <a href="javascript:history.go(-1)"><button>Voltar</button></a>
    </main>
</body>
</html>