<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Tempo</title>
</head>
<body>
    <?php 
        $segundos = $_POST['seg'];
    ?>
    <main>
        <h3>Calculadora de Tempo</h3>
        <form action="<?= $_SERVER['PHP_SELF']?>" method="post">
            <label for="seg">Qual é o total em segundos?</label>
            <input type="number" name="seg" id="seg">

            <input type="submit" value="Calcular">
        </form>
    </main>

    <section>
        <h2>Totalizando Tudo</h2>
        <?php 
            $seg = $_POST['seg'];
            
        ?>
    </section>
</body>
</html>