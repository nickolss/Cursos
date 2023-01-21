<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP - Udemy</title>
</head>
<body>
    <?php
        $data = date("d/m/Y"); //Os parâmetros definem como é a formatação da Data
        echo "<p> A data atual é {$data} </p>"; //Não precisa da {}, mas é bom para não ter equívoco do interpretador
    ?>
</body>
</html>