<header class="container-fluid">
    <div class="jumbotron">
        <h1>Nós temos <?= $total_anuncios ?> anúncios hoje.</h1>
        <p>E mais de <?= $total_usuarios ?> usuários cadastrados.</p>
    </div>
</header>

<main class="container-fluid">
    <div class="row">
        <div class="col-sm-3">
            <h4>Pesquisa Avançada</h4>

            <form method="get">
                <div class="form-group">
                    <label for="categoria">Categoria:</label>
                    <select name="filtros[categoria]" id="categoria" class="form-control">
                        <option></option>
                        <?php foreach ($categorias as $categoria) : ?>
                            <option value="<?= $categoria->id ?>" <?= $categoria->id == $filtros['categoria'] ? 'selected' : '' ?>><?= $categoria->nome ?></option>
                        <?php endforeach ?>
                    </select>
                </div>

                <div class="form-group">
                    <label for="preco">Preço:</label>
                    <select name="filtros[preco]" id="preco" class="form-control">
                        <option></option>
                        <option value="0-50" <?= $filtros['preco'] == '0-50' ? 'selected' : '' ?>>R$ 0 - 50</option>
                        <option value="51-100" <?= $filtros['preco'] == '51-100' ? 'selected' : '' ?>>R$ 51 - 100</option>
                        <option value="101-200" <?= $filtros['preco'] == '101-200' ? 'selected' : '' ?>>R$ 101 - 200</option>
                        <option value="201-500" <?= $filtros['preco'] == '201-500' ? 'selected' : '' ?>>R$ 201 - 500</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="estado">Estado de Conservação:</label>
                    <select name="filtros[estado]" id="estado" class="form-control">
                        <option></option>
                        <option value="0" <?= $filtros['estado'] == '0' ? 'selected' : '' ?>>Ruim</option>
                        <option value="1" <?= $filtros['estado'] == '1' ? 'selected' : '' ?>>Bom</option>
                        <option value="2" <?= $filtros['estado'] == '2' ? 'selected' : '' ?>>Ótimo</option>
                    </select>
                </div>

                <div class="form-group">
                    <button class="btn btn-info">Buscar</button>
                </div>
            </form>
        </div>
        <div class="col-sm-9">
            <h4>Últimos Anúncios</h4>

            <table class="table table-striped">
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
                            <td>
                                <a href="/produto/abrir/<?= $anuncio->id ?>"><?= $anuncio->titulo?></a>
                                <span class="d-block"><?= $anuncio->categoria ?></span>
                            </td>
                            <td>R$ <?= number_format($anuncio->valor, 2) ?></td>
                        </tr>
                    <?php endforeach ?>
                </tbody>
            </table>

            <ul class="pagination justify-content-center">
                <?php for ($i = 0; $i < $total_paginas; $i++) : ?>
                    <li class="page-item <?= $pagina == $i + 1 ? 'active' : '' ?>">
                        <a class="page-link" href="/?<?= $this->construirSearchQuery($i + 1) ?>"><?= $i + 1 ?></a>
                    </li>
                <?php endfor ?>
            </ul>
        </div>
    </div>
</main>