<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Antecessor e Sucessor</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
    <h1>Resultado Final</h1>
        <?php 
            $num = $_POST['num'];
            $antecessor = $num-1;
            $sucessor = $num+1;

            echo "<p>O número escolhido foi <strong>$num</strong></p>";
            echo "<p>O seu <em>antecessor</em> é $antecessor</p>";
            echo "<p>O seu <em>sucessor</em> é $sucessor</p>";
        ?>

        <a href="javascript:history.go(-1)"><button>&#x2B05; Voltar</button></a>
    </main>
</body>
</html>