<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Número random</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
        <h1>trabalhando com números aleatórios</h1>
        <p>Gerando um valor aleatório de 0 a 100...</p>
        <?php 
            //$numRandom = rand(0,100); //Essa função é mais antiga e lente
            //$numRandom = random_int(); //É o mais lento, porém o MAIS SEGURO

            $numRandom = mt_rand(0,100); //Função mais rápida e atualizada

        

            echo "<p>O número gerado foi <strong>$numRandom</strong></p>"
        ?>
        <a href="numRandom.php"><input type="button" value="&#x1F501; Gerar Outro"></a>
    </main>
</body>
</html>