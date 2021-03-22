<main class="container-fluid mt-4">
    <div class="row">
        <div class="col-sm-5">
            
            <div class="carousel slide" data-ride="carousel" id="carousel">
                <div class="carousel-inner" role="listbox">
                    <?php if (count((array) $dado->fotos) > 0) : ?>
                        <?php foreach ($dado->fotos as $chave => $foto) : ?>
                            <div class="carousel-item <?= $chave == 0 ? 'active' : '' ?>">
                                <img src="/assets/images/anuncios/<?= $foto->url ?>" alt="Foto Anúncio" class="d-block w-100">
                            </div>
                        <?php endforeach ?>
                    <?php else : ?>
                        <img src="/assets/images/default.jpg" alt="Foto Default" class="d-block w-100">
                    <?php endif ?>
                </div>
                <a href="#carousel" class="carousel-control-prev" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Anterior</span>
                </a>
                <a href="#carousel" class="carousel-control-next" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Próximo</span>
                </a>
            </div>

        </div>
        <div class="col-sm-7">
            <h1><?= $dado->titulo ?></h1>
            <h4><?= $dado->categoria ?></h4>
            <p><?= $dado->descricao ?></p>
            <h3 class="mt-5">R$ <?= number_format($dado->valor, 2) ?></h3>
            <h4>Telefone: <?= $dado->telefone ?></h4>
        </div>
    </div>
</main>