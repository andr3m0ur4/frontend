<main class="container mt-4">
    <h1>Meus Anúncios</h1>

    <a href="/anuncios/adicionar" class="btn btn-outline-dark">Adicionar Anúncio</a>

    <table class="table table-striped">
        <thead>
            <tr>
                <th>Foto</th>
                <th>Título</th>
                <th>Valor</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($anuncios as $anuncio) : ?>
                <tr>
                    <td>
                        <?php if (!empty($anuncio->url)) : ?>
                            <img src="/assets/images/anuncios/<?= $anuncio->url ?>" height="75" alt="Foto Anúncio">
                        <?php else : ?>
                            <img src="/assets/images/default.jpg" height="75" alt="Foto Anúncio">
                        <?php endif ?>
                    </td>
                    <td><?= $anuncio->titulo ?></td>
                    <td>R$ <?= number_format($anuncio->valor, 2, ',', '.') ?></td>
                    <td>
                        <a href="/anuncios/editar/<?= $anuncio->id ?>" class="btn btn-primary">Editar</a>
                        <a href="/anuncios/excluir/<?= $anuncio->id ?>" class="btn btn-danger">Excluir</a>
                    </td>
                </tr>
            <?php endforeach ?>
        </tbody>
    </table>
</main>

<!-- Modal -->
<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Excluir Produto</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Tem certeza que deseja excluir o produto?<br>
                <span class="font-weight-bold" id="product"></span>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                <button type="button" class="btn btn-danger">Excluir</button>
            </div>
        </div>
    </div>
</div>