<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reajustador de Preço</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <?php 
        $preco = (float)$_POST['preco'] ?? 0;
        $porcentagem = $_POST['porcent'] ?? 0;
    ?>

    <main>
        <h2>Reajustador de Preço</h2>
        <form action="<?= $_SERVER['PHP_SELF']?>" method="post">
            <label for="preco">Preço de Produto (R$) </label>
            <input type="number" name="preco" id="preco">

            <label for="porcent">qual será o percentual de reajuste? (<?="$porcentagem %"?>)</label>
            <input type="range" name="porcent" id="porcent" min="0" max="100">

            <input type="submit" value="Reajustar">
        </form> 
    </main>

    <section>
        <h2>Resultado do Reajuste</h2>
        <?php 
            $valorDaPorcentagem = $preco * ($porcentagem / 100);
            
            $novoPreco = $preco + $valorDaPorcentagem;
            echo "O produto que custava R$" . number_format($preco, 2, "," , ".") . ", com <strong>$porcentagem% de aumento</strong> vai passar a custar <strong>" . number_format($novoPreco, 2, "," , ".") . "</strong> a partir de agora.";

        ?>
    </section>
</body>
</html>