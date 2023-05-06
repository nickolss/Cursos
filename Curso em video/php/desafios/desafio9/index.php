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
        $valor1 = $_POST['num1'] ?? 0;
        $valor2 = $_POST['num2'] ?? 0;
        $peso1 = $_POST['peso1'] ?? 1;
        $peso2 = $_POST['peso2'] ?? 1;
    ?>
    <main>
        <form action="<?= $_SERVER['PHP_SELF']?>" method="post">
            <label for="num1">1° Valor</label>
            <input type="number" name="num1" id="num1">
            <label for="peso1">1° Peso</label>
            <input type="number" name="peso1" id="peso1">

            <label for="num2">2° Valor</label>
            <input type="number" name="num2" id="num2">
            <label for="peso2">2° Peso</label>
            <input type="number" name="peso2" id="peso2">

            <input type="submit" value="Calcular Raízes">
        </form>
    </main>

    <section>
        <h2>Cálculo de Médias</h2>
        <?php 
            $mediaNormal = ($valor1 + $valor2) / 2;
            $mediaPonderada = (($peso1 * $valor1) + ($peso2 * $valor2)) / ($peso1 + $peso2);

            $mediaNormal = number_format($mediaNormal, 2, "," , ".");
            $mediaPonderada = number_format($mediaPonderada, 2, "," , ".");

            echo "<p>Analisando os valores de $valor1 e $valor2: </p>";
            echo "<ul>";
            echo "<li>A <strong>Média Aritmética Simples</strong> entre os valores é igual a $mediaNormal</li>";
            echo "<li>A <strong>Média Aritmética Ponderada</strong> com pesos de $peso1 e $peso2 é igual a $mediaPonderada</li>";
            echo "</ul>";
        ?>
    </section>
</body>
</html>