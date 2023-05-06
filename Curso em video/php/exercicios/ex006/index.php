<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario retroalimentado</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php 
        //Aqui capturamos os dados do form
        $valor1 = $_POST['num1'] ?? 0;
        $valor2 = $_POST['num2'] ?? 0;
    ?>
    <main>
        <h1>Somador de Valores</h1>
        <form action="<?= $_SERVER['PHP_SELF']?>" method="post">
            <label for="num1">Número 1</label>
            <input type="number" name="num1" id="num1" value="<?= $valor1 ?>">

            <label for="num2">Número 2</label>
            <input type="number" name="num2" id="num2" value="<?= $valor2 ?>">
            <input type="submit" value="Calcular">
        </form>
    </main> 

    <section id="resultado">
        <h2>Resultado da Soma</h2>
        <?php 
            echo "<p>A soma entre $valor1 e $valor2 é " . $valor1 + $valor2 . "</p>";
        ?>
    </section>
</body>
</html>