<header class="container-fluid">
    <div class="jumbotron">
        <h1>Nós temos <span id="products"></span> anúncios hoje.</h1>
        <p>E mais de <span id="stores"></span> lojas cadastradas.</p>
    </div>
</header>

<main class="container-fluid">
    <div class="row">
        <div class="col-sm-3">
            <h4>Pesquisa Avançada</h4>

            <form method="get">
                <div class="form-group">
                    <label for="category">Categoria:</label>
                    <select name="filtros[categoria]" id="category" class="form-control">
                        <option></option>
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
                <tbody></tbody>
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