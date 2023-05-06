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
        <form action="resultado.php" method="post">
            <label for="num">Número Real: </label>
            <input type="number" name="num" id="num" step="0.001"> <!-- Esse step é para ele aceitar números com até 3 casas decimais -->
            <input type="submit" value="Analisar">
        </form>
    </main>
</body>
</html>