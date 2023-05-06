<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Raizes</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php 
        $num = $_POST['num'] ?? 0;
    ?>
    <main>
        <form action="<?= $_SERVER['PHP_SELF']?>" method="post">
            <label for="num">Número</label>
            <input type="number" name="num" id="num">

            <input type="submit" value="Calcular Raízes">
        </form>
    </main>

    <section>
        <h2>Resultado Final</h2>
        <?php 
            $raizQuadrada = sqrt($num);
            $raizCubica = $num ** (1/3);

            $raizQuadrada = number_format($raizQuadrada, 2, "," , ".");
            $raizCubica = number_format($raizCubica, 2, "," , ".");

            echo "<p>Analisando o <strong>número $num</strong>, temos: </p>";
            echo "<ul>";
            echo "<li>A sua raiz quadrada é <strong>$raizQuadrada</strong></li>";
            echo "<li>A sua raiz cúbica é <strong>$raizCubica</strong></li>";
            echo "</ul>";
            ?>
    </section>
</body>
</html>