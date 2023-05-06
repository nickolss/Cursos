<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salário Mínimo</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <?php
        $salario = $_POST['sal'] ?? 0;
    ?>

    <main>
        <form action="<?= $_SERVER['PHP_SELF'] ?>" method="post">
            <label for="sal">Salário (R$)</label>
            <input type="number" name="sal" id="sal">

            <p>Considerando o salário mínimo de <strong>R$1.380,00</strong></p>

            <input type="submit" value="Calcular">
        </form>
    </main>
    <section>
        <h2>Resultado Final</h2>
        <?php
            $quantidadeSalario = intdiv($salario , 1_380.60);
            $quantidadeExcedente = $salario % 1_380.60;



            $padraoDinheiro = numfmt_create("pt_BR", NumberFormatter::CURRENCY);

            $salario = numfmt_format_currency($padraoDinheiro, $salario, "BRL");
            $quantidadeExcedente = numfmt_format_currency($padraoDinheiro,  $quantidadeExcedente, "BRL");
            echo "Quem recebe um salário de $salario ganha  <strong>$quantidadeSalario salário mínimos</strong> +    $quantidadeExcedente";
        ?>
    </section>
</body>

</html>