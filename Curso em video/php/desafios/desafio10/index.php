<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcular idade</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php 
        $anoDeNascimento = $_POST['anoNasc'] ?? 0;
        $anoDesejado = $_POST['anoDesejado'] ?? 0;
        $anoAtual = date("Y");
    ?>
    <main>
        <form action="<?= $_SERVER['PHP_SELF']?>" method="post">
            <label for="anoNasc">Em que ano você nasceu? </label>
            <input type="number" name="anoNasc" id="anoNasc" max="<?= $anoAtual ?>">

            <label for="anoDesejado">Quer saber sua idade em que ano? (atualmente estamos em <?= "<strong>$anoAtual</strong>"?>)</label>
            <input type="number" name="anoDesejado" id="anoDesejado" value="<?=$anoAtual?>">

            <input type="submit" value="Qual será minha idade? ">
        </form>
    </main>

    <section>
        <h2>Resultado</h2>

        <?php 
            if($anoDesejado < $anoDeNascimento){
                echo "Você não era nascido no ano de $anoDesejado"; 
            }else{
                $idade = $anoDesejado - $anoDeNascimento;
                echo "<p>Quem nasceu em $anoDeNascimento vai ter <strong>$idade anos</strong> em $anoDesejado!</p>";
            }

            
        ?>
    </section>
</body>
</html>